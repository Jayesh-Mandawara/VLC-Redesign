import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__cone">◢</span>
                        <span className="footer__name">VLC</span>
                    </div>

                    <p>A free and open source media player for everyone.</p>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <span className="footer__heading">EXPLORE</span>

                        <a href="#features">Features</a>
                        <a href="#philosophy">Philosophy</a>
                        <a href="#platforms">Platforms</a>
                    </div>

                    <div className="footer__column">
                        <span className="footer__heading">VLC</span>

                        <a
                            href="https://www.videolan.org/vlc/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>

                        <a
                            href="https://www.videolan.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VideoLAN
                        </a>

                        <a
                            href="https://www.videolan.org/vlc/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Official Website
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <span>© {new Date().getFullYear()} VLC Redesign</span>

                <span>Built for the open web.</span>
            </div>
        </footer>
    );
}
