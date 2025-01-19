import { ChevronRight } from 'lucide-react';
import React from 'react';

const HeroHeaderSection: React.FC = () => {
    return (
        <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-1 bg-[#F4F5F6] p-1 rounded-full pr-[10px]">
                <div className="text-white bg-primary p-2 rounded-full inline-block text-[10px] font-medium">
                    Wandr&apos;s here
                </div>
                <p className="text-[#31373D]">Your next adventure awaits!</p>
                <div>
                    <ChevronRight />
                </div>
            </div>
        </div>
    );
};

export default HeroHeaderSection;

