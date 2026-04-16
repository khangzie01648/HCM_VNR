import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Shield, Users, ArrowRight, Volume2, VolumeX, Flag } from 'lucide-react';

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
         <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                  <Flag className="w-6 h-6 text-yellow-400" />
               </div>
               <div>
                  <h1 className="text-xl font-bold uppercase tracking-tighter">Ngoại Giao Cây Tre</h1>
                  <p className="text-[10px] uppercase tracking-widest text-red-500 font-bold">Bản sắc dân tộc Việt Nam</p>
               </div>
            </div>
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
               {['Khởi đầu', 'La bàn', 'Nghiên cứu'].map(item => (
                  <a key={item} href={`#${item}`} className="hover:text-red-500 transition-colors">{item}</a>
               ))}
            </div>
         </div>
      </motion.nav>
   );
};

export default function HomeFixed() {
   const [isMuted, setIsMuted] = useState(true);

   return (
      <main className="bg-black text-white h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
         <Navbar />

         {/* HERO */}
         <Section id="Khởi đầu">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
               <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover">
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-bamboo-forest-34351-large.mp4" type="video/mp4" />
               </video>
            </div>
            <div className="relative z-20 text-center max-w-4xl px-6">
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                  <h2 className="text-8xl md:text-9xl font-black mb-6 tracking-tighter uppercase">NGOẠI GIAO <br/><span className="text-red-600">CÂY TRE</span></h2>
                  <p className="text-xl text-gray-300 mb-10 italic">"Gốc vững, thân chắc, cành uyển chuyển"</p>
                  <div className="flex justify-center gap-4">
                     <button className="px-8 py-3 bg-red-600 font-black uppercase tracking-widest rounded-lg flex items-center gap-3 shadow-2xl">
                        Khám phá di sản <ArrowRight size={20}/>
                     </button>
                     <button onClick={() => setIsMuted(!isMuted)} className="p-4 border border-white/20 rounded-lg backdrop-blur-md">
                        {isMuted ? <VolumeX size={20}/> : <Volume2 size={20}/>}
                     </button>
                  </div>
               </motion.div>
            </div>
         </Section>

         {/* LA BÀN */}
         <Section id="La bàn">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                  { icon: Shield, title: "An ninh", desc: "Bảo vệ vững chắc chủ quyền" },
                  { icon: Globe, title: "Hội nhập", desc: "Đa phương hóa quan hệ quốc tế" },
                  { icon: Users, title: "Nhân dân", desc: "Sức mạnh đại đoàn kết dân tộc" },
                  { icon: Award, title: "Vị thế", desc: "Nâng cao uy tín Việt Nam" }
               ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="p-10 bg-zinc-900/50 rounded-3xl border border-white/5">
                     <item.icon className="text-red-600 mb-6" size={40} />
                     <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                     <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </Section>

         {/* NGHIÊN CỨU - NOTEBOOK (FIXED COLOR) */}
         <Section id="Nghiên cứu" className="bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto px-6 w-full h-[85vh] relative py-12">
               {/* SPIRAL BINDING */}
               <div className="absolute left-8 top-16 bottom-16 w-12 z-30 flex flex-col justify-between py-4">
                  {Array.from({ length: 14 }).map((_, i) => (
                     <div key={i} className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-black rounded-full" />
                        <div className="w-10 h-2 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full shadow-lg" />
                     </div>
                  ))}
               </div>

               {/* NOTEBOOK BODY */}
               <div className="relative h-full bg-[#fdfaf0] shadow-2xl rounded-r-2xl overflow-hidden border-l-[12px] border-black/10">
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
                  
                  <div className="relative z-10 h-full overflow-y-auto px-16 py-16 !text-gray-950 font-serif leading-relaxed text-justify">
                     <div className="max-w-3xl mx-auto space-y-12">
                        <header className="border-b-2 border-red-900/10 pb-10">
                           <h3 className="text-4xl font-black !text-red-950 mb-4 leading-tight">Tư tưởng Hồ Chí Minh về đối ngoại và sự vận dụng trong Văn kiện Đại hội XIII của Đảng</h3>
                           <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-[0.3em]">Di sản nghiên cứu số hóa 2024</p>
                        </header>

                        <div className="space-y-10">
                           <div className="p-8 bg-red-50/50 border-l-4 border-red-700 rounded-sm italic !text-gray-800 text-lg">
                              (LLCT) - Tư tưởng Hồ Chí Minh về đối ngoại cho đến nay vẫn còn nguyên giá trị lý luận và thực tiễn sâu sắc. Tại Đại hội XIII của Đảng, đối ngoại có những điều chỉnh, bổ sung phù hợp (Mực in đen sắc nét 100%).
                           </div>

                           <div className="space-y-6">
                              <h4 className="text-2xl font-bold !text-red-900">1. Tư tưởng Hồ Chí Minh về đối ngoại</h4>
                              <p className="indent-10">Thực tiễn hoạt động cách mạng cùng nền tảng tri thức đã kết tinh ở Hồ Chí Minh hệ thống tư tưởng toàn diện. Trong đó, tư tưởng of Người về đối ngoại có những tư duy đi trước thời đại...</p>
                              
                              <div className="p-8 bg-zinc-50 border border-gray-100 rounded-xl">
                                 <h5 className="font-bold text-xl mb-3 !text-red-800 tracking-tight uppercase">Độc lập, tự chủ (Lợi ích tối thượng)</h5>
                                 <p className="!text-gray-800 leading-relaxed">“Muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã”. Giữ vững độc lập, tự chủ là nguyên tắc bất biến để bảo vệ lợi ích quốc gia - dân tộc.</p>
                              </div>
                           </div>
                        </div>

                        <div className="pt-20 border-t border-gray-100 text-center">
                           <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px]">-- Đang tiếp tục số hóa nội dung toàn văn 1:1 --</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Section>

         <footer className="py-16 text-center opacity-30">
            <p className="text-xs uppercase tracking-[0.4em] font-bold">Ngoại Giao Cây Tre © 2024</p>
         </footer>
      </main>
   );
}
