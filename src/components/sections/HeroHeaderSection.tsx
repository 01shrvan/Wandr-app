import type React from "react";

const HeroHeaderSection: React.FC = () => {
    return (
        <div className="flex justify-center mb-8 px-4 sm:px-0">
            <div className="relative inline-flex items-center bg-gray-200 p-2 rounded-full overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gray-200 opacity-50 animate-pulse"></div>
                <div className="relative flex items-center">
                    <div className="flex items-center justify-center p-3 rounded-full z-10">
                        <div className="w-4 h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center ml-3 mr-4">
                        <span className="text-primary text-base font-bold mr-2">Wandr&apos;s here</span>
                        <span className="text-gray-700 text-sm">Your next adventure awaits!</span>
                    </div>
                </div>
                {/* <div className="hidden sm:block absolute right-0 w-16 h-full bg-gradient-to-l from-gray-200 to-transparent"></div> */}
            </div>
        </div>
    );
};

export default HeroHeaderSection;
