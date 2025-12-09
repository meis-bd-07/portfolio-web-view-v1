interface TocItem {
  id: string;
  label: string;
  indent?: boolean;
}

const tocItemsForDummy: TocItem[] = [
  { id: "creating-a-page", label: "Creating a page" },
  { id: "creating-a-layout", label: "Creating a layout" },
  { id: "creating-a-nested-route", label: "Creating a nested route" },
  { id: "nesting-layouts", label: "Nesting layouts" },
  { id: "creating-a-dynamic-segment", label: "Creating a dynamic segment" },
  { id: "rendering-with-search-params", label: "Rendering with search params" },
  { id: "what-to-use", label: "What to use and when", indent: true },
  { id: "linking-between-pages", label: "Linking between pages" },
  { id: "route-props-helpers", label: "Route Props Helpers" },
  { id: "api-reference", label: "API Reference" },
];

const tocItemsForProjects: TocItem[] = [
  { id: "0", label: "Pypypro (SaaS)" },
  { id: "1", label: "Salespype Mobile Application" },
  { id: "2", label: "Super Local Fans" },
  { id: "3", label: "Connect Social Mobile Application" },
  { id: "4", label: "Video Making Manager" },
  { id: "5", label: "Reward mobile application" },
  { id: "6", label: "Chatbot Ai" },
  { id: "7", label: "Nordisk CRM" },
  { id: "8", label: "Map Contact Mobile Application" },
  { id: "9", label: "Earn5Star" },
  { id: "10", label: "Call Tracking" },
  { id: "11", label: "Super Shop Management" },
];

export const tocItems: Record<string, TocItem[]> = {
    '/': [],
    '/about-me': [],
    '/projects': tocItemsForProjects,
    '/dummy': tocItemsForDummy
}
