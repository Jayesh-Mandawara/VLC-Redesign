"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
    {
        number: "01",
        title: "Video",
        description: "Play almost any video format without the hassle.",
    },
    {
        number: "02",
        title: "Audio",
        description: "A complete media experience for your music and sound.",
    },
    {
        number: "03",
        title: "Subtitles",
        description: "Built-in subtitle support when you need it.",
    },
    {
        number: "04",
        title: "Streaming",
        description: "Play media from files, discs, devices and streams.",
    },
];

function formatTime(seconds: number) {
    if (!Number.isFinite(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
}

export default function PlayerSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const updateTime = () => {
            setCurrentTime(video.currentTime);
        };

        const updateDuration = () => {
            setDuration(video.duration);
        };

        const handleEnded = () => {
            setIsPlaying(false);
        };

        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", updateDuration);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("timeupdate", updateTime);
            video.removeEventListener("loadedmetadata", updateDuration);
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    const togglePlay = async () => {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            await video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleSeek = (value: number) => {
        const video = videoRef.current;

        if (!video) return;

        video.currentTime = value;
        setCurrentTime(value);
    };

    const handleVolume = (value: number) => {
        const video = videoRef.current;

        if (!video) return;

        video.volume = value;
        setVolume(value);
    };

    const toggleFullscreen = async () => {
        const video = videoRef.current;

        if (!video) return;

        if (document.fullscreenElement) {
            await document.exitFullscreen();
        } else {
            await video.requestFullscreen();
        }
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <section
            id="player"
            className="relative min-h-screen overflow-hidden bg-[#080808] px-[7vw] py-32 text-white"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff6a00]">
                            The Player
                        </p>

                        <h2
                            className="max-w-[850px] text-[clamp(56px,8vw,120px)] font-medium leading-[0.88] tracking-[-0.065em]"
                            data-reveal
                        >
                            One player.
                            <br />
                            <span className="text-white/35" data-reveal>
                                Almost everything.
                            </span>
                        </h2>
                    </div>

                    <p
                        className="max-w-[300px] text-base leading-7 text-white/45 md:mb-2"
                        data-reveal
                    >
                        A simple, powerful media player built to play your
                        content without getting in the way.
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,106,0,0.12),transparent_45%)]" />

                    <div className="relative flex min-h-[520px] items-center justify-center p-8 md:min-h-[620px]">
                        <div className="relative w-full max-w-[900px]">
                            <div className="absolute -inset-10 rounded-[40px] bg-[#ff6a00]/5 blur-3xl" />

                            <div className="group relative aspect-video overflow-hidden rounded-[18px] border border-white/10 bg-[#050505] shadow-2xl">
                                <video
                                    ref={videoRef}
                                    src="/videos/player-demo.mp4"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    playsInline
                                />

                                <div className="absolute left-5 top-5 z-10 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                                        VLC Media Player
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    aria-label={
                                        isPlaying ? "Pause video" : "Play video"
                                    }
                                    className="absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:border-[#ff6a00]/60 hover:bg-[#ff6a00]/15"
                                >
                                    <span className="pointer-events-none text-2xl">
                                        {isPlaying ? "Ⅱ" : "▶"}
                                    </span>
                                </button>

                                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-5 pt-16">
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        step="0.01"
                                        value={currentTime}
                                        onChange={(event) =>
                                            handleSeek(
                                                Number(event.target.value),
                                            )
                                        }
                                        aria-label="Video progress"
                                        className="mb-4 h-[3px] w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#ff6a00]"
                                        style={{
                                            background: `linear-gradient(to right, #ff6a00 ${progress}%, rgba(255,255,255,0.15) ${progress}%)`,
                                        }}
                                    />

                                    <div className="player-controls flex items-center justify-between">
                                        <div className="player-controls-main flex items-center gap-5">
                                            <button
                                                type="button"
                                                onClick={togglePlay}
                                                className="text-sm text-white/75 transition hover:text-white"
                                            >
                                                {isPlaying ? "Ⅱ" : "▶"}
                                            </button>

                                            <span className="player-time text-[10px] tracking-[0.12em] text-white/45">
                                                {formatTime(currentTime)} /{" "}
                                                {formatTime(duration)}
                                            </span>

                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.01"
                                                value={volume}
                                                onChange={(event) =>
                                                    handleVolume(
                                                        Number(
                                                            event.target.value,
                                                        ),
                                                    )
                                                }
                                                aria-label="Volume"
                                                className="player-volume w-20 accent-[#ff6a00]"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={toggleFullscreen}
                                            aria-label="Fullscreen"
                                            className="player-fullscreen text-sm text-white/45 transition hover:text-white"
                                        >
                                            ⛶
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid border-t border-white/10 md:grid-cols-4">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.number}
                                className="group border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.03] md:border-b-0 md:border-r md:last:border-r-0"
                                data-reveal-group
                                data-reveal
                            >
                                <div className="mb-12 flex items-center justify-between">
                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                        {capability.number}
                                    </span>

                                    <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#ff6a00]" />
                                </div>

                                <h3 className="mb-3 text-xl font-medium tracking-tight">
                                    {capability.title}
                                </h3>

                                <p className="max-w-[220px] text-sm leading-6 text-white/35">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

<style jsx>{`
    @media (max-width: 500px) {
        .player-controls {
            padding-left: 12px;
            padding-right: 12px;
        }

        .player-controls-main {
            gap: 10px;
        }

        .player-time {
            font-size: 9px;
            letter-spacing: 0.08em;
        }

        .player-volume {
            display: none;
        }

        .player-fullscreen {
            font-size: 16px;
        }
    }
`}</style>;
