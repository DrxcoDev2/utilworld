'use client';

import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import './gta.css'

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

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = getTimeRemaining(targetDate);
            setTimeLeft(updatedTime);
            if (updatedTime.total <= 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);

    }, []);


    return (
        <div className="flex items-center justify-center w-full flex-col px-4">
            {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2> */}
            <h1 className="gta text-9xl -mt-20 mb-10">GTA VI</h1>
            <h1 className="gta text-9xl -mt-120 blur-2xl mb-10 absolute">GTA VI</h1>        
            <div className="w-auto p-4 border-4 rounded-xl backdrop-blur-3xl bg-white/10 border-white/20">
                <h2 className="bg-clip-text gta text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-9xl py-2 md:py-10 relative z-20 tracking-tight space-x-6 px-18">
                    <span>{timeleft.days}D</span> <span>{timeleft.hours}h</span> <span>{timeleft.minutes}m</span> <span>{timeleft.seconds}S</span>
                </h2>
            </div>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center lg:mt-10">
                GTA VI will be released on November 19, 2026
            </p>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center lg:mt-10">
                CopyRight &copy; DrxcoDev | UtilWorld
            </p>
        </div>
    );
}
