"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/app/site.config";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/10 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <Link href="/" className="text-white font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <span className="text-xs text-gray-300/80">{siteConfig.timezoneLabel}</span>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          {links.map((l) => {
            const active =
              pathname === l.href || Boolean(pathname && pathname.startsWith(`${l.href}/`));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition ${
                  active ? "text-white" : "text-gray-200/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

