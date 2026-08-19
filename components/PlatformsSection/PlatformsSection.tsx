import "./PlatformsSection.scss";

const platforms = [
    {
        number: "01",
        name: "Windows",
        description: "Full desktop experience for Windows.",
        url: "https://www.videolan.org/vlc/download-windows.html",
    },
    {
        number: "02",
        name: "macOS",
        description: "A native media experience for Mac.",
        url: "https://www.videolan.org/vlc/download-macosx.html",
    },
    {
        number: "03",
        name: "Linux",
        description: "Powerful playback across Linux distributions.",
        url: "https://www.videolan.org/vlc/download-ubuntu.html",
    },
    {
        number: "04",
        name: "Android",
        description: "Take your media library with you.",
        url: "https://www.videolan.org/vlc/download-android.html",
    },
];

export default function PlatformsSection() {
    return (
        <section className="platforms-section" id="platforms">
            <div className="platforms-section__header">
                <span className="platforms-section__eyebrow" data-reveal>
                    PLATFORMS
                </span>

                <h2 className="platforms-section__title" data-reveal>
                    One player.
                    <span>Everywhere.</span>
                </h2>

                <p className="platforms-section__description" data-reveal>
                    Wherever you watch, VLC gives you the same powerful playback
                    experience.
                </p>
            </div>

            <div className="platforms-section__list">
                {platforms.map((platform) => (
                    <a
                        className="platforms-section__item"
                        key={platform.number}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-reveal
                    >
                        <span className="platforms-section__number">
                            {platform.number}
                        </span>

                        <h3>{platform.name}</h3>

                        <p>{platform.description}</p>

                        <span className="platforms-section__arrow">↗</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
