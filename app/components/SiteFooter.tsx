import { siteConfig } from "@/app/site.config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-300/80 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} /{siteConfig.name}/</span>
        <span className="text-gray-300/60">
          Built with Next.js + Tailwind.
        </span>
      </div>
    </footer>
  );
}

