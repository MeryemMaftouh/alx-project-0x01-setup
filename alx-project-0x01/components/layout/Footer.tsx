import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} ALX Project</span>
        <span className="hidden sm:inline">Built with Next.js & Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;
