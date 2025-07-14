"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../public/logo.png";

// Icons
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

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111L144,128ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12s-54.36.25-86-12a8,8,0,0,1-4.77-5.49C35.16,173.25,32,156.57,32,128s3.16-45.25,5.33-54.48A8,8,0,0,1,42.1,68c31.65-12.23,85.48-12,86-12s54.36-.25,86,12a8,8,0,0,1,4.77,5.49C220.84,82.75,224,99.43,224,128S220.84,173.25,218.84,182.48Z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
  </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
  >
    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
  </svg>
);

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

interface NavItem {
  name: string;
  href: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: "Email Us",
      description: "enactus@mirandahouse.ac.in",
      link: "mailto:enactus@mirandahouse.ac.in",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: <InstagramIcon className="w-6 h-6" />,
      title: "Instagram",
      description: "@enac.soc.mh",
      link: "https://www.instagram.com/enac.soc.mh?igsh=OGZ3NHJpa2J5Y3l0",
      color: "bg-pink-50 text-pink-600 border-pink-200",
    },
    {
      icon: <LinkedInIcon className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Team Enactus MH",
      link: "https://www.linkedin.com/in/team-enactus-mh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: <YouTubeIcon className="w-6 h-6" />,
      title: "YouTube",
      description: "Enactus MH",
      link: "https://www.youtube.com/@EnactusMH",
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "Address",
      description: "Miranda House, University of Delhi, Delhi 110007",
      color: "bg-green-50 text-green-600 border-green-200",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
          <div className="flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 text-[#111817]"
            >
              <Link href="/" className="flex items-center gap-4">
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
            <div className="hidden md:flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-9">
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
                        item.name === "Contact"
                          ? "text-[#13ebc7]"
                          : "text-[#111817] hover:text-[#13ebc7]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#13ebc7] transition-all duration-200 ${
                          item.name === "Contact"
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
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f4f4] text-[#111817] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#e5e9e9] transition-colors duration-200"
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
              className="md:hidden p-2"
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
                className="md:hidden bg-white border-t border-[#f0f4f4] overflow-hidden"
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
                          item.name === "Contact"
                            ? "text-[#13ebc7] bg-[#f0f4f4]"
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

        {/* Main Content */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Hero Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#111817] text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#618983] text-lg leading-relaxed max-w-2xl mx-auto"
              >
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </motion.p>
            </motion.div>

            {/* Contact Information Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${info.color}`}
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-sm opacity-80 break-words">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#f0f4f4] rounded-xl p-8"
              >
                <h2 className="text-[#111817] text-2xl font-bold mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#111817] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#e5e9e9] rounded-lg focus:ring-2 focus:ring-[#13ebc7] focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#111817] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#e5e9e9] rounded-lg focus:ring-2 focus:ring-[#13ebc7] focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#111817] mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#e5e9e9] rounded-lg focus:ring-2 focus:ring-[#13ebc7] focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#111817] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#e5e9e9] rounded-lg focus:ring-2 focus:ring-[#13ebc7] focus:border-transparent transition-all duration-200 bg-white resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#13ebc7] text-[#111817] font-bold py-3 px-6 rounded-lg hover:bg-[#11d4b4] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg"
                      >
                        Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Google Map Embed */}
                <div className="bg-white rounded-xl p-2 shadow-lg">
                  <h3 className="text-[#111817] text-xl font-bold mb-4 px-4 pt-4">
                    Visit Us
                  </h3>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5739999999996!2d77.20499999999999!3d28.615799999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3e2e8e6f25%3A0x7c7e3b4e7f4e6d4e!2sMiranda%20House%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Office Hours */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-[#f0f4f4]"
                >
                  <h3 className="text-[#111817] text-xl font-bold mb-4 flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-[#13ebc7]" />
                    Office Hours
                  </h3>
                  <div className="space-y-3 text-[#618983]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-[#13ebc7] to-[#11d4b4] rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <p className="mb-4 opacity-90">
                    Have an urgent question? Reach out to us directly through
                    our social media channels for faster responses.
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.instagram.com/enac.soc.mh?igsh=OGZ3NHJpa2J5Y3l0"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/team-enactus-mh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://www.youtube.com/@EnactusMH"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <YouTubeIcon className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-[#111817] text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f4f4] rounded-xl p-6"
                >
                  <h3 className="text-[#111817] text-lg font-bold mb-3">
                    How can I join Enactus Miranda House?
                  </h3>
                  <p className="text-[#618983] text-sm">
                    We conduct recruitment drives at the beginning of each
                    academic year. Follow our social media accounts for updates
                    on recruitment and application processes.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f4f4] rounded-xl p-6"
                >
                  <h3 className="text-[#111817] text-lg font-bold mb-3">
                    What projects does Enactus MH work on?
                  </h3>
                  <p className="text-[#618983] text-sm">
                    We focus on four main projects: Dharang, Ikhtiyaar, Riwayat,
                    and Noorani. Each project addresses different social
                    challenges in our community.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f4f4] rounded-xl p-6"
                >
                  <h3 className="text-[#111817] text-lg font-bold mb-3">
                    Can I volunteer for specific events?
                  </h3>
                  <p className="text-[#618983] text-sm">
                    Yes! We welcome volunteers for our events and initiatives.
                    Contact us through any of our channels to learn about
                    current volunteering opportunities.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f4f4] rounded-xl p-6"
                >
                  <h3 className="text-[#111817] text-lg font-bold mb-3">
                    How can I support Enactus MH's mission?
                  </h3>
                  <p className="text-[#618983] text-sm">
                    You can support us by volunteering, participating in our
                    events, purchasing from our store, or spreading awareness
                    about our projects and initiatives.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-[#13ebc7] to-[#11d4b4] rounded-xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join us in creating positive change in our communities. Whether
                you're a student, professional, or community member, there's a
                place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#13ebc7] font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Learn About Our Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#13ebc7] transition-colors duration-200"
                >
                  Follow Our Journey
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <motion.footer
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 px-5 py-10 text-center @container"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-[#618983] text-base font-normal leading-normal min-w-40 hover:text-[#13ebc7] transition-colors duration-200"
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
                  href="https://www.instagram.com/enac.soc.mh?igsh=OGZ3NHJpa2J5Y3l0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <InstagramIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/team-enactus-mh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <LinkedInIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@EnactusMH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#13ebc7" }}
                  transition={{ duration: 0.2 }}
                >
                  <YouTubeIcon className="text-[#618983] hover:text-[#13ebc7] transition-colors duration-200" />
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-[#618983] text-base font-normal leading-normal"
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