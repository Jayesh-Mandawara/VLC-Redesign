import "./Navbar.scss";

const navItems = [
    { label: "Features", href: "#features" },
    { label: "The Player", href: "#player" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Platforms", href: "#platforms" },
];

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__inner">
                <a href="#" className="navbar__brand" aria-label="VLC home">
                    <span className="navbar__cone">◢</span>
                    <span className="navbar__name">VLC</span>
                </a>

                <nav className="navbar__links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="navbar__link"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="navbar__menu"
                    type="button"
                    aria-label="Open menu"
                >
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
