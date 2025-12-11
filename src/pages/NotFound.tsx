import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      {/* Animated Icon (Tailwind only, no Framer Motion) */}
      <div className="mb-6 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-24 h-24 text-blue-600 drop-shadow-lg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Error Code */}
      <h1 className="text-6xl font-extrabold text-gray-800 tracking-widest mb-4">404</h1>

      {/* Message */}
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Looks like this page is lost in space.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105"
      >
        Go to Home
      </Link>
    </div>
  );
}
