// import React from "react";
// import { motion } from "framer-motion";

// const brands = [
//   {
//     name: "Aura",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   {
//     name: "Vogue",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   {
//     name: "Luxe",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   {
//     name: "Urban",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   {
//     name: "Moda",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   {
//     name: "Sleek",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
// ];

// const BrandMarquee = () => {
//   const duplicatedBrands = [...brands, ...brands, ...brands];

//   return (
//     <section className="py-20 bg-[#F8FAFC] dark:bg-[#0A2540] transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Heading */}
//         <div className="mb-16 text-center">
//           <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 dark:text-gray-500 mb-3">
//             Curated Selection
//           </h2>
//           <p className="text-4xl font-light text-[#0A2540] dark:text-[#F5F2EE]">
//             Our Partners
//           </p>
//         </div>

//         {/* Desktop View: Infinite Marquee */}
//         <div className="relative w-full overflow-hidden">
//           {/* Gradient Masks (ডার্ক মোডে ব্যাকগ্রাউন্ডের সাথে মিলানো হয়েছে) */}
//           <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-10" />
//           <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-10" />

//           <motion.div
//             className="flex items-center"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 25,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//           >
//             {duplicatedBrands.map((brand, index) => (
//               <motion.div
//                 key={index}
//                 className="flex-shrink-0 px-12 md:px-20 group cursor-pointer" // এখানে গ্যাপ বাড়ানো হয়েছে
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img
//                   src={brand.logo}
//                   alt={brand.name}
//                   className="h-14 md:h-20 w-auto object-contain // সাইজ h-10 থেকে বাড়িয়ে h-20 করা হয়েছে
//                transition-all duration-500 ease-out

//                /* ১. সাধারণ অবস্থায় লোগোর স্টাইল */
//                opacity-60 grayscale

//                /* ২. ডার্ক মোডে লোগোর ব্যাকগ্রাউন্ড বক্সের সমস্যা কমাতে */
//                dark:brightness-125 dark:contrast-110

//                /* ৩. হোভার করলে আসল কালার এবং পূর্ণ উজ্জ্বলতা */
//                group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Mobile Grid View (Optional: Keep same image styling) */}
//         {/* ... (আপনার আগের মোবাইল গ্রিড কোডটি একই লজিক দিয়ে আপডেট করতে পারেন) */}
//       </div>
//     </section>
//   );
// };

// export default BrandMarquee;

// import React from "react";
// import { motion } from "framer-motion";

// const brands = [
//   {
//     name: "Aura",
//     logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
//   },
//   { name: "Vogue", logo: "https://logo.clearbit.com/apple.com" },
//   { name: "Luxe", logo: "https://logo.clearbit.com/nike.com" },
//   { name: "Urban", logo: "https://logo.clearbit.com/adidas.com" },
//   { name: "Moda", logo: "https://logo.clearbit.com/zara.com" },
//   { name: "Sleek", logo: "https://logo.clearbit.com/gucci.com" },
// ];

// const BrandMarquee = () => {
//   // Marquee-র জন্য ট্রিপল ডেটা যাতে কোনো গ্যাপ না থাকে
//   const duplicatedBrands = [...brands, ...brands, ...brands];

//   return (
//     <section className="py-24 bg-[#F8FAFC] dark:bg-[#0A2540] transition-colors duration-700 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* --- Section Heading --- */}
//         <div className="mb-20 text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-4 block"
//           >
//             Trusted by Leaders
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extralight text-slate-800 dark:text-slate-100"
//           >
//             Our Elite{" "}
//             <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 dark:from-white dark:to-slate-400">
//               Partners
//             </span>
//           </motion.h2>
//         </div>

//         {/* --- Marquee Container (Desktop & Tablet) --- */}
//         <div className="relative group">
//           {/* Side Gradients for fading effect */}
//           <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#F8FAFC] dark:from-[#030712] to-transparent z-20 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#F8FAFC] dark:from-[#030712] to-transparent z-20 pointer-events-none" />

//           <motion.div
//             className="flex items-center gap-12"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 35,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//           >
//             {duplicatedBrands.map((brand, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-40 md:w-56 h-28 md:h-36 flex items-center justify-center relative rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30"
//               >
//                 <img
//                   src={brand.logo}
//                   alt={brand.name}
//                   className="h-10 md:h-14 w-auto object-contain grayscale opacity-50 transition-all duration-500 group-hover:pause-animation hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:invert-[.2] dark:hover:invert-0"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* --- Mobile View: Grid (Alternative for small screens) --- */}
//         <div className="mt-16 grid grid-cols-2 gap-4 md:hidden">
//           {brands.map((brand, index) => (
//             <div
//               key={index}
//               className="p-6 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-8 grayscale opacity-70"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandMarquee;
