import "./FeaturesSection.scss";

const features = [
    {
        number: "01",
        title: "Any format.",
        description:
            "Play virtually any media format without worrying about codecs or compatibility.",
    },
    {
        number: "02",
        title: "Stream anywhere.",
        description:
            "Play media from files, discs, devices, network streams and more.",
    },
    {
        number: "03",
        title: "Subtitles built in.",
        description:
            "Enjoy built-in subtitle support with control over timing, size and appearance.",
    },
    {
        number: "04",
        title: "Open source.",
        description:
            "Free, transparent and community-driven software built for everyone.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="features-section" id="features">
            <div className="features-section__header">
                <div className="features-section__eyebrow">FEATURES</div>

                <h2 className="features-section__title" data-reveal>
                    More than a<span>media player.</span>
                </h2>

                <p className="features-section__intro">
                    Everything you need to play, stream and enjoy your media. No
                    restrictions. No unnecessary complexity.
                </p>
            </div>

            <div className="features-section__grid">
                {features.map((feature) => (
                    <article
                        className="features-section__card"
                        data-reveal-group
                        key={feature.number}
                    >
                        <div className="features-section__number">
                            {feature.number}
                        </div>

                        <div
                            className="features-section__card-content"
                            data-reveal
                        >
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>

                        <div className="features-section__dot" />
                    </article>
                ))}
            </div>
        </section>
    );
}
