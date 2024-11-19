import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="flex items-center gap-5 justify-center">
          <h1 className="text-6xl font-bold mb-4 text-[#4b4da6]">404</h1>
          <div className="text-9xl mb-8 flex items-center justify-center">
            <Frown color="#4b4da6" size={128} />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Requested Chart Not Found
        </h2>
        <Link
          href="/chart/scatter"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4b4da6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Charts
        </Link>
      </div>
    </div>
  );
}
