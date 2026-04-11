import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Brand = () => {
  // কমন অ্যানিমেশন ভেরিয়েন্ট
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white dark:bg-[#101828] text-white min-h-screen font-sans transition-colors duration-500">
      {/* Section 1: The Brand */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="md:w-[500px] h-[600px] overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src={assets.brand_cloth}
            alt="Premium Hoodie"
            className="w-full h-full object-cover hover:scale-110 transition duration-700 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-[#0A2540] dark:text-[#F5F2EE] text-4xl font-bold uppercase tracking-widest relative">
            The Brand
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              className="absolute -bottom-2 left-0 h-1 bg-[#C9A24D]"
            />
          </h2>
          <p className="text-[#0A2540] dark:text-gray-300 leading-relaxed text-lg italic">
            "We believe in fashion with a soul."
          </p>
          <p className="text-[#0A2540] dark:text-gray-400 leading-relaxed text-lg">
            Based on the principles of sustainability and superior quality, we
            create premium clothing for the conscious individual. Our unique
            design language blends ethical production with high-end aesthetics.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Sustainable Production */}
      <section className="py-24 bg-gray-50 dark:bg-[#0d1421] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="w-full md:w-1/2 flex flex-col justify-center md:sticky md:top-32"
          >
            <h2 className="text-[#0A2540] dark:text-[#F5F2EE] text-3xl font-bold uppercase tracking-widest mb-6">
              Sustainable <br /> Production
            </h2>
            <p className="text-[#0A2540] dark:text-gray-400 leading-relaxed text-lg">
              We strive to make our products as sustainable as possible. We
              choose to use organic fibers wherever possible and ensure all
              clothing is made in an ethical manner.
            </p>
          </motion.div>

          <div className="w-full md:w-1/2 space-y-6">
            {[
              {
                title: "Fair Wear Foundation",
                desc: "Fair Wear seeks to improve labour conditions in the garment industry.",
              },
              {
                title: "Oeko Tex",
                desc: "OEKO-TEX® STANDARD 100 is one of the world's best-known labels for textiles.",
              },
              {
                title: "Global Organic Textile Standard",
                desc: "The worldwide leading textile processing standard for organic fibres.",
                link: "global-standard.org",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#0A2540] border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#C9A24D] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-[#0A2540] rounded-lg flex items-center justify-center border border-[#C9A24D]">
                    <span className="text-[#C9A24D] font-bold">★</span>
                  </div>
                  {card.link && (
                    <a
                      href={`https://${card.link}`}
                      target="_blank"
                      className="text-gray-500 text-sm hover:text-[#C9A24D] transition flex items-center gap-1"
                    >
                      {card.link} <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#C9A24D] text-[#0A2540] dark:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Ecological Impact */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          {[
            { label: "FSC", icon: "🌲" },
            { label: "Eco-Friendly", icon: "✨" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ rotate: 2 }}
              className="bg-gray-50 dark:bg-[#0A2540] h-64 rounded-3xl flex flex-col items-center justify-center border border-gray-100 dark:border-gray-800 p-6 text-center shadow-lg"
            >
              <div className="mb-4 text-[#C9A24D] text-5xl">{item.icon}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#0A2540] dark:text-gray-300">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="md:w-1/2"
        >
          <h2 className="text-[#0A2540] dark:text-[#F5F2EE] text-3xl font-bold uppercase tracking-widest mb-6">
            Ecological Impact
          </h2>
          <p className="text-[#0A2540] dark:text-gray-400 leading-relaxed text-lg">
            In providing sustainable clothing, packaging and transport play a
            large role. To minimize our ecological impact, we use exclusively
            paper-based packaging materials sourced from sustainably managed
            forests.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Brand;
