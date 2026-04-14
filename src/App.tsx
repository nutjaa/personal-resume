import { useRef } from "react";
import html2pdf from "html2pdf.js";
import Resume from "./components/Resume";
import resumeData from "./data/resume";

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const element = document.getElementById("resume");
    if (!element) return;

    // html2pdf bundles an old html2canvas that doesn't support oklch (Tailwind v4 default).
    // Inject hex color overrides in the cloned document so html2canvas never sees oklch.
    const tailwindHexOverrides = `
      :root, * {
        --color-white: #ffffff;
        --color-black: #000000;
        --color-slate-50:  #f8fafc;
        --color-slate-100: #f1f5f9;
        --color-slate-200: #e2e8f0;
        --color-slate-300: #cbd5e1;
        --color-slate-400: #94a3b8;
        --color-slate-500: #64748b;
        --color-slate-600: #475569;
        --color-slate-700: #334155;
        --color-slate-800: #1e293b;
        --color-slate-900: #0f172a;
        --color-gray-50:  #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;
        --color-amber-50:  #fffbeb;
        --color-amber-100: #fef3c7;
        --color-amber-200: #fde68a;
        --color-amber-600: #d97706;
        --color-amber-700: #b45309;
        --color-amber-800: #92400e;
        --color-blue-600: #2563eb;
        --color-green-700: #15803d;
        --color-red-400: #f87171;
      }
    `;

    const opt = {
      margin: 0,
      filename: `${resumeData.name.replace(/\s+/g, "_")}_Resume.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        onclone: (_: Document, el: HTMLElement) => {
          const doc = el.ownerDocument;

          // Step 1: Strip oklch() from all <style> tags in the clone —
          // html2canvas parses raw stylesheet text and crashes on oklch *before*
          // CSS cascade applies, so we must sanitize the source directly.
          doc.querySelectorAll("style").forEach((styleEl) => {
            if (styleEl.textContent) {
              styleEl.textContent = styleEl.textContent.replace(
                /oklch\([^)]*\)/g,
                "transparent"
              );
            }
          });

          // Step 2: Inject hex overrides so all Tailwind color variables resolve
          // correctly (replacing the "transparent" placeholders from step 1).
          const style = doc.createElement("style");
          style.textContent = tailwindHexOverrides;
          doc.head.appendChild(style);
        },
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait" as const,
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-200 py-4 px-2 md:py-10 md:px-4">
      {/* Toolbar */}
      <div className="no-print flex justify-center mb-6">
        <div className="flex items-center gap-3 bg-white rounded-xl shadow-lg px-6 py-3">
          <span className="text-sm font-medium text-slate-600">
            Personal Resume
          </span>
          <div className="h-4 w-px bg-slate-200" />
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume */}
      <div ref={resumeRef}>
        <Resume data={resumeData} />
      </div>
    </div>
  );
}

export default App;
