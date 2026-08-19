"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import "./FloatingMedia.scss";

const items = [
    { type: "format", label: "MP4", className: "floating-media--one" },
    { type: "format", label: "MP3", className: "floating-media--two" },
    { type: "format", label: "4K", className: "floating-media--three" },
    { type: "format", label: "SUB", className: "floating-media--four" },
    { type: "wave", label: "", className: "floating-media--five" },
    { type: "format", label: "AVI", className: "floating-media--six" },
    { type: "format", label: "FLAC", className: "floating-media--seven" },
    { type: "format", label: "MKV", className: "floating-media--eight" },
];

export default function FloatingMedia() {
    useLayoutEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const container =
            document.querySelector<HTMLElement>(".hero__interaction");

        if (!container) return;

        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray<HTMLElement>(
                ".floating-media__item",
            );

            gsap.set(elements, {
                opacity: 0,
                scale: 0.65,
            });

            gsap.to(elements, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                delay: 0.9,
                ease: "back.out(1.4)",
            });

            elements.forEach((element, index) => {
                gsap.to(element, {
                    y: index % 2 === 0 ? -10 : 10,
                    x: index % 3 === 0 ? 5 : -5,
                    rotation: index % 2 === 0 ? 2 : -2,
                    duration: 2.8 + index * 0.35,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1.8 + index * 0.15,
                });
            });
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const container = document.querySelector<HTMLElement>(".hero__visual");

        if (!container) return;

        const handleMouseMove = (event: MouseEvent) => {
            const rect = container.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            const elements = container.querySelectorAll<HTMLElement>(
                ".floating-media__item",
            );

            elements.forEach((element, index) => {
                const depth = 5 + index * 2;

                gsap.to(element, {
                    x: x * depth,
                    y: y * depth,
                    duration: 0.8,
                    ease: "power3.out",
                    overwrite: "auto",
                });
            });
        };

        const handleMouseLeave = () => {
            const elements = container.querySelectorAll<HTMLElement>(
                ".floating-media__item",
            );

            elements.forEach((element) => {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="floating-media" aria-hidden="true">
            {items.map((item) => (
                <div
                    key={item.className}
                    className={`floating-media__item ${item.className}`}
                >
                    {item.type === "wave" ? (
                        <div className="floating-media__wave">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    ) : (
                        <span className="floating-media__label">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
