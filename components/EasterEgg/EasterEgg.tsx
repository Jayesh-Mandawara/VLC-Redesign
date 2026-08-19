"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./EasterEgg.scss";

interface EasterEggProps {
    onClose: () => void;
}

export default function EasterEgg({ onClose }: EasterEggProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!overlayRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                overlayRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                },
            );

            gsap.fromTo(
                ".easter-egg__cone",
                {
                    scale: 0,
                    rotation: -30,
                    opacity: 0,
                },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: "back.out(1.7)",
                },
            );

            gsap.fromTo(
                ".easter-egg__content > *",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    delay: 0.5,
                    ease: "power3.out",
                },
            );
        }, overlayRef);

        document.body.style.overflow = "hidden";

        return () => {
            ctx.revert();
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="easter-egg"
            role="dialog"
            aria-modal="true"
        >
            <div className="easter-egg__glow" />

            <div className="easter-egg__cone">
                <span />
            </div>

            <div className="easter-egg__content">
                <p className="easter-egg__eyebrow">SECRET STREAM FOUND</p>

                <h2>
                    You found
                    <span>the hidden stream.</span>
                </h2>

                <p className="easter-egg__description">
                    Some things are better discovered than announced.
                </p>

                <button className="easter-egg__close" onClick={onClose}>
                    Return to VLC
                    <span>↗</span>
                </button>
            </div>

            <span className="easter-egg__hint">ESC TO CLOSE</span>
        </div>
    );
}
