import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc =  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function ResumePreview() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <section className="max-w-4xl mx-auto">
            <div className="flex justify-center">
                <Document
                    file="/assets/pdf/Mohammad Erfanul_Islam.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<p>Loading PDF…</p>}
                    className="w-full flex justify-center flex-col"
                >
                {Array.from(new Array(numPages), (el, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={1.1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mb-1 shadow-lg rounded"
                />
                ))}
                </Document>
            </div>
            <div className="mt-4 flex gap-3">
                <a
                href="/assets/pdf/Mohammad Erfanul_Islam.pdf"
                download
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:opacity-90"
                >
                Download PDF
                </a>
                <a
                href="/assets/pdf/Mohammad Erfanul_Islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border rounded"
                >
                Open in new tab
                </a>
            </div>
        </section>
    );
}
