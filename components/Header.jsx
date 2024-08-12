import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Krishna<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* Desktop Navigation */}

                <div className="hidden xl:flex gap-8 items-center">
                    <Nav />
                    <Link href="/contact">
                        <Button className="">Hire Me</Button>
                    </Link>
                </div>
                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
