"use client";

import MainButton from "./MainButton";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="bg-background/50 backdrop-blur-sm p-4 shadow-md mx-4 my-4 rounded-full">
          <div className="container mx-auto flex justify-between items-center px-6">
            <a href="/">
              <img src="/images/logo.svg" alt="logo" className="h-8" />
            </a>
            <a href="/">
              <MainButton text="Explore Now!" width="contain" />
            </a>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="block lg:hidden">
        <div className="bg-background/50 backdrop-blur-sm p-4 shadow-md mx-4 my-4 rounded-full">
          <div className="flex justify-between items-center px-4">
            <a href="/">
              <img src="/images/logo.svg" alt="logo" className="h-6" />
            </a>
            <a href="/">
              <MainButton text="Explore Now!" width="contain" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

