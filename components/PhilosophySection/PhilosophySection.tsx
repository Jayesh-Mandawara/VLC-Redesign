import "./PhilosophySection.scss";

const principles = [
    {
        number: "01",
        title: "Freedom",
        text: "Media should be accessible to everyone, without restrictions or unnecessary barriers.",
    },
    {
        number: "02",
        title: "Open source",
        text: "Built in the open, with a global community continuously improving the experience.",
    },
    {
        number: "03",
        title: "For everyone",
        text: "From everyday playback to professional media, VLC is designed to simply work.",
    },
];

export default function PhilosophySection() {
    return (
        <section className="philosophy-section" id="philosophy">
            <div className="philosophy-section__top">
                <span className="philosophy-section__eyebrow" data-reveal>
                    THE PHILOSOPHY
                </span>

                <span className="philosophy-section__index">01 — 03</span>
            </div>

            <div className="philosophy-section__main" data-reveal>
                <h2 className="philosophy-section__title">
                    Media belongs
                    <span>to everyone.</span>
                </h2>

                <p className="philosophy-section__description" data-reveal>
                    VLC has always been about freedom. A media player that stays
                    open, accessible and available to everyone.
                </p>
            </div>

            <div className="philosophy-section__principles">
                {principles.map((principle) => (
                    <article
                        className="philosophy-section__principle"
                        data-reveal
                        key={principle.number}
                    >
                        <span className="philosophy-section__number">
                            {principle.number}
                        </span>

                        <div data-reveal>
                            <h3>{principle.title}</h3>
                            <p>{principle.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
