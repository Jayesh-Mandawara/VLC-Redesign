"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            timeline
                .from(".hero__eyebrow", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                })
                .from(
                    ".hero__title",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.9,
                    },
                    "-=0.35",
                )
                .from(
                    ".hero__description",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.45",
                )
                .from(
                    ".hero__cta",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.35",
                );
        });

        return () => ctx.revert();
    }, []);

    return null;
}
