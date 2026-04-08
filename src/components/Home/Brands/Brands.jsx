// import React from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";

// // সরাসরি অনলাইন থেকে নেওয়া হাই-কোয়ালিটি ট্রান্সপারেন্ট লোগো লিঙ্ক
// const brandLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Puma_Logo.svg/1024px-Puma_Logo.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1024px-Logo_NIKE.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Levis_logo.svg/1024px-Levis_logo.svg.png",
// ];

// const Brands = () => {
//   return (
//     <div className="py-24 bg-[#F8FAFC] dark:bg-[#0A2540] relative overflow-hidden transition-colors duration-500">
//       {/* ব্যাকগ্রাউন্ড ডেকোরেশন (সফট গোল্ডেন গ্লো) */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C9A24D]/10 rounded-full blur-[100px]"></div>
//         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-[100px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] dark:text-[#F5F2EE]">
//               Our Global <span className="text-[#C9A24D]">Partners</span>
//             </h2>
//             <div className="w-16 h-1.5 bg-[#C9A24D] mt-3 rounded-full"></div>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="max-w-md text-gray-500 dark:text-gray-400 text-sm md:text-right leading-relaxed"
//           >
//             Trusted by the world's most renowned fashion labels to deliver
//             unmatched quality in every single garment we manufacture.
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* লোগো স্লাইডার ফেইড ইফেক্ট (দুই পাশে) */}
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-20"></div>
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-20"></div>

//           <Swiper
//             loop={true}
//             slidesPerView={2}
//             breakpoints={{
//               640: { slidesPerView: 3 },
//               1024: { slidesPerView: 5 },
//             }}
//             spaceBetween={30}
//             speed={5000}
//             modules={[Autoplay]}
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//             }}
//             className="brand-swiper !py-12"
//           >
//             {brandLogos.map((logo, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   whileHover={{ y: -8, scale: 1.05 }}
//                   className="bg-[#F5F2EE] backdrop-blur-md p-8 h-36 flex items-center justify-center rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800/50 group transition-all duration-300"
//                 >
//                   <img
//                     src={logo}
//                     alt={`Brand ${index}`}
//                     className="max-h-10 md:max-h-14 w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
//                   />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .brand-swiper .swiper-wrapper {
//           transition-timing-function: linear !important;
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// };

// export default Brands;

import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Aura",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
  {
    name: "Vogue",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
  {
    name: "Luxe",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
  {
    name: "Urban",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
  {
    name: "Moda",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
  {
    name: "Sleek",
    logo: "https://i.pinimg.com/736x/cd/71/b2/cd71b2bbb13bb0764283fa40c35ce67a.jpg",
  },
];

const BrandMarquee = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-[#0A2540] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 dark:text-gray-500 mb-3">
            Curated Selection
          </h2>
          <p className="text-4xl font-light text-[#0A2540] dark:text-[#F5F2EE]">
            Our Partners
          </p>
        </div>

        {/* Desktop View: Infinite Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks (ডার্ক মোডে ব্যাকগ্রাউন্ডের সাথে মিলানো হয়েছে) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] dark:from-[#0A2540] to-transparent z-10" />

          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 px-12 md:px-20 group cursor-pointer" // এখানে গ্যাপ বাড়ানো হয়েছে
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 md:h-20 w-auto object-contain // সাইজ h-10 থেকে বাড়িয়ে h-20 করা হয়েছে
               transition-all duration-500 ease-out
               
               /* ১. সাধারণ অবস্থায় লোগোর স্টাইল */
               opacity-60 grayscale 
               
               /* ২. ডার্ক মোডে লোগোর ব্যাকগ্রাউন্ড বক্সের সমস্যা কমাতে */
               dark:brightness-125 dark:contrast-110
               
               /* ৩. হোভার করলে আসল কালার এবং পূর্ণ উজ্জ্বলতা */
               group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Grid View (Optional: Keep same image styling) */}
        {/* ... (আপনার আগের মোবাইল গ্রিড কোডটি একই লজিক দিয়ে আপডেট করতে পারেন) */}
      </div>
    </section>
  );
};

export default BrandMarquee;
