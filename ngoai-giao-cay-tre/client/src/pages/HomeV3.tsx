import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
   Star,
   ChevronRight,
   Search,
   Menu,
   X,
   Maximize2,
   ZoomIn,
   ZoomOut,
   Play,
   Quote
} from 'lucide-react';
import LegacyBook from '../components/portal/LegacyBook';

import MuseumWall from '../components/portal/MuseumWall';

// @ts-ignore
import codangcovn from "@root/codangcovn.mp4";
// @ts-ignore
import covn from "@root/covn.mp4";
// @ts-ignore
import OfficialMap from "@root/bandovn.png";
// @ts-ignore
import hcmValueImage from "@root/gia tri tu tuong ho chi minh trong tinh hinh moi.jpg";
// @ts-ignore
import BacNPT from "@root/BacNPT.jpg";
// @ts-ignore
import FinalPoster from "@root/assets/poster_dai_hoi_xiii_final_1.png";
// @ts-ignore
import img2021 from "@root/2021.png";
// @ts-ignore
import img2022 from "@root/2022.png";
// @ts-ignore
import img2023 from "@root/2023.png";
// @ts-ignore
import img2024 from "@root/2024.jpg";
// @ts-ignore
import img2025 from "@root/2025.jpg";
// @ts-ignore
import img2026 from "@root/2026.jpg";
// @ts-ignore
import sectionBg from "@root/assets/1-51d37.jpg";
// @ts-ignore
import logoBualiem from "@root/logo-bualiem.jpg";
// @ts-ignore
import trongdong from "@root/trongdong.mp4";
// @ts-ignore
import starFlagBg from "@root/COTUNGBAY.mp4";
// @ts-ignore
import caytreBg from "@root/caytre.jpg";
// @ts-ignore
import thanhlapDang from "@root/THÀNH LẬP ĐẢNG.jpg";
// @ts-ignore
import codang from "@root/codang.mp4";
// @ts-ignore
import td7Bg from "@root/assets/TD7.jpg";

interface SectionProps {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
   id?: string;
}

const Section = ({ children, className = "", style = {}, id = "" }: SectionProps) => (
   <section
      id={id}
      style={style}
      className={`relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden ${className}`}
   >
      {children}
   </section>
);

export default function Home() {
   const [isMuted] = useState(true);
   const [showVideo, setShowVideo] = useState<string | null>(null);
   const [selectedImg, setSelectedImg] = useState<any>(null);
   const [currentPage, setCurrentPage] = useState(0);
   const [activeSection, setActiveSection] = useState('Khởi đầu');

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
         });
      }, { threshold: 0.5 });
      document.querySelectorAll('section').forEach(section => observer.observe(section));
      return () => observer.disconnect();
   }, []);

   return (
      <main className="bg-[#080404] text-white w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative no-scrollbar">

         <style>{`
            .forced-black-ink * { color: #1c0a0a !important; }
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            .page-soft-gradient { background: linear-gradient(to right, #fcf5e8 0%, #f2e6cf 2%, #fcf5e8 8%, #fcf5e8 92%, #f2e6cf 98%, #fcf5e8 100%); }
            .book-3d { transform-style: preserve-3d; transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1); }
            .sheet { position: absolute; top: 0; right: 0; width: 50%; height: 100%; transform-style: preserve-3d; transform-origin: left center; transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1); cursor: pointer; }
            .page { position: absolute; inset: 0; backface-visibility: hidden; box-shadow: inset 0 0 50px rgba(0,0,0,0.05); }
            .page-front { z-index: 2; }
            .page-back { transform: rotateY(180deg); z-index: 1; }
            .gutter-shadow { background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 100%); }
            .stack-edge-right { background: linear-gradient(to right, #ddd, #fff 10%, #eee 20%, #fff 30%, #eee 40%, #fff 50%, #eee 60%, #fff 70%, #eee 80%, #fff 90%, #ddd); }
         `}</style>

         <div className="fixed inset-0 z-0 pointer-events-none">
            <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover">
               <source src={codangcovn} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080404]/60" />
         </div>

         <nav className="fixed top-0 left-0 w-full z-50 px-12 py-10 flex justify-end items-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
               {['Khởi đầu', 'Hành trình', 'Giá trị', 'Phòng chiếu', 'Nghiên cứu', 'Di sản', 'Sự kiện', 'Triển lãm', 'Tour'].map(item => (activeSection === item ? <span key={item} className="text-[#D4AF37] font-black">{item}</span> : <a key={item} href={`#${item}`} className="hover:text-[#D4AF37] transition-all">{item}</a>))}
               <div className="flex gap-6 items-center border-l border-white/10 pl-12">
                  <Search size={18} className="text-white/40 hover:text-white cursor-pointer" />
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5">
                     <Menu size={18} className="text-white" />
                  </div>
               </div>
            </div>
         </nav>

         <Section id="Khởi đầu">
            <div className="relative z-20 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                  <Star className="w-16 h-16 lg:w-24 lg:h-24 text-yellow-500 fill-yellow-500 mx-auto mb-10 drop-shadow-[0_0_50px_rgba(234,179,8,0.6)]" />
                  <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-6xl md:text-[8rem] font-bold tracking-normal text-white uppercase mb-4 leading-none text-center">HỒ CHÍ MINH</h2>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-2xl md:text-5xl italic text-white/80 mb-20 text-center">ĐỐI NGOẠI HIỆN ĐẠI</h3>
                  <button className="px-16 py-7 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-[#D4AF37]/20 transition-all shadow-2xl group">
                     <p className="text-[12px] font-black uppercase tracking-[0.5em] text-white group-hover:text-[#D4AF37]">SỰ VẬN DỤNG TẠI ĐẠI HỘI XIII</p>
                     <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mt-2">VÀ TẦM NHÌN ĐẾN NĂM 2045</p>
                  </button>
               </motion.div>
            </div>
         </Section>

         <Section id="Hành trình" className="overflow-hidden bg-[#050202] group/section">
            {/* 1. Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
               <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-60"
               >
                  <source src={starFlagBg} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#050202] via-transparent to-[#050202] opacity-60" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.1)_0%,transparent_80%)]" />

               {/* Heritage Particles Effect */}
               <div className="absolute inset-0 opacity-20 group-hover/section:opacity-30 transition-opacity duration-[3s]">
                  {[...Array(20)].map((_, i) => (
                     <motion.div
                        key={i}
                        animate={{
                           y: [-20, -120],
                           x: [0, Math.random() * 40 - 20],
                           opacity: [0, 0.5, 0]
                        }}
                        transition={{
                           duration: 5 + Math.random() * 5,
                           repeat: Infinity,
                           delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-red-500/40 rounded-full blur-[1px]"
                        style={{
                           left: `${Math.random() * 100}%`,
                           top: `${Math.random() * 100}%`
                        }}
                     />
                  ))}
               </div>
            </div>

            <div className="relative z-10 w-full h-full flex items-center justify-center pt-20">
               <div className="relative w-full max-w-7xl mx-auto px-12 lg:px-24 h-[70vh] flex items-center">
                  {/* 3. Main Content Layer (Layer 1) */}
                  <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full gap-20">

                     <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div
                           initial={{ opacity: 0, x: -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.2 }}
                           className="relative z-30"
                        >
                           <div className="flex items-center gap-6 mb-12">
                              <div className="w-12 h-[3px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]" />
                              <span className="text-[#D4AF37] font-black text-[12px] uppercase tracking-[1.25em] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">Mốc son 1930</span>
                           </div>

                           <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="relative group/title">
                              <span className="block text-white text-7xl lg:text-[10rem] font-black uppercase leading-[0.75] tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
                                 HÀNH
                              </span>
                              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF5D1] to-[#B8860B] text-6xl lg:text-[9rem] font-black uppercase italic leading-[0.8] tracking-tighter ml-12 lg:ml-20 drop-shadow-[0_10px_30px_rgba(184,134,11,0.5)]">
                                 TRÌNH
                              </span>
                              {/* Decorative Lens Flare on Title */}
                              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent scale-x-0 group-hover/title:scale-x-100 transition-transform duration-1000" />
                           </h3>

                           <div className="mt-16 flex gap-10 items-start pl-6 border-l-2 border-red-900/50 group/quote">
                              <Quote className="text-red-700 w-12 h-12 opacity-30 shrink-0 group-hover/quote:opacity-60 transition-all duration-500" />
                              <div className="space-y-6">
                                 <p className="text-white/40 text-sm lg:text-lg leading-relaxed font-serif italic max-w-xl">
                                    "Bước ngoặt vĩ đại chấm dứt cuộc khủng hoảng đường lối cứu nước, mở ra kỷ nguyên <span className="text-red-600/80 font-bold not-italic">Độc lập</span>, <span className="text-[#D4AF37]/80 font-bold not-italic">Tự do</span> cho dân tộc Việt Nam."
                                 </p>
                                 <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-red-900/40" />
                                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Archival Document</span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     </div>

                     {/* 4. Cinematic Portal (Layer 2) */}
                     <div className="w-full lg:w-1/2 relative perspective-3000">
                        <motion.div
                           initial={{ opacity: 0, rotateY: 30, x: 100 }}
                           whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="relative z-40 group/portal"
                        >
                           {/* Floating Light Ring */}
                           <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />

                           <div className="relative aspect-[16/10] bg-black rounded-sm overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] border border-white/5 border-t-white/20">
                              <img
                                 src={thanhlapDang}
                                 className="w-full h-full object-cover filter brightness-110 saturate-[0.7] group-hover/portal:saturate-100 group-hover/portal:scale-105 transition-all duration-[8s]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-red-900/20" />

                              {/* Glowing Red Line Decoration */}
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-red-600 via-transparent to-transparent opacity-50" />

                              {/* Direct Access Play Portal */}
                              <div
                                 onClick={() => setShowVideo("X_ch15IK6pM")}
                                 className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play"
                              >
                                 <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md group-hover/play:scale-110 group-hover/play:border-red-500/50 transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/play:opacity-20 transition-opacity" />
                                    <Play size={28} className="text-white fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                 </div>
                                 <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="text-[10px] font-black uppercase tracking-[0.6em] text-white mt-8 opacity-0 group-hover/play:opacity-100 transition-opacity"
                                 >
                                    Phim Tư Liệu
                                 </motion.p>
                              </div>
                           </div>

                           {/* 3D Shadows & Reflections */}
                           <div className="absolute -bottom-10 inset-x-10 h-2 bg-red-600/10 blur-xl rounded-full" />
                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </Section>

         <Section id="Giá trị">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080404]/95 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-12 lg:px-24 grid grid-cols-12 gap-16 lg:gap-24 items-center w-full relative z-10 text-left">
               <div className="col-span-12 lg:col-span-5 space-y-12">
                  <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                     <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-5xl lg:text-7xl font-black uppercase tracking-normal text-white leading-[0.85] drop-shadow-2xl">
                        GIÁ TRỊ <br /> TƯ TƯỞNG
                     </h3>
                     <div className="w-40 h-[2px] bg-[#D4AF37] mt-8 mb-12 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
                     <div className="flex items-stretch gap-6 pl-1">
                        <div className="w-[4px] bg-red-700/80 rounded-full shadow-[0_0_15px_rgba(185,28,28,0.6)]"></div>
                        <p className="text-white/40 text-[12px] font-mono tracking-[0.25em] italic leading-relaxed py-1 uppercase">
                           “Gốc vững, thân chắc, <br /> cành uyển chuyển”
                        </p>
                     </div>
                  </motion.div>
                  <div className="space-y-12">
                     <div className="relative w-full max-w-[460px] aspect-video rounded-[45px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                        <img src={hcmValueImage} alt="Heritage Legacy" className="w-full h-full object-cover brightness-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                     </div>
                     <a href="https://online.anyflip.com/tvcfs/zuho/mobile/index.html#google_vignette" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <button className="px-14 py-5 bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-3xl text-left cursor-pointer">
                           HỆ GIÁ TRỊ TƯ TƯỞNG
                        </button>
                     </a>
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-7 flex justify-center items-center relative h-[700px] lg:h-[800px]">
                  <div className="relative w-full h-full flex justify-center items-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.25),transparent_70%)] pointer-events-none opacity-80" />
                     <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 0.95 }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative w-full h-full flex justify-center items-center" style={{ WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)', maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)' }}>
                        <img src={OfficialMap} alt="Viet Nam Sovereign Map" className="w-full h-full object-contain filter contrast-[1.4] brightness-80 mix-blend-screen opacity-85 drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]" />
                     </motion.div>
                  </div>
               </div>
            </div>
         </Section>

         <Section id="Phòng chiếu" className="bg-[#050303] overflow-hidden flex flex-col items-center justify-center py-20 relative">
            {/* Historical Image Background */}
            <div className="absolute inset-0 z-0">
               <img src={hcmValueImage} className="w-full h-full object-cover opacity-80 filter brightness-[0.5] contrast-125" />
               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            </div>
            
            {/* Ambient Background Light from Screen */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="w-full max-w-6xl mx-auto px-12 relative z-10 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white text-4xl lg:text-6xl font-black uppercase mb-4 tracking-tighter opacity-90">PHÒNG CHIẾU PHIM TƯ LIỆU</h3>
                  <p className="text-[#D4AF37] font-serif italic text-lg opacity-60 mb-16 tracking-widest uppercase">Lịch sử hào hùng qua từng thước phim vàng</p>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.95, filter: 'brightness(0)' }} 
                  whileInView={{ opacity: 1, scale: 1, filter: 'brightness(1)' }} 
                  transition={{ duration: 1.5 }}
                  className="relative group/screen"
               >
                  {/* The Screen Frame */}
                  <div className="relative aspect-video rounded-sm overflow-hidden shadow-[0_0_100px_rgba(185,28,28,0.2)] border-4 border-white/5 border-b-white/10 ring-1 ring-white/10">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/QA5Ipxpl3lY?modestbranding=1&rel=0&iv_load_policy=3&color=white"
                        title="Communist Party History"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                     
                     {/* Cinematic Vignette Overlay (over screen when not playing if possible, or just edge) */}
                     <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] opacity-60" />
                  </div>
                  
                  {/* Decorative Stage Elements */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent blur-[2px]" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/5 h-[1px] bg-gradient-to-r from-transparent via-red-900/20 to-transparent blur-[4px]" />
               </motion.div>

            </div>
         </Section>

         <Section id="Nghiên cứu" className="!p-0 bg-[#080404] overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} src={BacNPT} alt="Bac Trong Background" className="w-full h-full object-cover object-center filter brightness-[1.1] contrast-[1.15]" />
               <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#080404] via-[#080404]/40 to-transparent z-30" />
            </div>
            <div className="relative w-full h-full max-w-[1920px] mx-auto z-40 flex flex-col justify-center text-left">
               <div className="px-12 lg:px-44 w-full lg:w-3/5">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                     <h2 className="text-white text-4xl lg:text-5xl font-[1000] uppercase tracking-normal leading-tight mb-4 text-left">TỔNG BÍ THƯ <br /><span className="text-[#D4AF37]">NGUYỄN PHÚ TRỌNG</span></h2>
                     <button onClick={() => setShowVideo("4necLS4YHk4")} className="flex items-center gap-6 p-2 bg-red-800 hover:bg-red-700 border border-white/10 rounded-full text-white transition-all shadow-4xl group pr-10 scale-90"><div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-800 group-hover:scale-110 transition-transform"><ChevronRight size={20} strokeWidth={3} /></div><span className="text-[9px] font-black uppercase tracking-[0.4em]">XEM PHIM TƯ LIỆU</span></button>
                  </motion.div>
               </div>
            </div>
         </Section>

         <Section id="Di sản" className="overflow-hidden relative" style={{ background: '#0a0505' }}>
            <div className="absolute inset-0 z-0">
               <img src={td7Bg} className="w-full h-full object-cover opacity-50 brightness-[0.4] contrast-125" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.1),transparent_70%)]" />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <LegacyBook
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  finalPoster={FinalPoster}
               />
            </div>
         </Section>

         <Section id="Sự kiện" className="overflow-hidden relative bg-[#0a0505]">
            <div className="absolute inset-0 z-0">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 brightness-110 saturate-[1.1]">
                  <source src={codang} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.2)_0%,transparent_70%)]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-12 lg:px-24 relative z-10 py-24">
               <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mb-24 text-center">
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white text-5xl lg:text-7xl font-black uppercase mb-6 tracking-tight">SỰ KIỆN ĐỐI NGOẠI NỔI BẬT</h3>
                  <div className="w-48 h-[2px] bg-red-700 mx-auto"></div>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {[
                     { year: '2021', title: 'Nâng tầm Đối ngoại đa phương', img: img2021 },
                     { year: '2022', title: 'Hợp tác quốc tế trong chuyển đổi số', img: img2022 },
                     { year: '2023', title: 'Ngoại giao Cây tre tỏa sáng', img: img2023 },
                     { year: '2024', title: 'Định hình trật tự thế giới mới', img: img2024 },
                     { year: '2025', title: 'Chủ động thích ứng toàn cầu', img: img2025 },
                     { year: '2026', title: 'Khát vọng Việt Nam hùng cường', img: img2026 }
                  ].map((item, idx) => (
                     <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                        onClick={() => setSelectedImg(item)}
                        className="group relative aspect-[1/1.5] bg-[#1a0808]/60 backdrop-blur-xl border-4 border-red-800 rounded-[2.5rem] overflow-hidden hover:border-red-500 transition-all duration-300 cursor-pointer"
                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                     >
                        <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/40">
                           <img src={item.img} className="w-full h-full object-contain filter blur-[20px] opacity-20 group-hover:blur-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:opacity-0 transition-opacity duration-700">
                           <div className="relative w-36 h-36 border-4 border-red-700 rounded-full p-4 rotate-[-15deg] mix-blend-screen opacity-90 shadow-[0_0_30px_rgba(185,28,28,0.5)]">
                              <img src={logoBualiem} className="w-full h-full object-contain filter contrast-150 brightness-110" style={{ mixBlendMode: 'screen' }} />
                           </div>
                        </div>
                        <div className="absolute top-10 right-10 bg-[#D4AF37] text-black px-8 py-2 rounded-full font-black text-2xl">{item.year}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </Section>

         <Section id="Triển lãm" className="relative !p-0 overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 z-[1] pointer-events-none">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.25] scale-110">
                  <source src={trongdong} type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#080404] via-transparent to-[#080404]" />
            </div>
            <MuseumWall onSelectImg={setSelectedImg} />
         </Section>

         <Section id="Tour" className="relative group overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 brightness-50">
                  <source src={covn} type="video/mp4" />
               </video>
            </div>
            <div className="relative z-10 text-center px-12">
               <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                  <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-10 group/play cursor-pointer" onClick={() => window.location.href = '/virtual-tour'}>
                     <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center text-black group-hover/play:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                     </div>
                  </div>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white text-5xl lg:text-8xl font-black uppercase mb-6 tracking-tighter">VIRTUAL TOUR <span className="text-[#D4AF37]">360°</span></h3>
                  <button onClick={() => window.location.href = '/virtual-tour'} className="px-20 py-8 bg-transparent border border-[#D4AF37]/50 rounded-full text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#D4AF37] hover:text-black transition-all">Bắt đầu hành trình</button>
               </motion.div>
            </div>
         </Section>

         {showVideo && (
            <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-8 lg:p-24 overflow-hidden" onClick={() => setShowVideo(null)}>
               {/* 1. Modal Background Video Layer - Maximized Visibility */}
               <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
                  <video
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-cover"
                  >
                     <source src={starFlagBg} type="video/mp4" />
                  </video>
               </div>

               {/* 2. Main Content Layer */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="relative z-10 w-full max-w-6xl aspect-video rounded-sm overflow-hidden bg-black shadow-[0_0_100px_rgba(185,28,28,0.4)] border border-white/10"
                  onClick={(e) => e.stopPropagation()}
               >
                  {showVideo.includes('.') || showVideo.startsWith('/') ? (
                     <video
                        src={showVideo}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                     >
                        Trình duyệt của bạn không hỗ trợ phát video này.
                     </video>
                  ) : (
                     <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${showVideo}?autoplay=1`} allowFullScreen />
                  )}

                  {/* Close Control for Modal */}
                  <button
                     onClick={() => setShowVideo(null)}
                     className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all border border-white/10 backdrop-blur-md"
                  >
                     <X size={24} />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-2 bg-black/40 border border-white/5 rounded-full backdrop-blur-md">
                     <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                     <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Archival Cinematic Environment</span>
                  </div>
               </motion.div>
            </div>
         )}

         {selectedImg && (
            <div className="fixed inset-0 z-[200000] flex items-center justify-center p-6 lg:p-24 overflow-hidden" onClick={() => setSelectedImg(null)}>
               <div className="absolute inset-0 z-0">
                  <img src={caytreBg} className="w-full h-full object-cover opacity-90" alt="Bamboo Background" />
                  <div className="absolute inset-0 bg-black/30" />
               </div>
               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative h-full w-full flex items-center justify-center z-10" onClick={(e) => e.stopPropagation()}>
                  <div className="relative h-full bg-transparent overflow-visible">
                     <img src={selectedImg.img} className="h-full w-auto object-contain shadow-[0_40px_100px_rgba(0,0,0,0.6)]" alt="Enlarged" />
                     <button onClick={() => setSelectedImg(null)} className="absolute -top-12 -right-12 w-14 h-14 bg-white/10 hover:bg-black hover:scale-110 rounded-full flex items-center justify-center text-white transition-all border border-white/20 backdrop-blur-xl"><X size={28} /></button>
                  </div>
               </motion.div>
            </div>
         )}
      </main>
   );
}