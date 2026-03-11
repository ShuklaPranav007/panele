import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = "Reactjs" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-code-border bg-black text-blue-600 overflow-hidden">
      <div className="flex items-center justify-between border-b border-code-border px-4 py-2">
        <span className="text-xs font-mono text-white">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-gray-200 hover:text-white hover:bg-blue-600 transition"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-blue-300">{code}</code>
      </pre>
    </div>
  );
};
