import "./hero.scss";
import Navbar from "@/components/Navbar/Navbar";
import VLCScene from "@/components/VLCScene/VLCScene";
import PlayerSection from "@/components/PlayerSection/PlayerSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import PhilosophySection from "@/components/PhilosophySection/PhilosophySection";
import PlatformsSection from "@/components/PlatformsSection/PlatformsSection";
import Footer from "@/components/Footer/Footer";
import HeroAnimation from "@/components/Hero/HeroAnimation";
import FloatingMedia from "@/components/VLCScene/FloatingMedia";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Home() {
    return (
        <>
            <main className="home">
                <ScrollReveal />
                <Navbar />

                <section className="hero">
                    <HeroAnimation />

                    <div className="hero__content">
                        <p className="hero__eyebrow">
                            OPEN SOURCE MEDIA PLAYER
                        </p>

                        <h1 className="hero__title">
                            EVERY FORMAT.
                            <span>ONE PLAYER.</span>
                        </h1>

                        <p className="hero__description">
                            Play almost anything. Simply.
                        </p>

                        <a
                            href="https://www.videolan.org/vlc/"
                            className="hero__cta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Get VLC</span>
                            <span className="hero__cta-arrow">↗</span>
                        </a>
                    </div>

                    <div className="hero__visual">
                        <div className="hero__glow" />
                        <div className="hero__interaction">
                            <VLCScene />
                            <FloatingMedia />
                        </div>
                    </div>

                    <div className="hero__scroll" aria-hidden="true">
                        <span>SCROLL TO EXPLORE</span>
                        <span className="hero__scroll-line" />
                    </div>
                </section>

                <PlayerSection />
                <FeaturesSection />
                <PhilosophySection />
                <PlatformsSection />
            </main>
            <Footer />
        </>
    );
}
