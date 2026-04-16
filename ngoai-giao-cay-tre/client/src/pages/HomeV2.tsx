import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
   BookOpen, 
   Award, 
   Globe, 
   Shield, 
   Users, 
   Navigation2, 
   ArrowRight, 
   ChevronRight,
   Volume2,
   VolumeX,
   Star,
   Flag,
   Quote,
   Play
} from 'lucide-react';

const Section = ({ children, className = "", id = "" }) => (
   <section id={id} className={`h-screen w-full snap-start relative overflow-hidden flex items-center justify-center ${className}`}>
      {children}
   </section>
);

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <motion.nav 
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}
      >
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                  <Flag className="w-6 h-6 text-yellow-400" />
               </div>
               <div>
                  <h1 className="text-xl font-bold tracking-tighter text-white">NGOẠI GIAO CÂY TRE</h1>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 font-bold">Bản sắc dân tộc - Thời đại mới</p>
               </div>
            </div>

            <div className="hidden md:flex items-center gap-10">
               {['Khởi đầu', 'Triết lý', 'La bàn', 'Lịch sử', 'Thành tựu', 'Nghiên cứu'].map((item) => (
                  <a key={item} href={`#${item}`} className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-red-500 transition-colors">
                     {item}
                  </a>
               ))}
               <button className="px-6 py-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-900/40">
                  Tầm nhìn 2045
               </button>
            </div>
         </div>
      </motion.nav>
   );
};

export default function Home() {
   const [isMuted, setIsMuted] = useState(true);
   const containerRef = useRef(null);

   return (
      <main ref={containerRef} className="bg-black text-white h-screen overflow-y-auto snap-y snap-mandatory custom-scrollbar-hide">
         <Navbar />

         {/* SECTION 1: HERO */}
         <Section id="Khởi đầu">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
               <video 
                  autoPlay loop muted={isMuted} playsInline 
                  className="w-full h-full object-cover scale-105"
               >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-bamboo-forest-34351-large.mp4" type="video/mp4" />
               </video>
            </div>
            
            <div className="relative z-20 text-center max-w-5xl px-6">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
               >
                  <span className="inline-block px-4 py-1 border border-red-500 text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 bg-black/50 backdrop-blur-sm">
                     Tư tưởng Hồ Chí Minh
                  </span>
                  <h2 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
                     NGOẠI GIAO <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 animate-gradient-x underline decoration-red-600/30">CÂY TRE</span>
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed italic mb-12">
                     "Gốc vững, thân chắc, cành uyển chuyển" - Bản sắc trường tồn của dân tộc Việt Nam.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <button className="group relative px-10 py-4 bg-red-600 rounded-lg overflow-hidden flex items-center gap-3 shadow-2xl shadow-red-900/50">
                        <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 font-black uppercase tracking-widest group-hover:text-black transition-colors">Khám phá di sản</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-black transition-colors" />
                     </button>
                     <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="px-8 py-4 border border-white/20 rounded-lg backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-3"
                     >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        <span className="text-xs uppercase tracking-widest font-bold">Âm hưởng dân tộc</span>
                     </button>
                  </div>
               </motion.div>
            </div>
         </Section>

         {/* SECTION 2: TRIẾT LÝ */}
         <Section id="Triết lý" className="bg-[#050505]">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-8"
               >
                  <div className="w-20 h-1 bg-red-600" />
                  <h3 className="text-5xl font-black tracking-tight uppercase">CỐI RỄ LÀ ĐỘC LẬP <br/> THÂN LÀ TỰ CƯỜNG</h3>
                  <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                     <p>Tổng Bí thư Nguyễn Phú Trọng đã khẳng định: Trường phái ngoại giao "Cây tre Việt Nam" thấm đượm tâm hồn, cốt cách and khí phách of dân tộc Việt Nam.</p>
                     <div className="grid grid-cols-2 gap-8 pt-6">
                        <div className="border-l-2 border-red-600/30 pl-6">
                           <h4 className="text-white font-bold mb-2">Mềm dẻo</h4>
                           <p className="text-sm">Thích ứng linh hoạt with vạn biến of thời đại.</p>
                        </div>
                        <div className="border-l-2 border-red-600/30 pl-6">
                           <h4 className="text-white font-bold mb-2">Kiên cường</h4>
                           <p className="text-sm">Giữ vững lợi ích quốc gia làm kim chỉ nam.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
               
               <div className="relative">
                  <div className="relative z-10 p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl group overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                        alt="Bamboo" className="rounded-xl w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                     />
                  </div>
               </div>
            </div>
         </Section>

         {/* SECTION 6: NGHIÊN CỨU & DI SẢN - FIX HIỂN THỊ */}
         <Section id="Nghiên cứu" className="bg-[#1a1a1a]">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-wood.png")' }} />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
               <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="notebook-container relative mx-auto"
               >
                  {/* PUNCH HOLES & RINGS */}
                  <div className="spiral-binding flex flex-col gap-8 absolute -left-12 top-10 z-20">
                     {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex items-center">
                           <div className="w-4 h-4 rounded-full bg-gray-950 shadow-inner" />
                           <div className="w-12 h-3 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 rounded-full -ml-2 shadow-lg" />
                        </div>
                     ))}
                  </div>

                  <div className="notebook-body relative bg-[#fdfaf0] shadow-[20px_20px_60px_rgba(0,0,0,0.8)] rounded-r-xl overflow-hidden min-h-[85vh] border-l-8 border-yellow-900/10">
                     <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
                     
                     <div className="handwritten-content relative z-10 pr-6 h-[750px] overflow-y-auto custom-scrollbar text-justify px-12 py-16 !text-gray-900">
                        <div className="space-y-10 pb-24">
                           <div className="border-b border-gray-300 pb-10">
                              <h3 className="text-4xl font-bold !text-red-900 leading-tight mb-4 font-serif">Tư tưởng Hồ Chí Minh về đối ngoại và sự vận dụng trong Văn kiện Đại hội XIII của Đảng</h3>
                              <p className="!text-gray-500 text-[10px] font-sans mb-4 tracking-[0.2em] font-bold uppercase tracking-widest">DỰ ÁN SỐ HÓA NGHIÊN CỨU CHÍNH LUẬN</p>
                              <div className="bg-red-50 p-6 border-l-4 border-red-700 rounded-sm italic !text-gray-800 text-lg leading-relaxed shadow-sm">
                                 (LLCT) - Tư tưởng Hồ Chí Minh về đối ngoại cho đến nay vẫn còn nguyên giá trị lý luận and thực tiễn sâu sắc. Tại Đại hội XIII of Đảng, đối ngoại of Đảng có những điều chỉnh, bổ sung, phát triển, vừa phù hợp with xu thế quốc tế...
                              </div>
                           </div>

                           <div className="space-y-12">
                              <div className="space-y-4">
                                 <h4 className="text-2xl font-bold !text-gray-900 border-b border-gray-200 pb-2">1. Tư tưởng Hồ Chí Minh về đối ngoại</h4>
                                 <div className="space-y-6 !text-gray-800 text-lg leading-relaxed">
                                    <div className="p-6 bg-yellow-50/50 rounded-lg border border-yellow-100 shadow-sm">
                                       <strong className="block text-xl !text-red-900 mb-2">Độc lập, tự chủ (Bất biến)</strong>
                                       <p className="indent-8 font-serif">Độc lập, tự chủ là tư duy nổi bật, nhất quán trong toàn bộ hoạt động chính trị of Hồ Chí Minh. Người khẳng định: “Độc lập nghĩa là chúng tôi điều khiển lấy mọi công việc of chúng tôi, không có sự can thiệp ở ngoài vào”.</p>
                                    </div>
                                    <div className="p-6 bg-yellow-50/50 rounded-lg border border-yellow-100 shadow-sm">
                                       <strong className="block text-xl !text-red-900 mb-2">Dĩ bất biến ứng vạn biến</strong>
                                       <p className="indent-8 font-serif">Lấy cái không thể thay đổi (bất biến) để ứng phó with muôn sự thay đổi (vạn biến). Theo đó, cái “bất biến” là lợi ích of quốc gia, dân tộc, độc lập dân tộc, chủ quyền... là cốt lõi.</p>
                                    </div>
                                 </div>
                              </div>

                              <div className="space-y-4 pt-10">
                                 <h4 className="text-2xl font-bold !text-gray-900 border-b border-gray-200 pb-2">2. Sự vận dụng trong Văn kiện Đại hội XIII</h4>
                                 <div className="p-8 bg-zinc-50 border border-gray-200 rounded-xl relative overflow-hidden group">
                                    <p className="!text-red-900 text-xl font-bold mb-4 tracking-tight">VAI TRÒ TIÊN PHONG CỦA ĐỐI NGOẠI</p>
                                    <p className="!text-gray-800 leading-loose">Tiếp tục phát huy vai trò tiên phong of đối ngoại trong việc tạo lập and giữ vững môi trường hòa bình, ổn định, huy động các nguồn lực bên ngoài để phát triển đất nước, nâng cao vị thế and uy tín quốc gia.</p>
                                 </div>
                              </div>
                           </div>

                           <div className="pt-20 text-center space-y-4">
                              <p className="!text-gray-400 font-bold uppercase tracking-widest text-xs tracking-[0.4em]">-- Đang trong quá trình hiệu đính toàn văn --</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </Section>

         <footer className="bg-black py-20 px-8 border-t border-white/5 text-center">
            <p className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-widest">© 2024 NGOẠI GIAO CÂY TRE</p>
         </footer>
      </main>
   );
}
