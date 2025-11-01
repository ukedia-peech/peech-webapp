import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { staggerContainer, cardVariants } from "../../utils/animations";

const Resources = () => {
  // Color scheme function
  const getColorScheme = (colorType) => {
    switch (colorType) {
      case "primary":
        return {
          bg: "bg-primary-500/30",
          border: "border-primary-500/50",
          text: "text-primary-400",
          hover: "hover:text-primary-300",
          iconBg: "bg-primary-500/20",
        };
      case "secondary":
        return {
          bg: "bg-blue-500/30",
          border: "border-blue-500/50",
          text: "text-blue-400",
          hover: "hover:text-blue-300",
          iconBg: "bg-blue-500/20",
        };
      case "accent":
        return {
          bg: "bg-green-500/30",
          border: "border-green-500/50",
          text: "text-green-400",
          hover: "hover:text-green-300",
          iconBg: "bg-green-500/20",
        };
      default:
        return {
          bg: "bg-primary-500/30",
          border: "border-primary-500/50",
          text: "text-primary-400",
          hover: "hover:text-primary-300",
          iconBg: "bg-primary-500/20",
        };
    }
  };

  const resources = [
    {
      type: "blog",
      title: "Celonis Implementation Best Practices for 2024",
      excerpt:
        "Discover proven strategies for successful Celonis deployments and how to maximize ROI from your process mining investment.",
      author: "Sarah Mitchell",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      image: "📊",
      color: "primary",
      category: "Blog",
    },
    {
      type: "whitepaper",
      title: "Complete Guide to Process Mining with Celonis",
      excerpt:
        "A comprehensive guide to implementing Celonis process mining for enterprise organizations seeking operational excellence.",
      author: "Michael Rodriguez",
      date: "Dec 10, 2024",
      readTime: "18 min read",
      image: "📋",
      color: "secondary",
      category: "Guides",
    },
    {
      type: "case-study",
      title: "How PepsiCo Achieved $4.2M Savings with Process Mining",
      excerpt:
        "Learn how PepsiCo leveraged Peech Consulting and Celonis to optimize procurement processes and achieve unprecedented cost savings.",
      author: "Dr. Elena Kowalski",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      image: "📈",
      color: "primary",
      category: "Case Studies",
    },

    {
      type: "guide",
      title: "Task Mining Implementation Roadmap",
      excerpt:
        "Step-by-step guide for organizations looking to implement task mining solutions for desktop process optimization.",
      author: "Lisa Wang",
      date: "Dec 5, 2024",
      readTime: "14 min read",
      image: "🤖",
      color: "secondary",
      category: "Guides",
    },
    {
      type: "report",
      title: "Kimberly-Clark: 35% Efficiency Improvement Case Study",
      excerpt:
        "Comprehensive analysis of how Kimberly-Clark achieved operational excellence through process mining and automation.",
      author: "David Thompson",
      date: "Dec 1, 2024",
      readTime: "12 min read",
      image: "📊",
      color: "primary",
      category: "Case Studies",
    },
  ];

  const categories = [
    { name: "All", count: resources.length },
    {
      name: "Blog",
      count: resources.filter((r) => r.category === "Blog").length,
    },
    {
      name: "Case Studies",
      count: resources.filter((r) => r.category === "Case Studies").length,
    },
    {
      name: "Guides",
      count: resources.filter((r) => r.category === "Guides").length,
    },
    {
      name: "Webinars",
      count: resources.filter((r) => r.category === "Webinars").length,
    },
  ];

  return (
    <section className="section-padding bg-black-950">
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
            Knowledge <span className="gradient-text">Hub</span>
          </h2>
          <p className="body-lg text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
            Stay ahead with our latest insights, guides, and resources on
            process mining, Celonis implementation, and end-to-end business
            transformation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                index === 0
                  ? "bg-primary-500 text-white border border-primary-500 hover:bg-primary-600"
                  : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/50"
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Resource */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="elevated" className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  Featured
                </div>
                <h3 className="heading-md text-corporate-900 mb-4">
                  {resources[0].title}
                </h3>
                <p className="body-md text-corporate-600 mb-6">
                  {resources[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-corporate-500">
                    <span>By {resources[0].author}</span>
                    <span>•</span>
                    <span>{resources[0].date}</span>
                    <span>•</span>
                    <span>{resources[0].readTime}</span>
                  </div>
                </div>
                <Button variant="primary" size="lg">
                  Read Full Article
                </Button>
              </div>
              <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <div
                  className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${resources[0].color} flex items-center justify-center text-4xl`}
                >
                  {resources[0].image}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.slice(1).map((resource, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                variant="dark"
                className="h-full group hover:border-primary-500/50 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm"
              >
                {/* Resource Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        getColorScheme(resource.color).text
                      } px-3 py-1 rounded-full ${
                        getColorScheme(resource.color).iconBg
                      } border ${getColorScheme(resource.color).border}`}
                    >
                      {resource.category}
                    </span>
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        getColorScheme(resource.color).bg
                      } ${
                        getColorScheme(resource.color).border
                      } border-2 flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {resource.image}
                    </div>
                  </div>
                </div>

                {/* Resource Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold text-white mb-4 ${
                      getColorScheme(resource.color).hover
                    } transition-colors duration-300 leading-tight`}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {resource.excerpt}
                  </p>
                </div>

                {/* Resource Footer */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="font-medium">By {resource.author}</span>
                    <span
                      className={`${
                        getColorScheme(resource.color).text
                      } font-semibold`}
                    >
                      {resource.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {resource.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${getColorScheme(resource.color).text} ${
                        getColorScheme(resource.color).hover
                      } font-semibold`}
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="heading-md mb-4">
              Stay Updated with Process Mining Insights
            </h3>
            <p className="body-md text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest Celonis best practices and Fortune 500 case studies
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-corporate-900 placeholder-corporate-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              />
              <Button variant="dark" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
