"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
    useEffect(() => {
        const elements =
            document.querySelectorAll<HTMLElement>("[data-reveal]");

        const animations: gsap.core.Tween[] = [];

        elements.forEach((element, index) => {
            const animation = gsap.fromTo(
                element,
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    delay: (index % 4) * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true,
                    },
                },
            );

            animations.push(animation);
        });

        return () => {
            animations.forEach((animation) => {
                animation.scrollTrigger?.kill();
                animation.kill();
            });
        };
    }, []);

    return null;
}
