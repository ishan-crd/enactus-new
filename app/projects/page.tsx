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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5WTNCzZMmRaJf_Jek09hFujPFlzfDPfMTdVY6CHwjlMOvH_WukIwfuF3Csr0LkSMkSH0P8-hYmZha7KwDO71X812IdHeXCJ7ENAd1yf7-jtLptVcUz-LBJZ1lt08EP2u_RPjPZlw8VVUYJoSB0_19kqfZGn-_1Vv_kILcgfL0fPYRlzfZf_jf2xQdFNf5OJ6Mptd9FSAMiqfa2gfALKKqAVRXVaAaQUmTyvSadUoaW1OuX3udEcaK6aEGLJNqIYLJPqHaWpBUzMBa",
    slug: "project-bloom",
    category: "Livelihood",
    status: "Active",
    impact: "Income increase of 150%",
    beneficiaries: 120,
    startDate: "2023-03-15",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5WTNCzZMmRaJf_Jek09hFujPFlzfDPfMTdVY6CHwjlMOvH_WukIwfuF3Csr0LkSMkSH0P8-hYmZha7KwDO71X812IdHeXCJ7ENAd1yf7-jtLptVcUz-LBJZ1lt08EP2u_RPjPZlw8VVUYJoSB0_19kqfZGn-_1Vv_kILcgfL0fPYRlzfZf_jf2xQdFNf5OJ6Mptd9FSAMiqfa2gfALKKqAVRXVaAaQUmTyvSadUoaW1OuX3udEcaK6aEGLJNqIYLJPqHaWpBUzMBa",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHmerSW34sHGU03nZjIOTaycE71y4zZ64H25Il53KUt0WjK3R7-v1LF06xpuKLrZP_-xZmoyc8DsDMnEhjc8EWN_JR1I0Gl3_PKfRYzwkLJWqubUVB7ggNUNfpu3G__-r2n-DyoKNSFPtJeSJ2smUTlb_e9OLsIhPF5uwrMzYWpD5obmr8UBvKNaSA8EWIyfNKMOCG9YKTAKzUpcougtAMFuoxSS0ZKARpzvhcwW-_0uSkTnzTmBTrd2157m5qgfHsWLJfa4Ncdpvk",
    ],
  },
  {
    id: 2,
    name: "Project Ikhtiyaar",
    description: "Igniting creativity and innovation in education.",
    fullDescription:
      "Project Spark aims to revolutionize education in underprivileged communities by introducing innovative teaching methods and digital literacy programs. We work with local schools to implement creative learning techniques, provide educational resources, and train teachers in modern pedagogical approaches.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHmerSW34sHGU03nZjIOTaycE71y4zZ64H25Il53KUt0WjK3R7-v1LF06xpuKLrZP_-xZmoyc8DsDMnEhjc8EWN_JR1I0Gl3_PKfRYzwkLJWqubUVB7ggNUNfpu3G__-r2n-DyoKNSFPtJeSJ2smUTlb_e9OLsIhPF5uwrMzYWpD5obmr8UBvKNaSA8EWIyfNKMOCG9YKTAKzUpcougtAMFuoxSS0ZKARpzvhcwW-_0uSkTnzTmBTrd2157m5qgfHsWLJfa4Ncdpvk",
    slug: "project-spark",
    category: "Education",
    status: "Active",
    impact: "Improved learning outcomes by 40%",
    beneficiaries: 300,
    startDate: "2023-01-20",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHmerSW34sHGU03nZjIOTaycE71y4zZ64H25Il53KUt0WjK3R7-v1LF06xpuKLrZP_-xZmoyc8DsDMnEhjc8EWN_JR1I0Gl3_PKfRYzwkLJWqubUVB7ggNUNfpu3G__-r2n-DyoKNSFPtJeSJ2smUTlb_e9OLsIhPF5uwrMzYWpD5obmr8UBvKNaSA8EWIyfNKMOCG9YKTAKzUpcougtAMFuoxSS0ZKARpzvhcwW-_0uSkTnzTmBTrd2157m5qgfHsWLJfa4Ncdpvk",
    ],
  },
  {
    id: 3,
    name: "Project Riwayat",
    description: "Promoting health and wellness in underserved communities.",
    fullDescription:
      "Project Thrive addresses healthcare challenges in underserved communities by promoting preventive healthcare, nutrition awareness, and mental wellness. Our program includes health camps, nutrition workshops, mental health awareness sessions, and establishing community health support groups.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8nmiTUFmrokd-cSid9h55yJEwOn1IxxV-fi9uolVFqIFjfo4IenjX_BSa_w7wVgoy9Afz6rWlQ-FYlDmQwLt91gas-Xwd2KMNtg4x8W-Z_M1RYOvYoBIauRdmVMussGUCMMNUcsO_5S9a2-Q-d2o9M73nN5tvkgXOnazstCbRRK9OumuA0qENauhC7M02_lLar1MKAjS_dvpwR5_WP9Y4O3uz1ljv-NuGKeCZlPDaB6foKsoKKwYL_PT6LrjrrgKA7iZ7xrP7uDJ",
    slug: "project-thrive",
    category: "Healthcare",
    status: "Active",
    impact: "Reached 2000+ individuals",
    beneficiaries: 2000,
    startDate: "2022-11-10",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8nmiTUFmrokd-cSid9h55yJEwOn1IxxV-fi9uolVFqIFjfo4IenjX_BSa_w7wVgoy9Afz6rWlQ-FYlDmQwLt91gas-Xwd2KMNtg4x8W-Z_M1RYOvYoBIauRdmVMussGUCMMNUcsO_5S9a2-Q-d2o9M73nN5tvkgXOnazstCbRRK9OumuA0qENauhC7M02_lLar1MKAjS_dvpwR5_WP9Y4O3uz1ljv-NuGKeCZlPDaB6foKsoKKwYL_PT6LrjrrgKA7iZ7xrP7uDJ",
    ],
  },
  {
    id: 4,
    name: "Project Noorani",
    description: "Connecting people through technology and social initiatives.",
    fullDescription:
      "Project Connect bridges the digital divide by providing technology access and digital literacy training to marginalized communities. We establish computer centers, conduct digital literacy workshops, and create platforms for community networking and knowledge sharing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDApscKVn5Qu-YIpGPKfU7PX4LnQVdDuYW2PkZ1O9oStGJ92LMGyUiDfMr40NAVWfjt8M0eVhJdp0nnZtc4rRz03YxaO7TAu3_59YiyI9olzVF1ocXx1LvsEcn3hpdXUxNB2jPO2DcjvDiUzcolvmjRgNsGWMf04HBmYfxiXW3CNXXahBhfq28eSoHQt7VjWGkbWQwUczIyg6iR4_RAQSGYJWQw9zezAvBTMlXtt2S_P4shCb2_1zR611GiiMEgsXscfJn1C7A5MEWV",
    slug: "project-connect",
    category: "Technology",
    status: "Planning",
    impact: "Digital literacy for 500+ people",
    beneficiaries: 500,
    startDate: "2024-02-01",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDApscKVn5Qu-YIpGPKfU7PX4LnQVdDuYW2PkZ1O9oStGJ92LMGyUiDfMr40NAVWfjt8M0eVhJdp0nnZtc4rRz03YxaO7TAu3_59YiyI9olzVF1ocXx1LvsEcn3hpdXUxNB2jPO2DcjvDiUzcolvmjRgNsGWMf04HBmYfxiXW3CNXXahBhfq28eSoHQt7VjWGkbWQwUczIyg6iR4_RAQSGYJWQw9zezAvBTMlXtt2S_P4shCb2_1zR611GiiMEgsXscfJn1C7A5MEWV",
    ],
  },
  {
    id: 5,
    name: "Project Nitara",
    description: "Supporting child development and early education.",
    fullDescription:
      "Project Nurture focuses on early childhood development and education in disadvantaged communities. We provide preschool education, parenting workshops, nutritional support, and create safe learning environments for children aged 3-6 years.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpQIlpyJirmYYPk_QaLwp0mXq1uE6z5U2QOmy27uFN_rMMbu5x9kab1jMvuszEXeRvIYPmjsJZkCTYRfnXNlIYRQVtXEJcMxfGMf-dC9t_mQSxAWp6fj1IILkt38VphmeAgC8IIB2hfv8EkgHFikaeva4AJ9xN9qSyp4yRHjN5Jfhyte_raLx2WBGHAiqeBJg-9obk9PL36g06svBW_wIWGol1iPUFLxvYy8YVucw0mz_eG_lOC2S8vNEvS9hUP2f7CQoYxC5C19ji",
    slug: "project-nurture",
    category: "Education",
    status: "Completed",
    impact: "150 children benefited",
    beneficiaries: 150,
    startDate: "2022-06-15",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpQIlpyJirmYYPk_QaLwp0mXq1uE6z5U2QOmy27uFN_rMMbu5x9kab1jMvuszEXeRvIYPmjsJZkCTYRfnXNlIYRQVtXEJcMxfGMf-dC9t_mQSxAWp6fj1IILkt38VphmeAgC8IIB2hfv8EkgHFikaeva4AJ9xN9qSyp4yRHjN5Jfhyte_raLx2WBGHAiqeBJg-9obk9PL36g06svBW_wIWGol1iPUFLxvYy8YVucw0mz_eG_lOC2S8vNEvS9hUP2f7CQoYxC5C19ji",
    ],
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

const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M230,208a8,8,0,0,1-8,8H34a8,8,0,0,1,0-16H222A8,8,0,0,1,230,208ZM66,128a8,8,0,0,0,0,16H190a8,8,0,0,0,0-16ZM98,80a8,8,0,0,0,0,16h60a8,8,0,0,0,0-16Z" />
  </svg>
);

// Main Component
export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    "All",
    "Livelihood",
    "Education",
    "Healthcare",
    "Technology",
    "Environment",
  ];
  const statuses = ["All", "Active", "Completed", "Planning"];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

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
              className="text-center mb-12"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111817] mb-4">
                Our Projects
              </h1>
              <p className="text-lg text-[#618983] max-w-2xl mx-auto">
                Discover the impactful initiatives we've launched to create
                positive change in communities around us.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 space-y-4"
            >
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-[#f0f4f4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#13ebc7] focus:border-transparent"
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#618983]" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-[#618983] flex items-center">
                    <FilterIcon className="mr-2" />
                    Category:
                  </span>
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        selectedCategory === category
                          ? "bg-[#13ebc7] text-[#111817]"
                          : "bg-[#f0f4f4] text-[#618983] hover:bg-[#e5e9e9]"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>

                {/* Status Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-[#618983]">
                    Status:
                  </span>
                  {statuses.map((status) => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                        selectedStatus === status
                          ? "bg-[#13ebc7] text-[#111817]"
                          : "bg-[#f0f4f4] text-[#618983] hover:bg-[#e5e9e9]"
                      }`}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {filteredProjects.map((project) => (
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

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h3 className="text-xl font-medium text-[#618983] mb-2">
                  No projects found
                </h3>
                <p className="text-[#618983]">
                  Try adjusting your search criteria or filters.
                </p>
              </motion.div>
            )}

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
