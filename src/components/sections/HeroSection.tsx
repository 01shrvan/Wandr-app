import React from 'react';
import HeroHeaderSection from './HeroHeaderSection';
import MainButton from '../common/MainButton';
import { cn } from '@/lib/utils';
import { gilroyBold } from "@/app/layout";
import Globe from '../ui/globe';

const HeroSection = () => {
    return (
        <section className="pt-24 lg:pt-28 pb-10 lg:pb-14">
            <HeroHeaderSection />
            <div className="container mx-auto px-4">
                <div className={cn(gilroyBold.className, "text-3xl md:text-[72px] text-primary my-4 text-center leading-[1.2] md:leading-[4.5rem]")}>
                    Capture your journey,<br /> effortlessly.
                </div>

                <p className='mb-6 text-[20px] text-center text-[#31373D]'>
                    No noise, just your memories.
                </p>

                <div className='flex gap-[10px] justify-center'>
                    <a href="/">
                        <MainButton text="Start Your Journey" size='normal' className='border-none rounded-[10px]' />
                    </a>
                </div>

                <div className="relative mt-2 flex justify-center">
                    <div className="absolute w-[70%] max-w-[500px]">
                        <Globe />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
