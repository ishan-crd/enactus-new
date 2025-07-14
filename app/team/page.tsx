// team/page.tsx
"use client";
import logoImage from "../../public/logo.png";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

interface NavItem {
  name: string;
  href: string;
}

// Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Naavya Arya",
    position: "President",
    image: "/NaavyaArya.heic",
  },
  {
    id: 2,
    name: "Disha Gurjar",
    position: "Vice President",
    image: "/Disha Gurjar(1).jpg",
  },
  {
    id: 3,
    name: "Yashika Sachdeva",
    position: "General Secretary",
    image: "/Yashika Sachdeva G....jpg",
  },
  {
    id: 4,
    name: "Aanya Suri",
    position: "Social Media & Marketing Head",
    image: "/AanyaSuri.jpg",
  },
  {
    id: 5,
    name: "Shruti",
    position: "Social Media & Marketing Head",
    image: "/Shruti.heic",
  },
  {
    id: 6,
    name: "Avani",
    position: "Sponsorship Head",
    image: "/Avani.jpg",
  },
  {
    id: 7,
    name: "Janika",
    position: "Sponsorship Head",
    image: "/Janika Shanker.jpg",
  },
  {
    id: 8,
    name: "Pranjali Nangia",
    position: "HR & Logistics Head",
    image: "/Pranjali Nangia.jpg",
  },
  {
    id: 9,
    name: "Kishika",
    position: "HR & Logistics Head",
    image: "/Kishika..jpg",
  },
  {
    id: 10,
    name: "Navya Chandok",
    position: "Project Head – Dharang",
    image: "/Navya Chandok..png",
  },
  {
    id: 11,
    name: "Shreem Bindal",
    position: "Project Head – Dharang",
    image: "/Shreem Bindal.jpg",
  },
  {
    id: 12,
    name: "Tanya Gupta",
    position: "Project Head – Noorani",
    image: "/Tanya.jpg",
  },
  {
    id: 13,
    name: "Naina Tiberwal",
    position: "Project Head – Noorani",
    image: "/Naina Tiberwal.heic",
  },
  {
    id: 14,
    name: "Divyanshi Rastogi",
    position: "Research Head – Noorani",
    image: "/Divyanshi Rastogi.jpg",
  },
  {
    id: 15,
    name: "Paavani Khurana",
    position: "Project Head – Ikhtiyaar",
    image: "/Paavani Khurana.jpg",
  },
  {
    id: 16,
    name: "Devanshi",
    position: "Project Head – Ikhtiyaar",
    image: "/Devanshi Singh.jpg",
  },
  {
    id: 17,
    name: "Ananya",
    position: "Research Head – Ikhtiyaar",
    image: "/Ananya Singh.heic",
  },
  {
    id: 18,
    name: "Vidita Bajaj",
    position: "Project Director – Riwayat",
    image: "",
  },
  {
    id: 19,
    name: "Bhumi Gaur",
    position: "Project Head – Riwayat",
    image: "/Bhumi gaur.heic",
  },
  {
    id: 20,
    name: "Kavya",
    position: "Project Head – Riwayat",
    image: "/kavya singh.jpg",
  },
  {
    id: 21,
    name: "Anvi Chawla",
    position: "Project Director – Nitara",
    image: "",
  },
  {
    id: 22,
    name: "Rahnuma Firdous",
    position: "Project Director – Nitara",
    image: "",
  },
  {
    id: 23,
    name: "Fathima Amal",
    position: "Project Director – Nitara",
    image: "",
  },
  {
    id: 24,
    name: "Sayli Patil",
    position: "Project Head – Nitara",
    image: "/Sayli Patil..png",
  },
  {
    id: 25,
    name: "Gargi Pitambar Upadhyay",
    position: "Project Head – Nitara",
    image: "/Gargi Upadhyay.heic",
  },
];

// Icons
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
  </svg>
);

export default function TeamPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex flex-col flex-grow">
        {/* Navbar */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f0f4f4] shadow-sm"
        >
          <div className="flex items-center justify-between whitespace-nowrap px-4 lg:px-10 py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-[#111817]"
            >
              <div className="relative size-8">
                <Image
                  src={logoImage}
                  alt="Enactus Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-[#111817] text-lg font-bold leading-tight tracking-[-0.015em]">
                Enactus
              </h2>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-6 xl:gap-9">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-sm font-medium leading-normal transition-colors duration-200 relative group ${
                        item.name === "Team"
                          ? "text-[#13ebc7]"
                          : "text-[#111817] hover:text-[#13ebc7]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#13ebc7] transition-all duration-200 ${
                          item.name === "Team"
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f4f4] text-[#111817] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-3 hover:bg-[#e5e9e9] transition-colors duration-200"
              >
                <SearchIcon />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArFaV1-Xb0B6T8Ixut8louoDUVOtU6LHl8ZmucaFPi4-wEGkD-2QCwMZ86K_7s5thQ8dT0T8olqOnnNOtB99O6UPLWd8s5Toee6IvMbYuLhHD-0nAxXhu7sDIgbljz9_ai5Jcplc1kpaV1GAmax5zMOWLr34VehGjwBwqyEGtAREZpDLs1g3NH2i9nhnKiTdvDDxVqrCsg2SPpnAfH6ZDCNRtSzpS5FxKLhUm-5JgHBk1bA79_w-SZDPRZiejNL2PrPHgZiIztQGGs")',
                }}
              />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-[#111817] block transition-all duration-200"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-[#111817] block transition-all duration-200"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-[#111817] block transition-all duration-200"
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-t border-[#f0f4f4] overflow-hidden"
              >
                <nav className="flex flex-col p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                          item.name === "Team"
                            ? "bg-[#13ebc7] text-[#111817]"
                            : "text-[#111817] hover:bg-[#f0f4f4]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[1400px] flex-1">
            {/* Hero Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111817] mb-8">
                Meet the Team
              </h1>
              <div className="max-w-4xl mx-auto text-lg text-[#618983] leading-relaxed space-y-4">
                <p>
                  At the heart of Enactus MH is a group of passionate, driven
                  individuals dedicated to creating a lasting impact through
                  entrepreneurial action. Get to know the dynamic council
                  leading our charge toward innovation, inclusion, and social
                  transformation.
                </p>
                <p>
                  From project heads to vertical leads, here's the team working
                  tirelessly behind the scenes to turn ideas into impact.
                </p>
              </div>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f4] overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-[#13ebc7]/20">
                    <div className="relative overflow-hidden">
                      <div
                        className="w-full h-72 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url("${member.image}")` }}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-[#111817] mb-2 group-hover:text-[#13ebc7] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#618983] text-sm font-medium">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-[#f0f4f4] rounded-xl p-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111817] mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-[#618983] mb-8 max-w-2xl mx-auto">
                Ready to be part of something bigger? Join our team of
                passionate changemakers and help us create lasting social impact
                through entrepreneurial action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#13ebc7] text-[#111817] rounded-xl font-bold text-lg hover:bg-[#11d4b4] transition-colors duration-200"
                >
                  Get Involved
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#111817] border-2 border-[#13ebc7] rounded-xl font-bold text-lg hover:bg-[#13ebc7] hover:text-[#111817] transition-colors duration-200"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
