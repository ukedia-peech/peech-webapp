import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";
import JobApplicationForm from "../ui/JobApplicationForm";
import { staggerContainer, cardVariants } from "../../utils/animations";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationJob, setApplicationJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Consultant",
      department: "Consulting",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "8+ years",
      description:
        "Lead Celonis implementations for Fortune 500 clients, design process mining solutions, and drive digital transformation initiatives.",
      requirements: [
        "8+ years of experience with Celonis platform or process mining",
        "Strong background in process mining and business process management",
        "Experience with SAP, Oracle, or other ERP systems",
        "Excellent client-facing and communication skills",
        "Bachelor's degree in Engineering, Computer Science, or related field",
      ],
      responsibilities: [
        "Lead end-to-end Celonis implementation projects",
        "Design and configure process mining solutions",
        "Conduct process discovery and analysis workshops",
        "Mentor junior consultants and team members",
        "Present findings and recommendations to C-level executives",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote options",
        "Professional development and Celonis certification support",
        "Annual conference and training budget",
      ],
      applyLink: "https://forms.google.com/YOUR_FORM_ID_HERE_SENIOR_CONSULTANT", // Replace with actual Google Form link
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Project Management",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "8+ years",
      description:
        "Manage process mining projects, coordinate with consultants and clients, ensure timely delivery and client satisfaction.",
      requirements: [
        "8+ years of project management experience, preferably in consulting or technology",
        "Strong organizational and communication skills",
        "Experience with Agile or Waterfall project management methodologies",
        "Familiarity with process mining or business transformation is a plus",
        "PMP or similar certification is preferred",
      ],
      responsibilities: [
        "Manage end-to-end project lifecycle from initiation to delivery",
        "Coordinate with consultants, clients, and stakeholders",
        "Track project progress, budgets, and timelines",
        "Identify and mitigate project risks and issues",
        "Ensure quality deliverables and client satisfaction",
      ],
      benefits: [
        "Competitive salary with growth potential",
        "Comprehensive benefits package",
        "Professional development and certification support",
        "Collaborative and innovative work environment",
        "Opportunity to work with Fortune 500 clients",
      ],
      applyLink: "https://forms.google.com/YOUR_FORM_ID_HERE_PROJECT_MANAGER", // Replace with actual Google Form link
    },
  ];

  const departments = ["All", "Consulting", "Project Management"];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  const openModal = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "unset";
  };

  const openApplicationForm = (job) => {
    setApplicationJob(job);
    setShowApplicationForm(true);
    setSelectedJob(null);
    document.body.style.overflow = "hidden";
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setApplicationJob(null);
    document.body.style.overflow = "unset";
  };

  const handleApplicationSubmit = (applicationData) => {
    console.log("Application submitted:", applicationData);
    // Here you would typically send the data to your backend
    closeApplicationForm();
  };

  return (
    <section id="careers" className="section-padding bg-black-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="heading-lg mb-4 sm:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="body-lg text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
            Help us transform how Fortune 500 companies optimize their business
            processes. Join a team of process mining experts, Celonis
            specialists, and automation consultants who are passionate about
            driving operational excellence.
          </p>
        </motion.div>

        {/* Company Culture Highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          {[
            {
              icon: "🚀",
              title: "Innovation-First Culture",
              description:
                "Work with cutting-edge process mining and automation technologies",
            },
            {
              icon: "🌟",
              title: "Fortune 500 Impact",
              description:
                "Drive transformation at the world's largest and most influential companies",
            },
            {
              icon: "📈",
              title: "Rapid Growth",
              description:
                "Join a fast-growing company with unlimited career advancement opportunities",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
        >
          {departments.map((dept) => (
            <motion.button
              key={dept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedDepartment === dept
                  ? "bg-primary-500 text-white border border-primary-500"
                  : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/50"
              }`}
            >
              {dept}{" "}
              {dept !== "All" &&
                `(${
                  jobOpenings.filter((job) => job.department === dept).length
                })`}
            </motion.button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
          >
            {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => openModal(job)}
            >
              <Card
                variant="dark"
                className="h-full hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 hover:text-primary-500 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm border border-primary-500/30">
                        {job.department}
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="text-gray-300 text-right">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Experience:</span>
                    <span className="text-gray-300 text-right">
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-700">
                  <button className="text-primary-500 hover:text-primary-400 font-medium transition-colors text-sm sm:text-base">
                    View Details →
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedJob.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                        {selectedJob.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {selectedJob.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {selectedJob.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Job Description
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="text-primary-500 mt-1">•</span>
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="text-primary-500 mt-1">•</span>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Benefits & Perks
                      </h3>
                      <ul className="space-y-2">
                        {selectedJob.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="text-primary-500 mt-1">•</span>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Quick Info */}
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Position Details
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">
                            Experience Level
                          </span>
                          <p className="text-white font-medium">
                            {selectedJob.experience}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">
                            Location
                          </span>
                          <p className="text-white font-medium">
                            {selectedJob.location}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">
                            Employment Type
                          </span>
                          <p className="text-white font-medium">
                            {selectedJob.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    {/* <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedJob.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-center block"
                    >
                      Apply for this Position
                    </motion.a> */}

                    {/* Contact Info */}
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Questions?
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Have questions about this role? Reach out to our HR
                        team.
                      </p>
                      <a
                        href="mailto:recruiting@peech.tech"
                        className="text-primary-500 hover:text-primary-400 transition-colors text-sm font-medium"
                      >
                        recruiting@peech.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && applicationJob && (
          <JobApplicationForm
            jobTitle={applicationJob.title}
            onClose={closeApplicationForm}
            onSubmit={handleApplicationSubmit}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Careers;
