import React from 'react';
import HeroHeaderSection from './HeroHeaderSection';
import MainButton from '../common/MainButton';
import { cn } from '@/lib/utils';
import { gilroyBold } from "@/app/layout";
import Globe from '../ui/globe';

const HeroSection = () => {
    return (
        <section className="pt-20 lg:pt-24">
            <HeroHeaderSection />
            <div className="container mx-auto px-4">
                <div className={cn(gilroyBold.className, "text-3xl md:text-[92px] text-primary my-5 text-center leading-[1.2] md:leading-[5.5rem]")}>
                    Capture your journey,<br /> effortlessly.
                </div>

                <p className='mb-8 text-[22px] text-center text-[#31373D]'>
                    No noise, just your memories.
                </p>

                <div className='flex gap-[12px] justify-center'>
                    <a href="/">
                        <MainButton text="Start Your Journey" size='normal' className='border-none rounded-[12px]' />
                    </a>
                </div>

                <div className="relative mt-2 flex justify-center">
                    <div className="absolute w-[80%] max-w-[600px]">
                        <Globe />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
