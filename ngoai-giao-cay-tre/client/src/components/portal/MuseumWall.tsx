import React from 'react';
import { motion } from 'framer-motion';

// @ts-ignore
import ex1 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/1.png";
// @ts-ignore
import ex2 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/2.png";
// @ts-ignore
import ex3 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/3.png";
// @ts-ignore
import ex4 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/4.png";
// @ts-ignore
import ex5 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/5.png";
// @ts-ignore
import ex6 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/6.png";
// @ts-ignore
import ex7 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/7.png";
// @ts-ignore
import ex8 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/8.png";
// @ts-ignore
import ex9 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/9.png";
// @ts-ignore
import ex10 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/10.png";
// @ts-ignore
import ex11 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/11.png";
// @ts-ignore
import ex12 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/12.png";
// @ts-ignore
import ex13 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/13.png";
// @ts-ignore
import ex14 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/14.png";
// @ts-ignore
import ex15 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/15.png";
// @ts-ignore
import ex16 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/16.png";
// @ts-ignore
import ex17 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/17.png";
// @ts-ignore
import ex18 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/18.png";
// @ts-ignore
import ex19 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/19.png";
// @ts-ignore
import ex20 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/20.png";
// @ts-ignore
import ex21 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/21.png";
// @ts-ignore
import ex22 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/22.png";
// @ts-ignore
import ex23 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/23.png";
// @ts-ignore
import ex24 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/24.png";
// @ts-ignore
import ex25 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/25.png";
// @ts-ignore
import ex26 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/26.png";
// @ts-ignore
import ex27 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/27.png";
// @ts-ignore
import ex28 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/28.png";
// @ts-ignore
import ex29 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/29.png";
// @ts-ignore
import ex30 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/30.png";
// @ts-ignore
import ex31 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/31.png";
// @ts-ignore
import ex32 from "@root/NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))/32.png";

interface MuseumWallProps {
  onSelectImg: (img: any) => void;
}

const MuseumWall: React.FC<MuseumWallProps> = ({ onSelectImg }) => {
  const museumRows = [
    {
       id: 1,
       direction: 'left',
       speed: '60s',
       posters: [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10, ex11],
       width: '220px',
       height: '310px'
    },
    {
       id: 2,
       direction: 'right',
       speed: '80s',
       posters: [ex12, ex13, ex14, ex15, ex16, ex17, ex18, ex19, ex20, ex21, ex22],
       width: '260px',
       height: '370px'
    },
    {
       id: 3,
       direction: 'left',
       speed: '100s',
       posters: [ex23, ex24, ex25, ex26, ex27, ex28, ex29, ex30, ex31, ex32],
       width: '200px',
       height: '280px'
    }
  ];

  return (
    <div className="relative z-10 w-full py-20">
      <div className="max-w-7xl mx-auto px-12 lg:px-24 mb-12">
         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Phòng trưng bày tư liệu cao cấp</p>
            <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white text-5xl lg:text-6xl font-black uppercase">BỨC TƯỜNG <br /><span className="text-[#D4AF37]">BẢO TÀNG LƯU TRỮ</span></h3>
         </motion.div>
      </div>

      <div className="space-y-8 lg:space-y-12 w-full">
         {museumRows.map((row) => (
            <div key={row.id} className="pause-animation relative w-full overflow-hidden">
               <div 
                  className={`flex gap-6 lg:gap-10 w-fit ${row.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                  style={{ '--duration': row.speed } as any}
               >
                  {[...row.posters, ...row.posters].map((img, idx) => (
                     <div
                        key={`${row.id}-${idx}`}
                        data-number={`#${(idx % row.posters.length) + (row.id === 1 ? 1 : row.id === 2 ? 12 : 23)}`}
                        className="museum-poster flex-shrink-0 bg-[#1a0808] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                        style={{ width: row.width, height: row.height }}
                        onClick={() => onSelectImg({ img, year: '2021', title: 'Tư liệu Triển lãm' })}
                     >
                        <img 
                           src={img} 
                           className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
                           alt={`Poster ${(idx % row.posters.length) + 1}`} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 hover:opacity-10 transition-opacity" />
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default MuseumWall;
