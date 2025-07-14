// projects/page.tsx
"use client";
import logoImage from "../../public/logo.png";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Project {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  slug: string;
  category: string;
  status: "Active" | "Completed" | "Planning";
  impact: string;
  beneficiaries: number;
  startDate: string;
  images: string[];
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
    fullDescription:
      "Project Bloom focuses on empowering local artisans by providing them with sustainable livelihood opportunities through traditional crafts. We work closely with women artisans to help them develop their skills, access new markets, and build sustainable businesses. Our initiative includes training workshops, market linkage programs, and financial literacy sessions.",
    image: "/dhreya.jpg",
    slug: "project-bloom",
    category: "Livelihood",
    status: "Active",
    impact: "Income increase of 150%",
    beneficiaries: 120,
    startDate: "2023-03-15",
    images: ["/dhreya.jpg"],
  },
  {
    id: 2,
    name: "Project Ikhtiyaar",
    description: "Igniting creativity and innovation in education.",
    fullDescription:
      "Project Spark aims to revolutionize education in underprivileged communities by introducing innovative teaching methods and digital literacy programs. We work with local schools to implement creative learning techniques, provide educational resources, and train teachers in modern pedagogical approaches.",
    image: "/ikhtiyaar.jpg",
    slug: "project-spark",
    category: "Education",
    status: "Active",
    impact: "Improved learning outcomes by 40%",
    beneficiaries: 300,
    startDate: "2023-01-20",
    images: ["/ikhtiyaar.jpg"],
  },
  {
    id: 3,
    name: "Project Riwayat",
    description: "Promoting health and wellness in underserved communities.",
    fullDescription:
      "Project Thrive addresses healthcare challenges in underserved communities by promoting preventive healthcare, nutrition awareness, and mental wellness. Our program includes health camps, nutrition workshops, mental health awareness sessions, and establishing community health support groups.",
    image: "/muraad.jpg",
    slug: "project-thrive",
    category: "Healthcare",
    status: "Active",
    impact: "Reached 2000+ individuals",
    beneficiaries: 2000,
    startDate: "2022-11-10",
    images: ["/muraad.jpg"],
  },
  {
    id: 4,
    name: "Project Noorani",
    description: "Connecting people through technology and social initiatives.",
    fullDescription:
      "Project Connect bridges the digital divide by providing technology access and digital literacy training to marginalized communities. We establish computer centers, conduct digital literacy workshops, and create platforms for community networking and knowledge sharing.",
    image: "/zaffran.png",
    slug: "project-connect",
    category: "Technology",
    status: "Planning",
    impact: "Digital literacy for 500+ people",
    beneficiaries: 500,
    startDate: "2024-02-01",
    images: ["/zaffran.png"],
  },
  {
    id: 5,
    name: "Project Nitara",
    description: "Supporting child development and early education.",
    fullDescription:
      "Project Nurture focuses on early childhood development and education in disadvantaged communities. We provide preschool education, parenting workshops, nutritional support, and create safe learning environments for children aged 3-6 years.",
    image: "/zaffran.png",
    slug: "project-nurture",
    category: "Education",
    status: "Completed",
    impact: "150 children benefited",
    beneficiaries: 150,
    startDate: "2022-06-15",
    images: ["/zaffran.png"],
  },
  {
    id: 6,
    name: "Project Dhreya",
    description: "Aimed to refine the skills of the cobbler community",
    fullDescription:
      "Initially launched in 2017, Project Dhreya aimed to refine the skills of the cobbler community, particularly by engaging women in the stitching of diaries and notebooks, promoting both empowerment and recycling practices.In 2019, the project evolved to utilise crop waste for producing biomass briquettes, promoting renewable energy and efficient waste management.",
    image: "/zaffran.png",
    slug: "project-nurture",
    category: "Education",
    status: "Completed",
    impact: "150 children benefited",
    beneficiaries: 150,
    startDate: "2022-06-15",
    images: ["/zaffran.png"],
  },
  {
    id: 7,
    name: "Project Inara",
    description: "Focused on manufacturing solar-powered bulbs",
    fullDescription:
      "An entrepreneurial venture focused on manufacturing solar-powered bulbs, Project Inara strived to provide sustainable lighting solutions to unilluminated areas at affordable rates, thus advancing clean energy access.",
    image: "/zaffran.png",
    slug: "project-nurture",
    category: "Education",
    status: "Completed",
    impact: "150 children benefited",
    beneficiaries: 150,
    startDate: "2022-06-15",
    images: ["/zaffran.png"],
  },
  {
    id: 8,
    name: "Project Muraad",
    description: "Addresses the escalating issue of plastic waste",
    fullDescription:
      "Project Murad addresses the escalating issue of plastic waste by converting single-use and multi-layered plastics into durable bricks, paving the way for innovative waste-to-resource solutions.",
    image: "/zaffran.png",
    slug: "project-nurture",
    category: "Education",
    status: "Completed",
    impact: "150 children benefited",
    beneficiaries: 150,
    startDate: "2022-06-15",
    images: ["/zaffran.png"],
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

// Main Component
export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        staggerChildren: 0.1,
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
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
              <Link href="/" className="flex items-center gap-3">
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
              </Link>
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
                        item.name === "Projects"
                          ? "text-[#13ebc7]"
                          : "text-[#111817] hover:text-[#13ebc7]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#13ebc7] transition-all duration-200 ${
                          item.name === "Projects"
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
                          item.name === "Projects"
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
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Hero Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111817] mb-4">
                Our Projects
              </h1>
              <p className="text-lg text-[#618983] max-w-2xl mx-auto">
                Discover the impactful initiatives we've launched to create
                positive change in communities around us.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
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
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </span>
                          <span className="text-xs text-[#618983]">
                            {project.category}
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
                            <span>Beneficiaries: {project.beneficiaries}</span>
                            <span>
                              Since {new Date(project.startDate).getFullYear()}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-[#13ebc7]">
                            {project.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-[#f0f4f4] rounded-xl p-8 mt-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111817] mb-4">
                Want to Get Involved?
              </h2>
              <p className="text-[#618983] mb-6 max-w-2xl mx-auto">
                Join us in making a difference. Whether you're a student,
                professional, or community member, there are many ways to
                contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#13ebc7] text-[#111817] rounded-xl font-bold hover:bg-[#11d4b4] transition-colors duration-200"
                >
                  Join Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#111817] border border-[#13ebc7] rounded-xl font-bold hover:bg-[#13ebc7] hover:text-[#111817] transition-colors duration-200"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}