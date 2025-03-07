"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaSearch,
  FaCamera,
  FaCalendarAlt,
  FaUser,
  FaExclamationCircle,
  FaMicrophone,
  FaLightbulb,
  FaVideo,
  FaGripHorizontal,
  FaPlug,
  FaBoxOpen,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";

const Navigation = () => {
  // Toolbox open/close state
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);
  // Which toolbox icon is selected
  const [selectedToolboxItem, setSelectedToolboxItem] = useState(null);
  // Which category index is hovered (sub-menu open)
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  // Whether the category row is visible
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  // Store the last scroll position
  const [lastScrollPos, setLastScrollPos] = useState(0);
  // Track whether the search bar is open
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Track the active project
  const [activeProject, setActiveProject] = useState("Studio Setup");

  // Use Next.js hook to get current pathname
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollPos) {
        setIsCategoryVisible(false); // scrolled down -> hide
      } else {
        setIsCategoryVisible(true); // scrolled up -> show
      }
      setLastScrollPos(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  // Toggle which toolbox item is open
  const handleIconClick = (item) => {
    setSelectedToolboxItem((prev) => (prev === item ? null : item));
  };

  const iconClasses =
    "text-3xl text-white group-hover:text-lime transition-colors duration-200";
  const linkClasses =
    "group text-h4 font-light hover:text-lime py-2 px-4 w-full h-16 text-center " +
    "flex flex-col items-center justify-center whitespace-nowrap select-none relative";

  // Category definitions
  const categories = [
    {
      name: "Kits",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: ["Basic Kit", "Advanced Kit", "Pro Kit", "Custom Kit"],
    },
    {
      name: "Camera & Accessories",
      icon: <FaCamera className={iconClasses} />,
      submenu: [
        "Cameras",
        "Lenses",
        "Tripods",
        "Donuts",
        "Stabilizers",
        "Batteries",
        "Memory Cards",
        "Cases",
      ],
    },
    {
      name: "Audio",
      icon: <FaMicrophone className={iconClasses} />,
      submenu: [
        "Microphones",
        "Recorders",
        "Mixers",
        "Headphones",
        "Wireless Systems",
      ],
    },
    {
      name: "Lighting, Sfx & Stands",
      icon: <FaLightbulb className={iconClasses} />,
      submenu: [
        "LED Panels",
        "Fresnel",
        "Modifiers",
        "Light Stands",
        "Special Effects",
      ],
    },
    {
      name: "Live Production",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Switchers", "Streaming", "Monitors", "Teleprompters"],
    },
    {
      name: "Monitors & Recorders",
      icon: <FaVideo className={iconClasses} />,
      submenu: ["Field Monitors", "External Recorders", "Directors Monitors"],
    },
    {
      name: "Grips & Gadgets",
      icon: <FaGripHorizontal className={iconClasses} />,
      submenu: ["Clamps", "Arms", "Rigs", "Sliders", "Dollies"],
    },
    {
      name: "Cables & Adapters",
      icon: <FaPlug className={iconClasses} />,
      submenu: ["Power Cables", "HDMI", "SDI", "XLR", "USB", "Adapters"],
    },
    {
      name: "Production & Consumables",
      icon: <FaBoxOpen className={iconClasses} />,
      submenu: [
        "Gaffer Tape",
        "Markers",
        "Batteries",
        "Gels",
        "Cleaning Supplies",
      ],
    },
  ];

  const getSubmenuPosition = (index) => {
    const total = categories.length;
    if (index >= total - 3)
      return "right-[-30px]"; // Shift right submenus slightly to the right
    else if (index >= Math.floor(total / 3) && index < total - 3)
      return "left-1/2 -translate-x-[45%]"; // Shift centered submenus slightly to the right
    else return "left-[-30px]"; // Shift left-aligned submenus slightly to the right
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent select-none">
      {/* Wrap top nav + category row in one container */}
      <div className="flex flex-col w-full">
        {/* TOP NAV BAR */}
        <div className="relative w-full p-3 bg-black text-white flex items-center">
          {/* Left Links */}
          <div className="flex gap-6 ml-4">
            {/* "Home" link: active (lime) when pathname is "/" */}
            <Link
              className={`text-h4 ${
                pathname === "/" ? "text-lime" : "hover:text-lime"
              }`}
              href="/"
            >
              Home
            </Link>
            {/* "How it works" link: active when pathname is "/pages/howItWorks" */}
            <Link
              className={`text-h4 ${
                pathname === "/pages/howItWorks"
                  ? "text-lime"
                  : "hover:text-lime"
              }`}
              href="/pages/howItWorks"
            >
              How it works
            </Link>
            {/* "Learn" link: active when pathname is "/pages/learn" */}
            <Link
              className={`text-h4 ${
                pathname === "/pages/learn" ? "text-lime" : "hover:text-lime"
              }`}
              href="/pages/learn"
            >
              Learn
            </Link>
          </div>

          {/* LOGO center-absolute */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image src="/logo/logo.svg" width={150} height={50} alt="Logo" />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex gap-6 mr-4 ml-auto relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white text-black h-10 px-3 rounded-xl transition-transform duration-300 select-none">
                <FaSearch className="text-black text-xl mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white text-black outline-none w-40"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 text-black hover:text-lime transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div
                className="relative bg-white text-black p-4 w-10 h-10 flex items-center justify-center 
                  rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer 
                  hover:bg-lime select-none"
                onClick={() => setIsSearchOpen(true)}
              >
                <FaSearch className="absolute text-black text-xl" />
              </div>
            )}

            {/* Exclamation Icon (toolbox toggle) - Changed from Gear */}
            <div
              className={`relative p-4 w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 
                transition-transform duration-300 cursor-pointer select-none ${
                  isToolboxOpen
                    ? "bg-lime text-black"
                    : "bg-white text-black hover:bg-lime"
                }`}
              onClick={() => {
                setIsToolboxOpen(!isToolboxOpen);
                if (isToolboxOpen) setSelectedToolboxItem(null);
              }}
            >
              <FaExclamationCircle className="absolute text-black text-xl" />
            </div>
          </div>
        </div>

        {/* CATEGORY ROW */}
        <div
          className={`flex flex-row flex-wrap justify-center w-full bg-black/30 font-helvetica select-none
            transition-all duration-150
            ${
              isCategoryVisible
                ? "max-h-32 opacity-100 pt-2"
                : "max-h-0 opacity-0"
            }
          `}
        >
          {categories.map((cat, index, arr) => (
            <div
              key={index}
              className="relative shrink-0"
              onMouseEnter={() => setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href="/pages/products"
                className={`${linkClasses} ${
                  index < arr.length - 1 ? "border-r border-gray-400" : ""
                }`}
              >
                {React.cloneElement(cat.icon, {
                  className:
                    cat.icon.props.className +
                    (activeSubmenu === index ? " text-lime" : ""),
                })}
                <span className="text-center leading-tight text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis text-white">
                  {cat.name}
                </span>
              </Link>
              {activeSubmenu === index && (
                <div
                  className={`absolute top-full ${getSubmenuPosition(
                    index
                  )} bg-black/30 text-white p-2 rounded-b-md w-max z-20`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {cat.submenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href="/pages/products"
                        className="whitespace-nowrap text-sm px-4 py-2 hover:bg-lime hover:text-black rounded-md transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLBOX AREA */}
      <div
        className={`absolute right-1 top-full mt-1 transition-all duration-300 z-20 ${
          isToolboxOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-black text-white p-4 rounded-lg shadow-lg flex">
          <div className="mr-4 w-56 h-[280px] overflow-y-auto pr-1">
            {selectedToolboxItem ? (
              <>
                {selectedToolboxItem === "calendar" && (
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Select Dates</h2>
                    <label>
                      Start Date
                      <input
                        type="date"
                        className="text-black block w-full mt-1"
                      />
                    </label>
                    <label>
                      End Date
                      <input
                        type="date"
                        className="text-black block w-full mt-1"
                      />
                    </label>
                    <div className="flex gap-2 mt-2">
                      <button className="bg-white text-black px-3 py-1 rounded-md hover:bg-lime">
                        Cancel
                      </button>
                      <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
                {selectedToolboxItem === "user" && (
                  <div className="flex flex-col space-y-4 bg-black/80 rounded-lg">
                    <h2 className="text-xl font-bold text-center text-lime mb-4">
                      Login
                    </h2>

                    <div className="flex flex-col items-center">
                      <div className="flex justify-center items-center space-x-4 w-full">
                        <Link href="/pages/logIn" className="flex-1">
                          <button className="w-full bg-lime text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                            Already have a user? Login
                          </button>
                        </Link>
                      </div>

                      <div className="my-4 flex items-center w-full">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400">OR</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                      </div>

                      <div className="flex justify-center items-center space-x-4 w-full">
                        <Link href="/pages/signUp" className="flex-1">
                          <button className="w-full bg-lime text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                            Don't have a user? Sign Up Here
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {selectedToolboxItem === "projects" && (
                  <div className="flex flex-col gap-2 pr-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold">Projects</h2>
                      <div className="bg-lime rounded-full px-2 py-0.5 text-black text-xs">
                        Active: {activeProject}
                      </div>
                    </div>
                    <p className="text-sm">
                      Create and manage your projects. Add items to projects and
                      transfer to cart when ready.
                    </p>

                    <div className="mt-2">
                      <label className="block text-sm font-medium mb-1">
                        Create New Project
                      </label>
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="Project name"
                          className="text-black text-sm px-2 py-1 rounded w-32"
                        />
                        <button className="bg-lime text-black px-2 py-1 rounded-md hover:opacity-90 text-sm whitespace-nowrap">
                          Create
                        </button>
                      </div>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-sm font-medium mb-1">
                        Your Projects
                      </h3>
                      <ul className="space-y-2 w-full">
                        <li
                          className={`rounded p-2 ${activeProject === "Studio Setup" ? "bg-lime/20 border border-lime" : "bg-white/10"}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">
                              Studio Setup
                            </span>
                            <span className="text-xs">12 items</span>
                          </div>
                          <div className="flex gap-1 mt-1 justify-between">
                            <Link
                              href="/pages/projects"
                              className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30 text-center"
                            >
                              View
                            </Link>
                            <div className="flex gap-1">
                              <button
                                onClick={() => setActiveProject("Studio Setup")}
                                className={`text-xs px-2 py-1 rounded ${activeProject === "Studio Setup" ? "bg-lime text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
                              >
                                Choose
                              </button>
                              <button className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30">
                                To Cart
                              </button>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`rounded p-2 ${activeProject === "Location Shoot" ? "bg-lime/20 border border-lime" : "bg-white/10"}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">
                              Location Shoot
                            </span>
                            <span className="text-xs">5 items</span>
                          </div>
                          <div className="flex gap-1 mt-1 justify-between">
                            <Link
                              href="/pages/projects"
                              className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30 text-center"
                            >
                              View
                            </Link>
                            <div className="flex gap-1">
                              <button
                                onClick={() =>
                                  setActiveProject("Location Shoot")
                                }
                                className={`text-xs px-2 py-1 rounded ${activeProject === "Location Shoot" ? "bg-lime text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
                              >
                                Choose
                              </button>
                              <button className="bg-white/20 text-white text-xs px-2 py-1 rounded hover:bg-white/30">
                                To Cart
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {selectedToolboxItem === "contact" && (
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Contact Us</h2>
                    <label>
                      Name
                      <input
                        type="text"
                        className="text-black block w-full mt-1"
                      />
                    </label>
                    <label>
                      Message
                      <textarea
                        className="text-black block w-full mt-1"
                        rows="3"
                      />
                    </label>
                    <button className="bg-lime text-black px-3 py-1 rounded-md hover:opacity-90 mt-2">
                      Send
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-white/50">
                <p>Select an option</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => handleIconClick("calendar")}
              className={`flex items-center justify-center w-12 h-12 rounded-md transition select-none ${
                selectedToolboxItem === "calendar"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaCalendarAlt className="text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("user")}
              className={`flex items-center justify-center w-12 h-12 rounded-md transition select-none ${
                selectedToolboxItem === "user"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaUser className="text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("projects")}
              className={`flex items-center justify-center w-12 h-12 rounded-md transition select-none ${
                selectedToolboxItem === "projects"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaFolderOpen className="text-xl" />
            </button>
            <button
              onClick={() => handleIconClick("contact")}
              className={`flex items-center justify-center w-12 h-12 rounded-md transition select-none ${
                selectedToolboxItem === "contact"
                  ? "bg-lime text-black"
                  : "bg-white text-black hover:bg-lime"
              }`}
            >
              <FaEnvelope className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
