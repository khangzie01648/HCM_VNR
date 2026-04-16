import { useState } from 'react';
import { motion } from 'framer-motion';
import {
   Star,
   ChevronRight,
   Search,
   Menu
} from 'lucide-react';

// @ts-ignore
import covn from "@root/covn.mp4";
// @ts-ignore
import OfficialMap from "@root/bandovn.png";
// @ts-ignore
import hcmValueImage from "@root/gia tri tu tuong ho chi minh trong tinh hinh moi.jpg";
// @ts-ignore
import BacNPT from "@root/BacNPT.jpg";
// @ts-ignore
import PosterDH13 from "@root/assets/poster_dai_hoi_13_chuan_muc_web.png";

interface SectionProps {
   children: React.ReactNode;
   className?: string;
   id?: string;
}

const Section = ({ children, className = "", id = "" }: SectionProps) => (
   <section
      id={id}
      className={`relative w-full min-h-screen snap-start flex items-center justify-center ${className}`}
   >
      {children}
   </section>
);

export default function Home() {
   const [isMuted] = useState(true);

   return (
      <main className="bg-[#080404] text-white w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative no-scrollbar">

         {/* BACKGROUND LÁ CỜ PERSISTENT */}
         <div className="fixed inset-0 z-0 pointer-events-none">
            <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover brightness-[0.5] contrast-[1.2]">
               <source src={covn} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#080404]/80 to-[#080404]" />
         </div>

         {/* NAVBAR */}
         <nav className="fixed top-0 left-0 w-full z-50 px-12 py-10 flex justify-end items-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
               {['Khởi đầu', 'Giá trị', 'Nghiên cứu', 'Di sản'].map(item => (
                  <a key={item} href={`#${item}`} className="hover:text-[#D4AF37] transition-all">{item}</a>
               ))}
               <div className="flex gap-6 items-center border-l border-white/10 pl-12">
                  <Search size={18} className="text-white/40 hover:text-white cursor-pointer" />
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5">
                     <Menu size={18} className="text-white" />
                  </div>
               </div>
            </div>
         </nav>

         {/* SECTION 1: HERO */}
         <Section id="Khởi đầu">
            <div className="relative z-20 text-center">
               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                  <Star className="w-16 h-16 lg:w-24 lg:h-24 text-yellow-500 fill-yellow-500 mx-auto mb-10 drop-shadow-[0_0_50px_rgba(234,179,8,0.6)]" />
                  <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-6xl md:text-[8rem] font-bold tracking-normal text-white uppercase mb-4 leading-none">HỒ CHÍ MINH</h2>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-2xl md:text-5xl italic text-white/80 mb-20">ĐỐI NGOẠI HIỆN ĐẠI</h3>
                  <button className="px-16 py-7 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-[#D4AF37]/20 transition-all shadow-2xl group">
                     <p className="text-[12px] font-black uppercase tracking-[0.5em] text-white group-hover:text-[#D4AF37]">SỰ VẬN DỤNG TẠI ĐẠI HỘI XIII</p>
                     <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mt-2">VÀ TẦM NHÌN ĐẾN NĂM 2045</p>
                  </button>
               </motion.div>
            </div>
         </Section>

         {/* SECTION 2: GIÁ TRỊ TƯ TƯỞNG */}
         <Section id="Giá trị">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080404]/95 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-12 lg:px-24 grid grid-cols-12 gap-16 lg:gap-24 items-center w-full relative z-10">
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
                        <button className="px-14 py-5 bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-3xl flex items-center gap-5 group">
                           HỆ GIÁ TRỊ TƯ TƯỞNG <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                     </a>
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-7 flex justify-center items-center relative h-[700px] lg:h-[800px]">
                  <div className="relative w-full h-full flex justify-center items-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.2),transparent_70%)] pointer-events-none" />
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.7, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full h-full flex justify-center items-center"
                        style={{
                           WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                           maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                        }}
                     >
                        <img
                           src={OfficialMap}
                           alt="Viet Nam Sovereign Map"
                           className="w-full h-full object-contain filter contrast-150 brightness-75 mix-blend-screen"
                        />
                     </motion.div>
                     <div className="absolute inset-0 bg-[#0a0505]/30 pointer-events-none" />
                  </div>
               </div>
            </div>
         </Section>

         {/* SECTION 3: NGHIÊN CỨU */}
         <Section id="Nghiên cứu" className="!p-0 bg-[#080404] overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5 }}
                  src={BacNPT}
                  alt="Bac Trong Background"
                  className="w-full h-full object-cover object-center filter brightness-[1.1] contrast-[1.15]"
               />
               <div className="absolute inset-0 z-10 opacity-[0.4] mix-blend-screen pointer-events-none">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover filter blur-[1px] scale-110">
                     <source src={covn} type="video/mp4" />
                  </video>
               </div>
               <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay z-20 pointer-events-none" />
               <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#080404] via-[#080404]/40 to-transparent z-30" />
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080404]/80 to-transparent z-30" />
            </div>

            <div className="relative w-full h-full max-w-[1920px] mx-auto z-40 flex flex-col justify-start pt-16 lg:pt-20">
               <div className="px-12 lg:px-44 w-full lg:w-3/5">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[2px] bg-red-700" />
                        <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em]">Tiêu điểm đối ngoại</span>
                     </div>
                     <h2 className="text-white text-4xl lg:text-5xl font-[1000] uppercase tracking-normal leading-tight mb-4 drop-shadow-2xl">
                        TỔNG BÍ THƯ <br />
                        <span className="text-[#D4AF37]">NGUYỄN PHÚ TRỌNG</span>
                     </h2>
                     <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-12">
                        Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam
                     </p>
                     <div className="max-w-xl space-y-10">
                        <div className="relative border-l-2 border-red-700/50 pl-6">
                           <p style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white/90 italic text-xl lg:text-2xl leading-[1.6]">
                              "Quyết tâm xây dựng and phát triển nền đối ngoại, ngoại giao Việt Nam hiện đại, mang đậm bản sắc 'Cây tre Việt Nam' — Gốc vững, thân chắc, cành uyển chuyển."
                           </p>
                        </div>
                        <div className="flex items-center gap-10">
                           <button className="flex items-center gap-6 p-2 bg-red-800 hover:bg-red-700 border border-white/10 rounded-full text-white transition-all shadow-4xl group pr-10 scale-90">
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-800 group-hover:scale-110 transition-transform">
                                 <ChevronRight size={20} strokeWidth={3} />
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-[0.4em]">XEM TOÀN VĂN</span>
                           </button>
                           <div className="h-[1px] flex-1 bg-white/10" />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </Section>

         {/* SECTION 4: DI SẢN - NOTEBOOK TOÀN VĂN (ABSOLUTE 100% CONTENT & BLACK TEXT) */}
         <Section id="Di sản" className="bg-[#080808] py-0 overflow-hidden min-h-screen">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.05),transparent_70%)] pointer-events-none" />
            <div className="max-screen-2xl mx-auto px-10 xl:px-24 grid grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 w-full min-h-screen">
               
               <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center pt-10 lg:pt-0">
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9, x: -30 }}
                     whileInView={{ opacity: 1, scale: 1, x: 0 }}
                     transition={{ duration: 1.2 }}
                     className="relative w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-white/10 group"
                  >
                     <img src={PosterDH13} alt="Poster Dai Hoi 13" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                     <div className="absolute bottom-10 left-10 space-y-3">
                        <div className="h-[3px] bg-red-700 w-16 mb-4 shadow-[0_0_15px_rgba(185,28,28,0.8)]" />
                        <h5 className="text-white text-3xl font-black uppercase tracking-[0.2em] leading-none mb-1">ĐẠI HỘI XIII</h5>
                        <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.6em] opacity-80">Kim chỉ nam đối ngoại Việt Nam</p>
                     </div>
                  </motion.div>
               </div>

               <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center py-10 lg:py-0 h-full">
                  <motion.div 
                     whileHover={{ rotateY: -4, scale: 1.01 }}
                     className="relative w-full max-w-[700px] aspect-[1/1.3] lg:aspect-[1/1.2] transform-gpu flex flex-col pt-4 pb-4"
                  >
                     <div className="absolute left-[-1.5rem] top-12 bottom-12 w-12 flex flex-col justify-between z-50 pointer-events-none">
                        {Array.from({ length: 18 }).map((_, i) => (
                           <div key={i} className="relative w-full h-3">
                              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#080808] rounded-full z-[55] shadow-inner" />
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-3 bg-gradient-to-r from-gray-600 via-gray-200 to-gray-500 rounded-full border-[0.5px] border-black/30 z-[60] shadow-xl" />
                           </div>
                        ))}
                     </div>

                     <div 
                        className="relative w-full h-full flex flex-col bg-[#fdfdfd] shadow-[30px_60px_120px_rgba(0,0,0,0.8)] overflow-hidden"
                        style={{
                           borderRadius: '4px 80px 80px 4px',
                           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.04'/%3E%3C/svg%3E")`,
                           borderLeft: '12px solid #efefef'
                        }}
                     >
                        <div className="h-full flex flex-col relative z-20 p-8 lg:p-16">
                           <div className="flex justify-between items-center opacity-40 border-b-2 border-gray-100 pb-4 mb-10">
                              <span className="text-[9px] font-black tracking-[0.5em] uppercase text-black">Học viện Chính trị QG Hồ Chí Minh</span>
                              <span className="text-[9px] font-bold text-red-900 italic tracking-[0.2em]">LƯU TRỮ TOÀN VĂN</span>
                           </div>

                           <div 
                              style={{ fontFamily: "'Times New Roman', Times, serif" }}
                              className="flex-1 overflow-y-auto custom-scrollbar pr-10 space-y-10 scroll-smooth mix-blend-multiply text-black text-left tracking-normal leading-[1.8] selection:bg-red-900 selection:text-white pb-32"
                           >
                              <div className="space-y-4">
                                 <h1 className="text-3xl lg:text-[2.6rem] font-bold text-black tracking-normal leading-[1.25] uppercase italic drop-shadow-sm">
                                    Tư tưởng Hồ Chí Minh về đối ngoại <br /> 
                                    <span className="text-red-950">& sự vận dụng trong Văn kiện <br /> Đại hội XIII của Đảng</span>
                                 </h1>
                                 <div className="flex items-center gap-6">
                                    <p className="text-[11px] font-bold text-black opacity-60 tracking-widest uppercase">Ngày đăng: 03/08/2022</p>
                                    <div className="h-[1px] flex-1 bg-black/10" />
                                 </div>
                              </div>

                              <div className="bg-gray-100/50 p-8 border-l-[6px] border-red-900 rounded-r-2xl shadow-inner">
                                 <p className="text-[16px] leading-relaxed text-black italic">
                                    (LLCT) - Tư tưởng Hồ Chí Minh về đối ngoại cho đến nay vẫn còn nguyên giá trị lý luận and thực tiễn sâu sắc. Tại Đại hội XIII of Đảng, đối ngoại of Đảng có những điều chỉnh, bổ sung, phát triển, vừa phù hợp with xu thế quốc tế, vừa phù hợp with chuyển biến of thực tiễn đất nước sau 35 năm đổi mới. Bài viết làm rõ tư tưởng Hồ Chí Minh về đối ngoại and sự vận dụng of Đảng trong Văn kiện Đại hội XIII.
                                 </p>
                              </div>

                              <div className="space-y-8 text-[16px] leading-relaxed text-black">
                                 <p className="indent-12 text-black first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-red-900 first-letter:mt-2">
                                    Chủ tịch Hồ Chí Minh tại sân bay New Delhi trong chuyến thăm hữu nghị Ấn Độ, ngày 4-2-1958 - Ảnh tư liệu: TTXVN. Hồ Chí Minh là nhà ngoại giao kiệt xuất, người sáng lập nền ngoại giao hiện đại Việt Nam. Người luôn quan tâm chỉ đạo công tác đối ngoại nhằm xây dựng khối đoàn kết quốc tế, tranh thủ sự ủng hộ of các nước and nhân dân yêu chuộng hòa bình trên thế giới with sự nghiệp cách mạng of Đảng and nhân dân Việt Nam. Tại Đại hội XIII of Đảng, đường lối đối ngoại of Đảng đã kế thừa quan điểm các Đại hội trước and có những điều chỉnh, bổ sung phù hợp; đặc biệt là sự vận dụng đúng đắn, sáng tạo tư tưởng Hồ Chí Minh về đối ngoại trong điều kiện mới.
                                 </p>
                              </div>

                              <div className="space-y-10">
                                 <h2 className="text-[24px] font-black uppercase text-red-900 border-b-2 border-red-900/10 pb-3">1. Tư tưởng Hồ Chí Minh về đối ngoại</h2>
                                 <p className="text-[16px] leading-relaxed text-black">Thực tiễn hoạt động cách mạng cùng nền tảng tri thức and vốn văn hóa đã kết tinh ở Hồ Chí Minh hệ thống tư tưởng toàn diện, sâu sắc. Trong đó, tư tưởng of Người về đối ngoại chứa đựng nhiều nội dung không chỉ bền vững qua thời gian, mà còn có những tư duy đi trước thời đại; thể hiện ở những điểm sau:</p>
                                 
                                 <div className="space-y-12 pl-6 border-l-2 border-gray-100">
                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Một là, phải độc lập, tự chủ trong đối ngoại and hợp tác quốc tế</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Độc lập, tự chủ là tư duy nổi bật, nhất quán trong toàn bộ hoạt động chính trị of Hồ Chí Minh, nguyên lý chủ yếu of tư tưởng đó là “muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã”(1). Giữ vững độc lập, tự chủ vừa là đường lối, vừa là nguyên tắc bất biến để bảo vệ tốt nhất lợi ích quốc gia - dân tộc. Đường lối and nguyên tắc đó cũng được kết tinh trong tư tưởng and thực tiễn hoạt động đối ngoại of Hồ Chí Minh.</p>
                                       <p className="text-[16px] text-black leading-relaxed">Theo Người, độc lập là không phụ thuộc, không bắt chước, theo đuôi, giáo điều; tự chủ là chủ động suy nghĩ and làm chủ suy nghĩ of mình, tự chịu trách nhiệm trước nhân dân, trước đất nước, biết làm chủ bản thân and công việc. Trong quan hệ quốc tế, Người khẳng định: “Độc lập nghĩa là chúng tôi điều khiển lấy mọi công việc of chúng tôi, không có sự can thiệp ở ngoài vào”(2); and nhấn mạnh: “Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng. Nhân dân Việt Nam quyết không thèm thứ thống nhất and độc lập giả hiệu ấy”(3).</p>
                                    </section>

                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Hai là, kết hợp sức mạnh dân tộc with sức mạnh thời đại</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Đây là một nội dung quan trọng trong tư tưởng Hồ Chí Minh, là quy luật, bài học kinh nghiệm lớn of cách mạng Việt Nam. Trong mối quan hệ giữa sức mạnh dân tộc and sức mạnh thời đại, Hồ Chí Minh coi nguồn lực bên trong giữ vai trò quyết định, nguồn lực bên ngoài là quan trọng. Người nhấn mạnh: “Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập”(5).</p>
                                       <p className="text-[16px] text-black leading-relaxed italic text-red-950 bg-red-50/50 p-6 rounded-lg border-r-4 border-red-900">“Thực lực mạnh, ngoại giao sẽ thắng lợi. Thực lực là cái chiêng mà ngoại giao là cái tiếng. Chiêng có to, tiếng mới lớn”(6).</p>
                                    </section>

                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Ba là, luôn yêu chuộng hòa bình, chống chiến tranh xâm lược</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Tư tưởng yêu chuộng hòa bình, chống chiến tranh xâm lược được thể hiện từ rất sớm and luôn nhất quán. Ngay sau Cách mạng Tháng Tám năm 1945, Hồ Chí Minh viết Thư gửi những người Pháp ở Đông Dương (tháng 10-1945), thể hiện sự kính trọng đối với nhân dân Pháp, nêu lên những điểm tương đồng giữa hai dân tộc Việt - Pháp là khát vọng độc lập, tự do.</p>
                                    </section>

                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Bốn là, luôn có tinh thần hòa hiếu, “thêm bạn, bớt thù”</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Trong thực tiễn lãnh đạo cách mạng, Hồ Chí Minh luôn phân biệt rõ giữa bạn and thù, tìm cách giảm bớt kẻ thù, tránh đối phó with nhiều kẻ thù cùng một lúc. Người khẳng định: “Muốn làm cách mạng thắng lợi thì phải phân biệt rõ ai là bạn ai là thù, phải thực hiện thêm bầu bạn, bớt kẻ thù”(9).</p>
                                    </section>

                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Năm là, xây dựng quan hệ hữu nghị, hợp tác trên cơ sở tôn trọng độc lập</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Việt Nam “làm bạn with tất cả mọi nước dân chủ and không gây thù oán with một ai”(12). “Chính sách ngoại giao of Chính phủ thì chỉ có một điều tức là thân thiện with tất cả các nước dân chủ trên thế giới để giữ gìn hòa bình”(13).</p>
                                    </section>

                                    <section className="space-y-4">
                                       <h3 className="text-[18px] font-bold text-black underline decoration-red-900/20 underline-offset-8">Sáu là, nhất quán phương châm “Dĩ bất biến ứng vạn biến”</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Cái “bất biến” là lợi ích of quốc gia, dân tộc, độc lập dân tộc, chủ quyền... là cốt lõi; cái “vạn biến” là cách ứng phó tài tình, khéo léo, linh hoạt, kết hợp hài hòa giữa mềm dẻo and kiên quyết.</p>
                                    </section>
                                 </div>
                              </div>

                              <div className="space-y-10">
                                 <h2 className="text-[24px] font-black uppercase text-red-900 border-b-2 border-red-900/10 pb-3">2. Sự vận dụng trong Văn kiện Đại hội XIII</h2>
                                 <p className="text-[16px] leading-relaxed text-black">Đường lối đối ngoại thời kỳ đổi mới được Đảng khởi xướng từ năm 1986 and luôn được bổ sung, hoàn chỉnh qua các kỳ Đại hội Đảng. Điều này đưa tới những thành tựu of đối ngoại Việt Nam. Vận dụng sáng tạo tư tưởng Hồ Chí Minh về đối ngoại, Đại hội XIII of Đảng đã đề ra đường lối đối ngoại chủ động and tích cực hội nhập quốc tế toàn diện, sâu rộng with những điểm mới:</p>
                                 
                                 <div className="space-y-12 pl-6 border-l-2 border-gray-100">
                                    <div className="space-y-4">
                                       <h3 className="text-[17px] font-bold text-black italic">Một là, thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ</h3>
                                       <p className="text-[16px] text-black leading-relaxed">“Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác and phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại”(17). Đây là nguyên tắc “bất biến”, là đường lối đối ngoại nhất quán of Đảng. T Toàn cầu hóa, hội nhập quốc tế sâu rộng đã and đang đặt ra những thách thức lớn, không chỉ riêng with nước ta về tính độc lập, tự chủ trong quan hệ quốc tế. Nhưng nhờ kiên trì đường lối đối ngoại độc lập, tự chủ and có nhiều chính sách phù hợp, khôn khéo theo tinh thần “vạn biến”, Đảng and Nhà nước ta đã bảo vệ được lợi ích quốc gia, dân tộc trong những thời điểm hết sức khó khăn, phức tạp.</p>
                                    </div>
                                    <div className="space-y-4">
                                       <h3 className="text-[17px] font-bold text-black italic">Hai là, kết hợp chặt chẽ sức mạnh dân tộc with sức mạnh thời đại</h3>
                                       <p className="text-[16px] text-black leading-relaxed">“Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế and uy tín quốc tế như ngày nay”(18). Song, việc kết hợp chặt chẽ giữa sức mạnh dân tộc with sức mạnh thời đại vẫn là yêu cầu quan trọng. Tinh thần đó tiếp tục được thể hiện rõ trong Văn kiện Đại hội XIII of Đảng: “Kết hợp sức mạnh dân tộc with sức mạnh thời đại, chủ động and tích cực hội nhập quốc tế toàn diện, sâu rộng”(19).</p>
                                    </div>
                                    <div className="space-y-4">
                                       <h3 className="text-[17px] font-bold text-black italic">Ba là, phát huy vai trò tiên phong of đối ngoại</h3>
                                       <p className="text-[16px] text-black leading-relaxed">“Tiếp tục phát huy vai trò tiên phong of đối ngoại trong việc tạo lập and giữ vững môi trường hòa bình, ổn định, huy động các nguồn lực bên ngoài để phát triển đất nước”(21). Đây là lần đầu tiên Văn kiện Đại hội Đảng xác định cụ thể and sâu sắc vị trí, vai trò of công tác đối ngoại and hội nhập quốc tế.</p>
                                    </div>
                                    <div className="space-y-4">
                                       <h3 className="text-[17px] font-bold text-black italic">Bốn là, bảo đảm cao nhất lợi ích quốc gia - dân tộc</h3>
                                       <p className="text-[16px] text-black leading-relaxed">Trong Văn kiện Đại hội XIII of Đảng, “mục tiêu tối thượng” trong công tác đối ngoại of Đảng là: “Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở các nguyên tắc cơ bản of Hiến chương Liên hợp quốc and luật pháp quốc tế, bình đẳng, hợp tác, cùng có lợi”(22). Trong đó, lợi ích dân tộc là lợi ích dân tộc chân chính, không phải là lợi ích dân tộc vị kỷ, hẹp hòi.</p>
                                    </div>
                                    <div className="space-y-4 pb-16">
                                       <h3 className="text-[17px] font-bold text-black italic">Năm là, đường lối ngoại giao rộng mở, đa phương hóa, đa dạng hóa</h3>
                                       <p className="text-[16px] text-black leading-relaxed">“Đẩy mạnh đối ngoại song phương and nâng tầm đối ngoại đa phương. Chủ động tham gia and phát huy vai trò of Việt Nam tại các cơ chế đa phương...”(23). Ba Qua 35 năm đổi mới, Việt Nam đã đạt được nhiều thành tựu quan trọng trong lĩnh vực đối ngoại, đặc biệt là thiết lập các cơ chế hợp tác song phương and đa phương để kết nối with thế giới.</p>
                                    </div>
                                 </div>
                              </div>

                              <div className="pt-20 border-t-2 border-gray-100 flex flex-col gap-8">
                                 <p className="text-[12px] font-black uppercase text-black opacity-40 tracking-[0.4em]">Danh mục Chú thích & Tham khảo:</p>
                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                                    {[
                                       "(1) Hồ Chí Minh: Toàn tập, t.2, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, tr.320.",
                                       "(2), (3), (12), (13) Hồ Chí Minh: Toàn tập, Sđd, t.5, tr.162, 602, 256, 39.",
                                       "(4) Hồ Chí Minh: Toàn tập, Sđd, t.12, tr.732.",
                                       "(5) Hồ Chí Minh: Toàn tập, Sđd, t.7, tr.445.",
                                       "(6), (8) Hồ Chí Minh: Toàn tập, Sđd, t.4, tr.147, 76-77.",
                                       "(7) Hồ Chí Minh: Toàn tập, Sđd, t.15, tr.675.",
                                       "(9) Hồ Chí Minh: Toàn tập, Sđd, t.13, tr.453.",
                                       "(10), (11) Hồ Chí Minh: Toàn tập, Sđd, t.14, tr.148, 304.",
                                       "(14) Hồ Chí Minh: Toàn tập, Sđd, t.6, tr.145.",
                                       "(15) Hồ Chí Minh: Biên niên tiểu sử, Hà Nội, 1993, tr.216.",
                                       "(16) Hồ Chí Minh: Toàn tập, Sđd, t.8, tr.555.",
                                       "(17) ĐCSVN: Văn kiện Đại hội XIII, t.I, Nxb Chính trị quốc gia Sự thật, 2021, tr.161."
                                    ].map((ref, idx) => (
                                       <p key={idx} className="text-[11px] leading-tight text-black italic">{ref}</p>
                                    ))}
                                 </div>
                                 <div className="mt-12 pt-10 border-t border-gray-50 text-center space-y-3">
                                    <div className="inline-block p-6 border border-red-900/10 rounded-2xl bg-gray-50/50">
                                       <p className="text-[15px] font-[1000] text-red-900 tracking-wider uppercase mb-1">PGS, TS NGUYỄN XUÂN TRUNG</p>
                                       <p className="text-[15px] font-[1000] text-red-900 tracking-wider uppercase mb-2">THS NGUYỄN THỊ HUYỀN TRANG</p>
                                       <p className="text-[11px] font-bold text-black opacity-60 uppercase tracking-[0.5em]">Học viện Chính trị khu vực I</p>
                                    </div>
                                    <p className="text-[10px] font-bold text-black opacity-30 uppercase tracking-widest pt-4">Nguồn nguyên văn: Tạp chí Lý luận Chính trị (lyluanchinhtri.vn)</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <motion.div 
                           animate={{ height: ['80px', '110px', '80px'] }}
                           transition={{ duration: 4, repeat: Infinity }}
                           className="absolute bottom-0 right-0 w-32 h-32 z-40"
                           style={{
                              background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%, #fff 60%, #fff 100%)`,
                              boxShadow: `-20px -20px 50px rgba(0,0,0,0.15)`,
                              borderRadius: '120px 0 0 0',
                           }}
                        />
                     </div>
                  </motion.div>
               </div>

            </div>
         </Section>

         {/* HẠT BỤI COMPACT */}
         <div className="absolute inset-0 pointer-events-none z-20">
            {Array.from({ length: 15 }).map((_, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: [0, 0.3, 0], y: [0, -200] }}
                  transition={{ duration: 15, repeat: Infinity, delay: Math.random() * 5 }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
               />
            ))}
         </div>

         <footer className="py-20 text-center opacity-20 border-t border-white/5 relative z-10">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[1.2em]">NGOẠI GIAO VIỆT NAM — THƯ VIỆN LƯU TRỮ SỐ</p>
         </footer>
      </main>
   );
}