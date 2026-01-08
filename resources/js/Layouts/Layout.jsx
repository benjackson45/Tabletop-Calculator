import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    FiHome,
    FiGlobe,
    FiShield,
    FiPlusSquare,
    FiMenu,
} from "react-icons/fi";

export default function Layout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: FiHome },
        { name: "Global War", href: "/global", icon: FiGlobe },
        { name: "Warhammer 40k", href: "/40k", icon: FiShield },
        { name: "Add New", href: "/new", icon: FiPlusSquare },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside
                className={`
                    bg-midnight-500 text-platinum-300
                    transition-all duration-300
                    ${collapsed ? "w-16" : "w-60"}
                    flex flex-col
                `}
            >
                {/* Toggle */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="
                        flex gap-3 mx-2 p-2 py-4 rounded
                        bg-[linear-gradient(90deg,theme(colors.pumpkin.500)_0%,theme(colors.pumpkin.500)_30%,theme(colors.midnight.500)_50%,theme(colors.midnight.500)_100%)]
                        bg-[length:200%_100%]
                        bg-right
                        hover:bg-left
                        transition-[background-position]
                        duration-300
                        text-pale-sky-500
                        hover:text-platinum-300
                        active:text-midnight-500
                    "
                >
                    <FiMenu size={20} />
                </button>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 px-2">
                    {navItems.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="
                                flex items-center gap-3
                                p-2 rounded
                                overflow-hidden
                                bg-[linear-gradient(90deg,theme(colors.pumpkin.500)_0%,theme(colors.pumpkin.500)_30%,theme(colors.midnight.500)_50%,theme(colors.midnight.500)_100%)]
                                bg-[length:200%_100%]
                                bg-right
                                hover:bg-left
                                transition-[background-position]
                                duration-300
                            "
                        >
                            <Icon className="min-w-[20px]" size={20} />

                            {!collapsed && (
                                <span
                                    className="
                                        truncate
                                        text-sm
                                        whitespace-nowrap
                                    "
                                >
                                    {name}
                                </span>
                            )}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    );
}