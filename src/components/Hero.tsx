'use client';

import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import './gta.css'
import { Tweet } from "react-tweet";
import { Button } from "@/components/ui/button"
import Script from "next/script";

function getTimeRemaining(endDate: Date) {
    const now = new Date();
    const total = endDate.getTime() - now.getTime();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };



}

export function BackgroundLinesDemo() {


    const targetDate = new Date('2026-11-19T00:00:00');
    const [timeleft, setTimeLeft] = useState(getTimeRemaining(targetDate));
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = getTimeRemaining(targetDate);
            setTimeLeft(updatedTime);
            if (updatedTime.total <= 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    

    const handleVideoClick = () => {
        if (scriptLoaded) return; // No cargar varias veces
        const s = document.createElement("script");
        s.dataset.zone = "10165214";
        s.src = "https://al5sm.com/tag.min.js";
        s.async = true;
        document.body.appendChild(s);
        setScriptLoaded(true);
    };


    return (
        <div className="flex items-center justify-center w-full flex-col px-4 py-10">
            {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2> */}
            <div className="relative">
                <h1 className="gta text-6xl text-center mb-10 relative z-10 lg:text-9xl">GTA VI CountDown</h1>
                <h1 className="gta text-6xl mb-10 text-center absolute inset-0 blur-2xl z-0 lg:text-9xl">
                    GTA VI CountDown
                </h1>
            </div>


            <div className="w-auto p-4 border-4 rounded-xl backdrop-blur-3xl bg-white/10 border-white/20">
                <h2 className="grid grid-cols-1 bg-clip-text gta text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white px-8 text-4xl md:text-4xl lg:text-9xl py-2 md:py-10 relative z-20 tracking-tight space-x-2 lg:px-18 lg:grid-cols-4">
                    <span className="text-9xl">{timeleft.days}D</span> <span className="text-9xl">{timeleft.hours}h</span> <span className="text-9xl">{timeleft.minutes}m</span> <span className="text-9xl">{timeleft.seconds}S</span>
                </h2>
            </div>
            <div className="mt-[5rem] ">
                <div className="justify-center flex cursor-pointer">
                    <Button variant="outline" size="lg" className="max-w-2xl px-10 mb-[5rem]">
                        <a href="https://t.me/+OB1g-euNf_k0NmYy" target="__blank">See Requeriments</a>
                    </Button>
                </div>

                <p className="max-w-xl mx-auto text-xl md:text-lg text-neutral-700 dark:text-neutral-400 text-center lg:mt-10 lg:text-2xl">
                    GTA VI will be released on November 19, 2026
                </p>
            </div>

            <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 items-center gap-8">
                <Tweet id="1986540361011880167" />

                {/* Contenedor responsive para YouTube */}
                <div className="relative w-full pb-[56.25%]"> {/* 16:9 */}
                    <Script id="moneytag-inline" strategy="afterInteractive">
                        {`
                            (function(s){
                            s.dataset.zone = '10165214';
                            s.src = 'https://al5sm.com/tag.min.js';
                            })(
                            [document.documentElement, document.body]
                                .filter(Boolean)
                                .pop()
                                .appendChild(document.createElement('script'))
                            );
                            `}
                    </Script>
                    <iframe
                        onClick={handleVideoClick}
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/QdBZY2fkU-0?si=nuwCPSCw2t9hIxEL"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <p className="max-w-xl mx-auto text-md md:text-lg text-neutral-700 dark:text-neutral-400 text-center lg:mt-10 lg:text-lg">
                CopyRight &copy; DrxcoDev | UtilWorld
            </p>
        </div>
    );
}
