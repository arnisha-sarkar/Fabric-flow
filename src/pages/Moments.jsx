import React from "react";
import { motion } from "framer-motion";

const Moments = () => {
  // অ্যানিমেশন ভেরিয়েন্টসমূহ
  const containerFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#101828] transition-colors duration-500">
      {/* --- Hero Section with Parallax Effect --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[#0A2540]"
        >
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
            alt="Garments Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerFade}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.h1
            variants={itemSlideUp}
            className="text-5xl md:text-7xl font-bold text-[#C9A24D] mb-6 tracking-tighter"
          >
            The Moment of <br /> <span className="text-white">Elegance</span>
          </motion.h1>
          <motion.p
            variants={itemSlideUp}
            className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Experience the fusion of tradition and luxury. Our exclusive winter
            collection is coming soon to redefine your style.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator Icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* --- Waitlist Section with Glassmorphism --- */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-slate-50 dark:bg-[#0A2540]/50 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-white/5 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#C9A24D] mb-6"
          >
            Join the Exclusive Waitlist
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg md:px-10">
            Be the first to know when we launch. Join 5000+ fashion enthusiasts
            and get early bird discounts and first access to our premium drops.
          </p>

          <form className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email address"
              className="w-full md:flex-1 px-8 py-5 rounded-full bg-white dark:bg-[#101828] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white shadow-inner"
              required
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(201, 162, 77, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-5 bg-[#C9A24D] text-white font-bold rounded-full transition-colors hover:bg-[#b08d3d]"
            >
              Join Waitlist
            </motion.button>
          </form>
          <p className="mt-6 text-xs text-gray-400">
            *We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </section>

      {/* --- Gallery/Moments Preview (Uncommented and Animated) --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-12 bg-[#C9A24D]"></div>
          <h3 className="text-2xl font-bold text-[#0A2540] dark:text-white uppercase tracking-widest">
            Sneak Peek
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={`https://images.unsplash.com/photo-1445205170230-053b83e26371?q=80&w=2071&auto=format&fit=crop`}
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                alt="Moment Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div>
                  <span className="text-[#C9A24D] text-sm font-bold tracking-widest uppercase">
                    Collection 2026
                  </span>
                  <p className="text-white text-xl font-medium mt-1">
                    Premium Fabric & Stitching
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Moments;
