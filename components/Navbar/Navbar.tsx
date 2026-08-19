"use client";

import { useState } from "react";
import "./Navbar.scss";

const navItems = [
    { label: "Features", href: "#features" },
    { label: "The Player", href: "#player" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Platforms", href: "#platforms" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${menuOpen ? "navbar--open" : ""}`}>
            <div className="navbar__inner">
                <a
                    href="#"
                    className="navbar__brand"
                    aria-label="VLC home"
                    onClick={handleLinkClick}
                >
                    <span className="navbar__cone">◢</span>
                    <span className="navbar__name">VLC</span>
                </a>

                <nav className="navbar__links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="navbar__link"
                            onClick={handleLinkClick}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="navbar__menu"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
