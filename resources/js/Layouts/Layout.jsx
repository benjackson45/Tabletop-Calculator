import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <>
            <header>
                <nav className="bg-midnight space-x-8 p-4 w-screen">
                    <Link className="text-platinum text-4xl hover:text-pale-sky active:text-pumpkin" href="/">
                        HOME
                    </Link>
                    <Link className="text-platinum text-4xl hover:text-pale-sky active:text-pumpkin" href="/test">
                        TEST
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}