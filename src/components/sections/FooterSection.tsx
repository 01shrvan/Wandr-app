"use client";

function Footer() {
    return (
        <footer className="py-6 mt-10 border-t border-gray-200">
            <div className="container mx-auto px-14">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-2">
                            <a href="/">
                                <img src="/images/logo.svg" alt="logo" className="h-6" />
                            </a>
                            <span className="text-lg font-bold text-gray-700">Wandr</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            where every mile tells a story
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 text-sm text-gray-500 md:text-right">
                        <p className="max-w-md">
                            we help you turn your travels into stories that stay with you forever
                        </p>
                        <p className="text-xs text-gray-400 mt-4">
                            crafted with love by{" "}
                            <a
                                href="https://www.x.com/01shrvan"
                                className="font-bold underline text-gray-500"
                            >
                                shrvan
                            </a>. © 2025 wandr. all rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
