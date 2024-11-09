import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed w-full mb-block top-0 z-50">
      <nav className="bg-white py-4 md:py-4 shadow-md font-title">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="mockup" className="d-block h-9 rounded" />
              <p className="ml-2 font-bold text-xl text-indigo-600 tracking-wide uppercase font-title">
                Career Guidance Forum
              </p>
            </a>
            <Sheet>
              <SheetTrigger>
                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                  onClick={toggleCollapse}
                >
                  <Menu />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center">
                      <img
                        src={Logo}
                        alt="mockup"
                        className="d-block h-9 rounded"
                      />
                      <p className="ml-2 font-bold text-xl text-indigo-600 tracking-wide uppercase font-title">
                        Career Guidance Forum
                      </p>
                    </a>
                  </SheetTitle>
                  <SheetDescription className="flex flex-col justify-between">
                    <a
                      href="/"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Home
                    </a>
                    <a
                      href="./#tracks"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Tracks
                    </a>
                    <a
                      href="/events"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Events
                    </a>
                    <a
                      href="https://intern.cgfceg.org"
                      target="_blank"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Internships
                    </a>
                    <a
                      href="/about"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      About
                    </a>
                    {/* <a
                      href="/team "
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Team
                    </a> */}
                    <a
                      href="/contact"
                      className="sm:p-2 p-4 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 text-xl"
                    >
                      Contact
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/1JUDVoYiKLo0iIARLn1tQdka1d6k6spHRYsHJkoklU9w/edit" target="_blank"
                      className="p-2 bg-blue-500 text-white lg:px-4 md:mx-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                      Join Our Team
                    </a>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div
            className={`md:flex hidden md:flex-row md:ml-auto mt-3 md:mt-0`}
            id="navbar-collapse"
          >
            <a
              href="/"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="./#tracks"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Tracks
            </a>
            <a
              href="/events"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="https://intern.cgfceg.org"
              target="_blank"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Internships
            </a>
            <a
              href="/about"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </a>
            {/* <a
              href="/team"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Team
            </a> */}
            <a
              href="/contact"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="https://docs.google.com/forms/d/1JUDVoYiKLo0iIARLn1tQdka1d6k6spHRYsHJkoklU9w/edit" target="_blank"
              className="p-2 bg-blue-500 text-white lg:px-4 md:mx-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Join Our Team
            </a>
            {/* <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                    <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
