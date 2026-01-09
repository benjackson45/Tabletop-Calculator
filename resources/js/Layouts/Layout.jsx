import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    FiHome,
    FiGlobe,
    FiShield,
    FiPlusSquare,
    FiMenu,
    FiChevronDown,
    FiChevronRight,
    FiCpu,
    FiList,
    FiPlus,
} from "react-icons/fi";

export default function Layout({ children }) {
    const { url } = usePage();
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    // ---------- auto-open based on route ----------
    useEffect(() => {
        if (url.startsWith("/global")) setOpenMenu("global");
        else if (url.startsWith("/40k")) setOpenMenu("wh40k");
        else setOpenMenu(null);
    }, [url]);

    const gradientHover = `
        bg-[linear-gradient(90deg,theme(colors.pumpkin.500)_0%,theme(colors.pumpkin.500)_30%,theme(colors.midnight.500)_50%,theme(colors.midnight.500)_100%)]
        bg-[length:200%_100%]
        bg-right
        hover:bg-left
        transition-[background-position]
        duration-300
    `;

    const simpleHover = `
        hover:bg-pumpkin-500
        transition-colors
        duration-300
    `;

    const gradientBg = collapsed ? simpleHover : gradientHover;

    const NavLink = ({ href, icon: Icon, label }) => (
        <Link
            href={href}
            className={`flex items-center gap-3 p-2 rounded overflow-hidden ${gradientBg}`}
        >
            <Icon className="min-w-[20px]" size={18} />
            {!collapsed && (
                <span className="truncate whitespace-nowrap text-sm">
                    {label}
                </span>
            )}
        </Link>
    );

    const Dropdown = ({ id, icon: Icon, label, baseHref, children }) => {
        const isOpen = openMenu === id;

        const commonClasses = `flex items-center gap-3 p-2 rounded overflow-hidden ${gradientBg}`;

        // ---------- COLLAPSED: act as link ----------
        if (collapsed) {
            return (
                <Link
                    href={`${baseHref}/calculate`}
                    className={commonClasses}
                >
                    <Icon className="min-w-[20px]" size={18} />
                </Link>
            );
        }

        // ---------- EXPANDED: act as dropdown ----------
        return (
            <div className="flex flex-col">
                <button
                    onClick={() => setOpenMenu(isOpen ? null : id)}
                    className={commonClasses}
                >
                    <Icon className="min-w-[20px]" size={18} />

                    <div className="flex items-center gap-2 w-full">
                        <span className="truncate text-sm text-left">
                            {label}
                        </span>

                        <div className="ml-auto">
                            {isOpen ? (<FiChevronDown size={14} />) : (<FiChevronRight size={14} />)}
                        </div>
                    </div>
                </button>

                {/* Animated dropdown */}
                <div
                    className={`
                        grid transition-[grid-template-rows]
                        duration-300 ease-out
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                >
                    <div className="overflow-hidden ml-7 mt-1 flex flex-col gap-1">
                        {children}
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="flex min-h-screen">
            <aside
                className={`
                    bg-midnight-500 text-platinum-300
                    transition-all duration-300
                    ${collapsed ? "w-16" : "w-60"}
                    flex flex-col
                `}
            >
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`
                        flex gap-3 mx-2 p-2 py-4 rounded
                        ${gradientBg}
                        text-pale-sky-500
                        hover:text-platinum-300
                        active:text-midnight-500
                    `}
                >
                    <FiMenu size={20} />
                </button>

                <nav className="flex flex-col gap-1 px-2">
                    <NavLink href="/" icon={FiHome} label="Home" />

                    <Dropdown id="global" icon={FiGlobe} label="Global War">
                        <NavLink href="/global/calculate" icon={FiCpu} label="Calculate" />
                        <NavLink href="/global/units" icon={FiList} label="Units" />
                        <NavLink href="/global/new-unit" icon={FiPlus} label="New Unit" />
                    </Dropdown>

                    <Dropdown id="wh40k" icon={FiShield} label="Warhammer 40k">
                        <NavLink href="/40k/calculate" icon={FiCpu} label="Calculate" />
                        <NavLink href="/40k/units" icon={FiList} label="Units" />
                        <NavLink href="/40k/new-unit" icon={FiPlus} label="New Unit" />
                    </Dropdown>

                    <NavLink href="/new" icon={FiPlusSquare} label="Add New" />
                </nav>
            </aside>

            <main className="flex-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    );
}