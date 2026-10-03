// components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold text-white">
                    MyPortfolio<span className="text-indigo-400">.</span>
                </Link>
                <ul className="flex gap-2">
                    {links.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${active
                                        ? "bg-indigo-500 text-white"
                                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}