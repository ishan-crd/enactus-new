"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../public/bgimage.png";
import convenorImage from "../public/convenor.jpeg";
import logoImage from "../public/logo.png";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}
interface Achievement {
  title: string;
  value: string;
  icon: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

interface NavItem {
  name: string;
  href: string;
}

// Data
const projects: Project[] = [
  {
    id: 1,
    name: "Project Dharang",
    description: "Empowering underserved communities",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5WTNCzZMmRaJf_Jek09hFujPFlzfDPfMTdVY6CHwjlMOvH_WukIwfuF3Csr0LkSMkSH0P8-hYmZha7KwDO71X812IdHeXCJ7ENAd1yf7-jtLptVcUz-LBJZ1lt08EP2u_RPjPZlw8VVUYJoSB0_19kqfZGn-_1Vv_kILcgfL0fPYRlzfZf_jf2xQdFNf5OJ6Mptd9FSAMiqfa2gfALKKqAVRXVaAaQUmTyvSadUoaW1OuX3udEcaK6aEGLJNqIYLJPqHaWpBUzMBa",
    slug: "project-bloom",
  },
  {
    id: 2,
    name: "Project Ikhtiyaar",
    description: "Igniting creativity and innovation in education.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHmerSW34sHGU03nZjIOTaycE71y4zZ64H25Il53KUt0WjK3R7-v1LF06xpuKLrZP_-xZmoyc8DsDMnEhjc8EWN_JR1I0Gl3_PKfRYzwkLJWqubUVB7ggNUNfpu3G__-r2n-DyoKNSFPtJeSJ2smUTlb_e9OLsIhPF5uwrMzYWpD5obmr8UBvKNaSA8EWIyfNKMOCG9YKTAKzUpcougtAMFuoxSS0ZKARpzvhcwW-_0uSkTnzTmBTrd2157m5qgfHsWLJfa4Ncdpvk",
    slug: "project-spark",
  },
  {
    id: 3,
    name: "Project Riwayat",
    description: "Promoting health and wellness in underserved communities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8nmiTUFmrokd-cSid9h55yJEwOn1IxxV-fi9uolVFqIFjfo4IenjX_BSa_w7wVgoy9Afz6rWlQ-FYlDmQwLt91gas-Xwd2KMNtg4x8W-Z_M1RYOvYoBIauRdmVMussGUCMMNUcsO_5S9a2-Q-d2o9M73nN5tvkgXOnazstCbRRK9OumuA0qENauhC7M02_lLar1MKAjS_dvpwR5_WP9Y4O3uz1ljv-NuGKeCZlPDaB6foKsoKKwYL_PT6LrjrrgKA7iZ7xrP7uDJ",
    slug: "project-thrive",
  },
  {
    id: 4,
    name: "Project Noorani",
    description: "Connecting people through technology and social initiatives.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDApscKVn5Qu-YIpGPKfU7PX4LnQVdDuYW2PkZ1O9oStGJ92LMGyUiDfMr40NAVWfjt8M0eVhJdp0nnZtc4rRz03YxaO7TAu3_59YiyI9olzVF1ocXx1LvsEcn3hpdXUxNB2jPO2DcjvDiUzcolvmjRgNsGWMf04HBmYfxiXW3CNXXahBhfq28eSoHQt7VjWGkbWQwUczIyg6iR4_RAQSGYJWQw9zezAvBTMlXtt2S_P4shCb2_1zR611GiiMEgsXscfJn1C7A5MEWV",
    slug: "project-connect",
  },
];

const events: Event[] = [
  {
    id: 1,
    title: "Enactus Innovation Summit",
    description:
      "A summit focused on innovative solutions for social challenges.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpQIlpyJirmYYPk_QaLwp0mXq1uE6z5U2QOmy27uFN_rMMbu5x9kab1jMvuszEXeRvIYPmjsJZkCTYRfnXNlIYRQVtXEJcMxfGMf-dC9t_mQSxAWp6fj1IILkt38VphmeAgC8IIB2hfv8EkgHFikaeva4AJ9xN9qSyp4yRHjN5Jfhyte_raLx2WBGHAiqeBJg-9obk9PL36g06svBW_wIWGol1iPUFLxvYy8YVucw0mz_eG_lOC2S8vNEvS9hUP2f7CQoYxC5C19ji",
    date: "2024-08-15",
    slug: "innovation-summit",
  },
  {
    id: 2,
    title: "Social Entrepreneurship Workshop",
    description:
      "A workshop to develop entrepreneurial skills for social good.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL5Gl4powpAJWaPVxlAoX-XelH35J663_VnQH9DTZKbMGJ1TIgx7mNki6RT2bGv6r96Jj9jPMNE_DZ1MnArTZfWaEIOXaeYG_K6M9kewMkGYlN_dycDVY1_Viuvc0YZPsoh0FQkXfnUxSrDXcLSVxWVXRvNJAstG9rTRB_121Hqh16qpGesTqvjm5FFGS4VyKf5jQE1hqEDPcQfxg2hivCAhYW3XRZNVX9ow54iOAgYDXqA5X7VQLMBgF_WH0FeXRkl_sY4bYXN__V",
    date: "2024-09-20",
    slug: "entrepreneurship-workshop",
  },
  {
    id: 3,
    title: "Community Impact Day",
    description:
      "A day dedicated to making a positive impact in the community.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTO3T-t9xtVd3NKJr491PClO_LcBcUZQJUj6ozlXy7t9oz7nQbXGtyFIoQMt8D4nlF-WgHcsX9b-AVqIMPG_xjV79ieY2-fttm44TB65zLHZOzx6qsxCCAR-scXs6a926Kk5A-HC8h0Kj-Ri4H0Cw2wc3Ux1Jn0GX3SkzEthXtHiB4XedP5KZ1O3ciZ0UsnKuHjAIlRw0iisKIN99_gLbrqHL0H0XyriDj8ftiRrbT39EttY5hogcN12im0ntwQbQSjCILn461S_Ei",
    date: "2024-10-10",
    slug: "community-impact-day",
  },
  {
    id: 4,
    title: "Enactus Annual Gala",
    description: "An annual event celebrating the achievements of Enactus.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-EVXUFEZoQWTMUraT7yxfsTYyxFMXskKsJ5zGFSbbbCWXInz1qqK1g-FENZmVIM-XhwFEocHb4sE7l5v-rH2N0Y0lxLDMEgtv9QBjs8IEORDuSH96aWw3QT3Vo-dT18zLPMiWzSrXM1EoME8QHcEBcsoVk06nbGZQnOQFx9gkZx2MA3FeflWiHuPEBmfMbHoyPBLY4LcpqrBSHggu2si_eM3tmDKlwh687pEfRbs9r7JtG_lk4-fhSRHqro7OHePWclC5gQVRMXQ",
    date: "2024-11-25",
    slug: "annual-gala",
  },
];

const achievements: Achievement[] = [
  {
    title: "Awards Won",
    value: "25+",
    icon: "🏆",
  },
  {
    title: "Projects Launched",
    value: "5+",
    icon: "🚀",
  },
  {
    title: "Community Impact",
    value: "5000+",
    icon: "👥",
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

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0-16h24v63.63a88,88,0,1,1,16,0Z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
  </svg>
);

// Main Component
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ 
        fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto'
      }}
    >
      <div className="layout-container flex flex-col flex-grow" style={{ minHeight: '100vh', overflowY: 'auto' }}>
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
                        item.name === "Home"
                          ? "text-[#13ebc7]"
                          : "text-[#111817] hover:text-[#13ebc7]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#13ebc7] transition-all duration-200 ${
                          item.name === "Home"
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
                          item.name === "Home"
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

        <div 
          className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-40 flex flex-1 justify-center py-5"
          style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="relative flex min-h-[400px] sm:min-h-[480px] lg:min-h-[600px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 overflow-hidden">
                  <Image
                    src={heroImage}
                    alt="Hero Background"
                    fill
                    className="object-cover z-0"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-2 text-center z-10"
                  >
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-wide font-[Julius Sans One] leading-tight"
                    >
                      A HEART FOR BUSINESS
                    </motion.h1>

                    <motion.h2
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-wide font-[Julius Sans One] leading-tight"
                    >
                      A HEART FOR THE WORLD
                    </motion.h2>
                  </motion.div>

                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#13ebc7] text-[#111817] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-[#11d4b4] transition-colors duration-200 z-10"
                  >
                    <span className="truncate">Explore Projects</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <section className="mb-8 sm:mb-12">
              {/* Desktop Title */}
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="hidden lg:block text-[#111817] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              >
                Our Communities
              </motion.h2>

              {/* Mobile/Tablet Title */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:hidden text-center mb-8 px-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111817] mb-4">
                  Our Projects
                </h1>
                <p className="text-base sm:text-lg text-[#618983] max-w-2xl mx-auto">
                  Discover the impactful initiatives we've launched to create
                  positive change in communities around us.
                </p>
              </motion.div>

              {/* Desktop Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:grid lg:grid-cols-4 gap-3 p-4"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="flex flex-col gap-3 pb-3 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url("${project.image}")` }}
                        />
                        <div>
                          <p className="text-[#111817] text-base font-medium leading-normal group-hover:text-[#13ebc7] transition-colors duration-200">
                            {project.name}
                          </p>
                          <p className="text-[#618983] text-sm font-normal leading-normal">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile/Tablet Grid - Projects Page Style */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f4] overflow-hidden cursor-pointer transition-shadow duration-300 group-hover:shadow-lg">
                        <div
                          className="w-full h-48 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url("${project.image}")` }}
                        />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                            <span className="text-xs text-[#618983]">
                              {project.id === 1 ? "Livelihood" : 
                               project.id === 2 ? "Education" : 
                               project.id === 3 ? "Healthcare" : "Technology"}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#111817] mb-2 group-hover:text-[#13ebc7] transition-colors duration-200">
                            {project.name}
                          </h3>
                          <p className="text-[#618983] text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-[#618983]">
                              <span>Beneficiaries: {project.id === 1 ? "120" : 
                                                   project.id === 2 ? "300" : 
                                                   project.id === 3 ? "2000" : "500"}</span>
                              <span>
                                Since {project.id === 1 ? "2023" : 
                                      project.id === 2 ? "2023" : 
                                      project.id === 3 ? "2022" : "2024"}
                              </span>
                            </div>
                            <div className="text-xs font-medium text-[#13ebc7]">
                              {project.id === 1 ? "Income increase of 150%" : 
                               project.id === 2 ? "Improved learning outcomes by 40%" : 
                               project.id === 3 ? "Reached 2000+ individuals" : "Digital literacy for 500+ people"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Events Section */}
            <section className="mb-8 sm:mb-12">
              {/* Desktop Title */}
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="hidden lg:block text-[#111817] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              >
                Our Events
              </motion.h2>

              {/* Mobile/Tablet Title */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:hidden text-center mb-8 px-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111817] mb-4">
                  Our Events
                </h1>
                <p className="text-base sm:text-lg text-[#618983] max-w-2xl mx-auto">
                  Join us at our upcoming events and workshops designed to create
                  meaningful impact in our communities.
                </p>
              </motion.div>

              {/* Desktop Horizontal Scroll */}
              <div className="hidden lg:block">
                <div
                  className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  ref={scrollRef}
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-stretch p-4 gap-3 sm:gap-4"
                  >
                    {events.map((event) => (
                      <motion.div
                        key={event.id}
                        variants={slideInVariants}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3 },
                        }}
                        className="group"
                      >
                        <Link href={`/events/${event.slug}`}>
                          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 sm:min-w-72 cursor-pointer">
                            <div
                              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col transition-transform duration-300 group-hover:scale-105 relative overflow-hidden"
                              style={{ backgroundImage: `url("${event.image}")` }}
                            >
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                <span className="text-xs font-medium text-[#111817]">
                                  {new Date(event.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-[#111817] text-base font-medium leading-normal group-hover:text-[#13ebc7] transition-colors duration-200">
                                {event.title}
                              </p>
                              <p className="text-[#618983] text-sm font-normal leading-normal">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Mobile/Tablet Grid - Projects Page Style */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
              >
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <Link href={`/events/${event.slug}`}>
                      <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f4] overflow-hidden cursor-pointer transition-shadow duration-300 group-hover:shadow-lg">
                        <div
                          className="w-full h-48 bg-center bg-cover transition-transform duration-300 group-hover:scale-105 relative"
                          style={{ backgroundImage: `url("${event.image}")` }}
                        >
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <span className="text-xs font-medium text-[#111817]">
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Upcoming
                            </span>
                            <span className="text-xs text-[#618983]">
                              Event
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#111817] mb-2 group-hover:text-[#13ebc7] transition-colors duration-200">
                            {event.title}
                          </h3>
                          <p className="text-[#618983] text-sm mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-[#618983]">
                              <span>Date: {new Date(event.date).toLocaleDateString()}</span>
                              <span>
                                {new Date(event.date).getFullYear()}
                              </span>
                            </div>
                            <div className="text-xs font-medium text-[#13ebc7]">
                              Register Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Achievements Section */}
            <section className="mb-8 sm:mb-12">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[#111817] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              >
                Our Achievements
              </motion.h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 p-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={scaleVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(19, 235, 199, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f4f4] cursor-pointer"
                  >
                    <p className="text-[#111817] text-base font-medium leading-normal">
                      {achievement.title}
                    </p>
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="text-[#111817] tracking-light text-2xl font-bold leading-tight"
                    >
                      {achievement.value}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Convenor Message Section */}
            <section className="mb-8 sm:mb-16">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[#111817] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5"
              >
                Message from the Convenor
              </motion.h2>

              <div className="p-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#f0f4f4] to-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#e5e9e9]"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8">
                    {/* Content Section */}
                    <div className="flex flex-col gap-4 sm:gap-6 flex-[2] order-2 lg:order-1">
                      {/* Header Info */}
                      <div className="space-y-2">
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-[#13ebc7] text-sm font-semibold leading-normal uppercase tracking-wide"
                        >
                          Mrs. Malabika Pal
                        </motion.p>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="text-[#111817] text-lg sm:text-xl font-bold leading-tight"
                        >
                          Convenor, Enactus Miranda House
                        </motion.p>
                      </div>

                      {/* Quote Mark */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-[#13ebc7] text-3xl sm:text-4xl font-serif leading-none"
                      >
                        "
                      </motion.div>

                      {/* Message Content */}
                      <div className="space-y-4">
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="text-[#618983] text-sm sm:text-base leading-relaxed"
                        >
                          I am happy to write the inaugural note for the website of
                          Enactus Miranda House (MH). In the past five years that I
                          have been actively involved with the activities of the
                          Society, I have witnessed its steady growth. The credit
                          for this goes to the batches of enterprising students who
                          have contributed to its progress, with each batch passing
                          on the baton to the next having added a number of new
                          ideas to the pool.
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="text-[#618983] text-sm sm:text-base leading-relaxed"
                        >
                          I need to emphasize that our Principal,
                          Prof. Bijayalaxmi Nanda, has been very supportive and
                          encouraged and facilitated it at every stage.
                        </motion.p>

                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          viewport={{ once: true }}
                          className="text-[#618983] text-sm sm:text-base leading-relaxed"
                        >
                          The aim of Enactus is to collaborate with the marginalized
                          sections of the population, particularly women who are
                          unemployed and help them to carry on projects that become
                          self-sustainable in the long-run. Enactus has attempted to
                          provide the ideas and continues to handhold till profits
                          are enough to sustain households. In this endeavor, a
                          number of projects have been started and have reached
                          different stages of maturity. This journey will be put
                          forth in this website.
                        </motion.p>
                      </div>

                      {/* Signature/Attribution */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 pt-4 border-t border-[#e5e9e9]"
                      >
                        <div className="w-8 sm:w-12 h-0.5 bg-[#13ebc7]" />
                        <span className="text-[#111817] font-medium text-xs sm:text-sm">
                          Mrs. Malabika Pal, Convenor
                        </span>
                      </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative flex-1 order-1 lg:order-2 w-full sm:w-auto lg:max-w-[300px]"
                    >
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-[250px] sm:max-w-[300px] mx-auto lg:mx-0">
                        <Image
                          src={convenorImage}
                          alt="Mrs. Malabika Pal - Convenor, Enactus Miranda House"
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#13ebc7] rounded-full opacity-20" />
                      <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#13ebc7] rounded-full opacity-30" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Store Button */}
            <div className="flex px-4 py-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#13ebc7] text-[#111817] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#11d4b4] transition-colors duration-200"
              >
                <span className="truncate">Visit Our Store</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[1200px] flex-1 flex-col">
            <motion.footer
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 px-5 py-10 text-center @container"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 @[480px]:flex-row @[480px]:justify-around">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-[#618983] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40 hover:text-[#13ebc7] transition-colors duration-200"
                    href={item.href}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <InstagramIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <FacebookIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <TwitterIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-[#618983] text-sm sm:text-base font-normal leading-normal"
              >
                © 2025 Enactus Miranda House. All rights reserved.
              </motion.p>
            </motion.footer>
          </div>
        </footer>
      </div>
    </div>
  );
}