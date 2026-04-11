import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className="border-b border-gray-100 dark:border-gray-800"
    >
      <button
        className="w-full py-7 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-lg md:text-xl font-medium transition-all duration-300 ${
            isOpen ? "text-[#C9A24D]" : "text-[#0A2540] dark:text-[#F5F2EE]"
          } group-hover:text-[#C9A24D]`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-[#C9A24D] text-2xl ml-4"
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-[90%]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Our standard shipping usually takes 3-5 business days within the Netherlands and 7-10 days for international orders.",
        },
        {
          question: "Can I track my order in real-time?",
          answer:
            "Yes, once your order is dispatched, you will receive a tracking link via email to monitor your package.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for all premium garments. Items must be unworn and in their original packaging.",
        },
        {
          question: "Are returns free?",
          answer:
            "Returns within the Netherlands are free. For international returns, shipping costs are the responsibility of the customer.",
        },
      ],
    },
    {
      category: "Sustainability",
      questions: [
        {
          question: "Are your materials organic?",
          answer:
            "Yes, we prioritize organic fibers and sustainable manufacturing standards like GOTS and Oeko-Tex.",
        },
        {
          question: "Where is the clothing manufactured?",
          answer:
            "All our products are made in ethical environments where workers earn living wages and work in safe conditions.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-[#101828] min-h-screen py-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Help Center
          </motion.span>
          <h1 className="text-[#0A2540] dark:text-white text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Happy to make <br />{" "}
            <span className="text-[#C9A24D]">you happy!</span>
          </h1>
          <div className="h-1 w-20 bg-[#C9A24D] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-xl mx-auto">
            Everything you need to know about the products and billing.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        {faqData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-20"
          >
            <h2 className="text-[#C9A24D] text-sm uppercase tracking-[0.4em] font-extrabold mb-10 flex items-center gap-4">
              <span>{section.category}</span>
              <div className="h-[1px] flex-1 bg-gray-100 dark:bg-gray-800"></div>
            </h2>
            <div className="space-y-2">
              {section.questions.map((item, qIdx) => (
                <FAQItem
                  key={qIdx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Contact Support Box with Glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-10 md:p-16 bg-slate-50 dark:bg-[#0A2540] rounded-[2.5rem] text-center border border-gray-100 dark:border-white/5 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A24D]/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -ml-16 -mb-16"></div>

          <h3 className="text-3xl font-bold text-[#0A2540] dark:text-white mb-6">
            Still have questions?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg max-w-lg mx-auto leading-relaxed">
            Can't find the answer you're looking for? Please chat with our
            friendly team. We're here 24/7.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C9A24D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b58f3e] transition-all shadow-[0_10px_30px_rgba(201,162,77,0.3)]"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
