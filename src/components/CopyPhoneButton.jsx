"use client";

import { useState } from "react";

export default function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText("9618423541");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyNumber}
      className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
    >
      {copied ? "Number Copied!" : "Call for Order"}
    </button>
  );
}
