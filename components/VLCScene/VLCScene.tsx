"use client";

import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

import EasterEgg from "@/components/EasterEgg/EasterEgg";
import "./VLCScene.scss";

function ConeSection({
    topRadius,
    bottomRadius,
    height,
    y,
    color,
}: {
    topRadius: number;
    bottomRadius: number;
    height: number;
    y: number;
    color: string;
}) {
    return (
        <mesh position={[0, y, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[topRadius, bottomRadius, height, 64]} />
            <meshStandardMaterial
                color={color}
                roughness={0.48}
                metalness={0.02}
            />
        </mesh>
    );
}

function VLCCone({ onSecretClick }: { onSecretClick: () => void }) {
    const group = useRef<THREE.Group>(null);

    useEffect(() => {
        if (!group.current) return;

        const animation = {
            y: -1.2,
            rotationY: -0.6,
            scale: 0.82,
            opacity: 0,
        };

        group.current.position.y = animation.y;
        group.current.rotation.y = animation.rotationY;
        group.current.scale.setScalar(animation.scale);

        const materialTargets: THREE.MeshStandardMaterial[] = [];

        group.current.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                const material = object.material;

                if (material instanceof THREE.MeshStandardMaterial) {
                    material.transparent = true;
                    material.opacity = 0;
                    materialTargets.push(material);
                }
            }
        });

        const timeline = gsap.timeline({
            defaults: {
                ease: "power3.out",
            },
        });

        timeline
            .to(animation, {
                y: 0,
                rotationY: -0.25,
                scale: 1,
                duration: 1.4,
                onUpdate: () => {
                    if (!group.current) return;

                    group.current.position.y = animation.y;
                    group.current.rotation.y = animation.rotationY;
                    group.current.scale.setScalar(animation.scale);
                },
            })
            .to(
                materialTargets,
                {
                    opacity: 1,
                    duration: 0.8,
                },
                "-=1",
            );

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <group
            ref={group}
            position={[0, -0.25, -10]}
            rotation={[0, -0.25, 0]}
            onClick={(event) => {
                event.stopPropagation();
                onSecretClick();
            }}
        >
            <ConeSection
                topRadius={0.34}
                bottomRadius={0.52}
                height={0.85}
                y={1.72}
                color="#f97316"
            />

            <ConeSection
                topRadius={0.52}
                bottomRadius={0.78}
                height={0.68}
                y={0.97}
                color="#f1f1ed"
            />

            <ConeSection
                topRadius={0.78}
                bottomRadius={1.05}
                height={0.82}
                y={0.22}
                color="#f97316"
            />

            <ConeSection
                topRadius={1.05}
                bottomRadius={1.32}
                height={0.85}
                y={-0.6}
                color="#f1f1ed"
            />

            <ConeSection
                topRadius={1.32}
                bottomRadius={1.58}
                height={0.75}
                y={-1.41}
                color="#f97316"
            />

            <RoundedBox
                args={[3.65, 0.28, 3.65]}
                radius={0.16}
                smoothness={5}
                position={[0, -1.96, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial
                    color="#f97316"
                    roughness={0.4}
                    metalness={0.02}
                />
            </RoundedBox>
        </group>
    );
}

export default function VLCScene() {
    const [easterEggActive, setEasterEggActive] = useState(false);

    const clickCount = useRef(0);
    const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSecretClick = () => {
        clickCount.current += 1;

        if (clickTimer.current) {
            clearTimeout(clickTimer.current);
        }

        clickTimer.current = setTimeout(() => {
            clickCount.current = 0;
        }, 2000);

        if (clickCount.current >= 3) {
            clickCount.current = 0;

            if (clickTimer.current) {
                clearTimeout(clickTimer.current);
            }

            setEasterEggActive(true);
        }
    };

    return (
        <>
            <div className="vlc-scene">
                <Canvas
                    camera={{
                        position: [0, 0, 7],
                        fov: 40,
                    }}
                    dpr={[1, 1.75]}
                    shadows
                >
                    <ambientLight intensity={1.2} />

                    <directionalLight
                        position={[4, 6, 5]}
                        intensity={3}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />

                    <directionalLight position={[-4, 2, 2]} intensity={1.4} />

                    <pointLight
                        position={[0, 2, 4]}
                        intensity={1}
                        color="#ff7a1a"
                    />

                    <VLCCone onSecretClick={handleSecretClick} />
                </Canvas>
            </div>

            {easterEggActive && (
                <EasterEgg onClose={() => setEasterEggActive(false)} />
            )}
        </>
    );
}
