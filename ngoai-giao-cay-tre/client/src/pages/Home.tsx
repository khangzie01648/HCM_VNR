import { useState, useEffect } from 'react';
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
// import video13 from "@root/13.mp4";
// @ts-ignore
import FinalPoster from "@root/assets/poster_dai_hoi_xiii_final_1.png";
// @ts-ignore
import bgImage from "@root/assets/1-51d37.jpg";


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
      className={`relative w-full min-h-screen snap-start flex items-center justify-center ${className}`}
   >
      {children}
   </section>
);

const RedSeal = () => (
   <div className="absolute top-10 right-10 w-24 h-24 border-[3px] border-red-700/40 rounded-full flex items-center justify-center rotate-12 select-none pointer-events-none opacity-40">
      <div className="border border-red-700/40 rounded-full w-[85%] h-[85%] flex flex-col items-center justify-center p-1">
         <p className="text-[7px] font-black text-red-700/50 leading-none uppercase">Lưu trữ</p>
         <p className="text-[9px] font-black text-red-700/50 leading-none uppercase my-1">QUỐC GIA</p>
         <p className="text-[6px] font-black text-red-700/50 leading-none uppercase">VIỆT NAM</p>
      </div>
   </div>
);

export default function Home() {
   const [isMuted] = useState(true);
   const [showVideo, setShowVideo] = useState(false);
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

   const sheets = [
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <h3 className="text-xl font-bold text-[#b08d26] border-b border-red-900/10 pb-1 mb-4 uppercase">1. Tư tưởng Hồ Chí Minh về đối ngoại</h3>
               <p className="indent-10">Hồ Chí Minh là nhà ngoại giao kiệt xuất, người sáng lập nền ngoại giao hiện đại Việt Nam. Người luôn quan tâm chỉ đạo công tác đối ngoại nhằm xây dựng khối đoàn kết quốc tế, tranh thủ sự ủng hộ của các nước và nhân dân yêu chuộng hòa bình trên thế giới với sự nghiệp cách mạng của Đảng và nhân dân Việt Nam. Tại Đại hội XIII của Đảng, đường lối đối ngoại của Đảng đã kế thừa quan điểm các Đại hội trước và có những điều chỉnh, bổ sung phù hợp; đặc biệt là sự vận dụng đúng đắn, sáng tạo tư tưởng Hồ Chí Minh về đối ngoại trong điều kiện mới.</p>
               <p className="indent-10">Thực tiễn hoạt động cách mạng cùng nền tảng tri thức và vốn văn hóa đã kết tinh ở Hồ Chí Minh hệ thống tư tưởng toàn diện, sâu sắc. Trong đó, tư tưởng của Người về đối ngoại chứa đựng nhiều nội dung không chỉ bền vững qua thời gian, mà còn có những tư duy đi trước thời đại; thể hiện ở những điểm sau:</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="font-bold text-red-700 uppercase italic">Một là, phải độc lập, tự chủ trong đối ngoại và hợp tác quốc tế</p>
               <p className="indent-10">Độc lập, tự chủ là tư duy nổi bật, nhất quán trong toàn bộ hoạt động chính trị của Hồ Chí Minh, nguyên lý chủ yếu của tư tưởng đó là “muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã”(1). Giữ vững độc lập, tự chủ vừa là đường lối, vừa là nguyên tắc bất biến để bảo vệ tốt nhất lợi ích quốc gia - dân tộc. Đường lối và nguyên tắc đó cũng được kết tinh trong tư tưởng và thực tiễn hoạt động đối ngoại của Hồ Chí Minh.</p>
               <p className="indent-10">Theo Người, độc lập là không phụ thuộc, không bắt chước, theo đuôi, giáo điều; tự chủ là chủ động suy nghĩ và làm chủ suy nghĩ của mình, tự chịu trách nhiệm trước nhân dân, trước đất nước, biết làm chủ bản thân và công việc. Trong quan hệ quốc tế, Người khẳng định: “Độc lập nghĩa là chúng tôi điều khiển lấy mọi công việc của chúng tôi, không có sự can thiệp ở ngoài vào”(2); và nhấn mạnh: “Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng. Nhân dân Việt Nam quyết không thèm thứ thống nhất và độc lập giả hiệu ấy”(3). Như vậy, dân tộc Việt Nam độc lập, tự chủ, thống nhất không chỉ là toàn vẹn về lãnh thổ mà ngoại giao, đối ngoại của dân tộc cũng phải độc lập, không bị bất kỳ thế lực, lực lượng nào chi phối.</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Trong quan hệ giữa các đảng thuộc phong trào cộng sản, công nhân quốc tế, Người xác định: “Các đảng dù lớn dù nhỏ đều độc lập và bình đẳng, đồng thời đoàn kết nhất trí giúp đỡ lẫn nhau”(4). Người cũng đã thể hiện rất cụ thể và sâu sắc mối quan hệ biện chứng, sự gắn kết giữa độc lập, tự chủ với mở rộng và tăng cường đoàn kết, hợp tác quốc tế; giữa tự lực, tự cường với hợp tác và phát triển. Trong mối quan hệ biện chứng đó, “độc lập, tự chủ” luôn giữ vai trò quyết định, là nền tảng vững chắc để đoàn kết quốc tế, tranh thủ sự ủng hộ rộng rãi của nhân dân thế giới.</p>
               <p className="font-bold text-red-700 uppercase italic">Hai là, kết hợp sức mạnh dân tộc với sức mạnh thời đại trong công tác đối ngoại</p>
               <p className="indent-10">Đây là một nội dung quan trọng trong tư tưởng Hồ Chí Minh, là quy luật, bài học kinh nghiệm lớn của cách mạng Việt Nam. Trong mối quan hệ giữa sức mạnh dân tộc và sức mạnh thời đại, Hồ Chí Minh coi nguồn lực bên trong giữ vai trò quyết định, nguồn lực bên ngoài là quan trọng và chỉ được phát huy sức mạnh thông qua nguồn lực bên trong. Người nhấn mạnh: “Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập”(5). Muốn tranh thủ sức mạnh của thời đại phải có đường lối đúng đắn, phát huy độc lập tự chủ, kết hợp chặt chẽ mục tiêu đấu tranh cho độc lập, thống nhất của dân tộc mình với mục tiêu của thời đại.</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Thể hiện giản dị, dễ hiểu về mối quan hệ này, Người đưa ra ví dụ: “Thực lực mạnh, ngoại giao sẽ thắng lợi. Thực lực là cái chiêng mà ngoại giao là cái tiếng. Chiêng có to, tiếng mới lớn”(6). Trên cơ sở xác định vị trí, vai trò của từng nguồn sức mạnh, Người chỉ rõ sự cần thiết phải chú trọng xây dựng và phát huy sức mạnh của công tác đối ngoại nhân dân nhằm vận động được nhân dân yêu chuộng hòa bình trên thế giới ủng hộ sự nghiệp đấu tranh giải phóng dân tộc, thống nhất đất nước của Đảng và nhân dân Việt Nam. Bởi như Người khẳng định: “Sức mạnh, sự vĩ đại và sự bền bỉ của nhân dân Việt Nam cơ bản là ở sự đoàn kết của nhân dân Việt Nam và sự ủng hộ của nhân dân thế giới...”(7).</p>
               <p className="font-bold text-red-700 uppercase italic">Ba là, luôn yêu chuộng hòa bình, chống chiến tranh xâm lược</p>
               <p className="indent-10">Tư tưởng yêu chuộng hòa bình, chống chiến tranh xâm lược được thể hiện từ rất sớm và luôn nhất quán trong suốt quá trình hoạt động cách mạng của Người. Ngay sau Cách mạng Tháng Tám năm 1945, Hồ Chí Minh viết Thư gửi những người Pháp ở Đông Dương (tháng 10-1945), thể hiện sự kính trọng đối với nhân dân Pháp, nêu lên những điểm tương đồng giữa hai dân tộc Việt - Pháp là khát vọng độc lập, tự do và kêu gọi: “Hỡi những người Pháp ở Đông Dương! Các bạn không nghĩ rằng máu nhân loại đã chảy nhiều, rằng hòa bình - một nền hòa bình chân chính xây trên công bình và lý tưởng dân chủ - phải thay cho chiến tranh, rằng tự do, bình đẳng, bác ái phải thực hiện trên khắp các nước không phân biệt chủng tộc và màu da ư?”(8).</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Ngay cả khi phải tiến hành cuộc chiến tranh một mất một còn với đế quốc thực dân để giành độc lập dân tộc, Người cũng luôn tìm kiếm những cơ hội đối thoại, đàm phán để tránh một cuộc chiến bạo lực phi nghĩa. <span className="font-bold text-red-700 uppercase italic">Bốn là, luôn có tinh thần hòa hiếu, “thêm bạn, bớt thù”</span>. Trong thực tiễn lãnh đạo cách mạng, Hồ Chí Minh luôn phân biệt rõ giữa bạn và thù, tìm cách giảm bớt kẻ thù, tránh đối phó với nhiều kẻ thù cùng một lúc, xác định kẻ thù chính để tập trung mũi nhọn đấu tranh. Người khẳng định: “Muốn làm cách mạng thắng lợi thì phải phân biệt rõ ai là bạn ai là thù, phải thực hiện thêm bầu bạn, bớt kẻ thù”(9).</p>
               <p className="indent-10">Để “thêm bạn, bớt thù”, Người chủ trương phân biệt giữa nhân dân yêu chuộng hòa bình với lực lượng phản động, hiếu chiến trong chính phủ của nước đối phương. Trả lời phỏng vấn của nhà báo Ôxtrâylia W.Bớcsét tháng 8-1963 và tháng 4-1964, Hồ Chí Minh khẳng định: “Trước đây, chúng tôi đã chú ý phân biệt thực dân Pháp với nhân dân Pháp yêu chuộng hòa bình, thì ngày nay chúng tôi cũng chú ý phân biệt nhân dân Mỹ vĩ đại có truyền thống tự do, với bọn can thiệp Mỹ và bọn quân phiệt ở Hoa Thịnh Đốn đang nâng đỡ chúng”(10); “... chúng tôi phân biệt nhân dân Mỹ với đế quốc Mỹ. Chúng tôi muốn có những quan hệ hữu nghị và anh em với nhân dân Mỹ mà chúng tôi rất kính trọng vì nhân dân Mỹ là một dân tộc tài năng, đã có nhiều cống hiến cho khoa học, và nhất là gần đây đã lên tiếng phản đối cuộc chiến tranh xâm lược miền Nam Việt Nam”(11).</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Như vậy, trong lực lượng của đối phương thì “thêm bạn” chính là “bớt thù”, khi đó nhân dân Việt Nam chỉ phải chống chính phủ hiếu chiến của Pháp và Mỹ chứ không phải chống toàn bộ nước Pháp và nước Mỹ. Tương quan lực lượng vì thế đã xoay chuyển theo chiều hướng có lợi cho ta. Trong khi kẻ thù bị cô lập trên thế giới và ngay trong nội bộ đất nước mình thì sự nghiệp đấu tranh giải phóng dân tộc của Đảng và nhân dân Việt Nam lại được cả nhân loại, kể cả nhân dân nước đi xâm lược - vượt lên tình cảm dân tộc - hết mình ủng hộ.</p>
               <p className="font-bold text-red-700 uppercase italic">Năm là, xây dựng quan hệ hữu nghị, hợp tác trên cơ sở tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ</p>
               <p className="indent-10">Trong hành trình tìm đường cứu nước, Hồ Chí Minh đã từng sống, làm việc, hoạt động ở nhiều nước; bằng uy tín và những hành động cụ thể, Hồ Chí Minh là người đầu tiên đặt cơ sở cho tình hữu nghị, hợp tác giữa nhân dân Việt Nam với nhân dân các nước trên thế giới. Sau Cách mạng Tháng Tám năm 1945, nước Việt Nam Dân chủ Cộng hòa ra đời, Người nhiều lần tuyên bố, Việt Nam “làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai”(12). “Chính sách ngoại giao của Chính phủ thì chỉ có một điều tức là thân thiện với tất cả các nước dân chủ trên thế giới để giữ gìn hòa bình”(13). “Bất kỳ nước nào... thật thà muốn đưa tư bản đến kinh doanh ở Việt Nam, với mục đích làm lợi cho cả hai bên, thì Việt Nam sẽ rất hoan nghênh... Bất kỳ nước nào... mong đưa tư bản đến để ràng buộc áp chế Việt Nam thì, Việt Nam sẽ cương quyết cự tuyệt”(14).</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Có thể xem những lời tuyên bố đó là tư tưởng đặt nền móng cho phương châm đa phương hóa, đa dạng hóa công tác đối ngoại của Đảng và Nhà nước Việt Nam hiện nay. <span className="font-bold text-red-700 uppercase italic">Sáu là, nhất quán phương châm “Dĩ bất biến ứng vạn biến” trong hoạt động đối ngoại</span>. “Dĩ bất biến ứng vạn biến” là câu nói được Hồ Chí Minh nêu lên lần đầu tiên vào ngày 31-5-1946, khi Người trao nhiệm vụ thiêng liêng giữ gìn nền độc lập của Tổ quốc vừa giành lại được cho cụ Huỳnh Thúc Kháng; Người căn dặn: “Tôi vì nhiệm vụ quốc dân giao phó phải đi xa ít lâu, ở nhà trăm sự khó khăn nhờ cậy ở Cụ cùng anh em giải quyết cho, mong Cụ “Dĩ bất biến ứng vạn biến”(15).</p>
               <p className="indent-10">“Dĩ bất biến ứng vạn biến” là lấy cái không thể thay đổi (bất biến) để ứng phó với muôn sự thay đổi (vạn biến). Theo đó, cái “bất biến” là lợi ích của quốc gia, dân tộc, độc lập dân tộc, chủ quyền... là cốt lõi; cái “vạn biến” là cách ứng phó tài tình, khéo léo, linh hoạt, kết hợp hài hòa giữa mềm dẻo và kiên quyết, giữa chiến lược và sách lược, giữa cương và nhu, giữa chủ động và sáng tạo trong những tình huống cụ thể. Để thực hiện “ứng vạn biến”, điều quan trọng là phải đánh giá đúng tình hình quốc tế và sự tác động đối với nước ta, cả mặt thuận và khó khăn. Hồ Chí Minh chỉ rõ: “Mục đích bất di bất dịch của ta vẫn là hòa bình, thống nhất, độc lập, dân chủ. Nguyên tắc của ta thì phải vững chắc, nhưng sách lược của ta thì linh hoạt”(16).</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <h3 className="text-xl font-bold text-[#b08d26] border-b border-red-900/10 pb-1 mb-4 uppercase">2. Sự vận dụng của Đảng trong Văn kiện Đại hội XIII</h3>
               <p className="indent-10">Đường lối đối ngoại thời kỳ đổi mới được Đảng khởi xướng từ năm 1986 và luôn được bổ sung, hoàn chỉnh qua các kỳ Đại hội Đảng. Điều này đưa tới những thành tựu của đối ngoại Việt Nam. Vận dụng sáng tạo tư tưởng Hồ Chí Minh về đối ngoại, Đại hội XIII của Đảng đã đề ra đường lối đối ngoại chủ động và tích cực hội nhập quốc tế toàn diện, sâu rộng với những điểm mới, thể hiện trên một số nội dung sau:</p>
               <p className="font-bold text-red-700 uppercase italic">Một là, thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển</p>
               <p className="indent-10">Đại hội XIII của Đảng xác định: “Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa dạng hóa, đa phương hóa quan hệ đối ngoại”(17). Đây là nguyên tắc “bất biến”, là đường lối đối ngoại nhất quán của Đảng. Nhưng các nội hàm cụ thể luôn được bổ sung, phát triển để đáp ứng yêu cầu của nhiệm vụ xây dựng và bảo vệ Tổ quốc, phù hợp với xu thế phát triển của thế giới và khu vực. Đại hội XIII nhấn mạnh, giải quyết tốt mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế; thúc đẩy hội nhập quốc tế toàn diện, sâu rộng, linh hoạt, hiệu quả. Toàn cầu hóa, hội nhập quốc tế sâu rộng đã và đang đặt ra những thách thức lớn, không chỉ riêng với nước ta về tính độc lập, tự chủ trong quan hệ quốc tế.</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Nhưng nhờ kiên trì đường lối đối ngoại độc lập, tự chủ và có nhiều chính sách phù hợp, khôn khéo theo tinh thần “vạn biến”, Đảng và Nhà nước ta đã bảo vệ được lợi ích quốc gia, dân tộc trong những thời điểm hết sức khó khăn, phức tạp. Tiếp tục đường lối này, trong tổ chức thực hiện phải luôn giải quyết hài hòa mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế. Nghĩa là, không chỉ khắc phục sự lệ thuộc, chống sự áp đặt, lôi kéo, chi phối, mà còn phải nêu cao và phát huy tính chủ động trong tham gia vào các công việc chung của cộng đồng khu vực và quốc tế.</p>
               <p className="font-bold text-red-700 uppercase italic">Hai là, kết hợp chặt chẽ sức mạnh dân tộc với sức mạnh thời đại trong công tác đối ngoại</p>
               <p className="indent-10">Kết hợp chặt chẽ giữa sức mạnh dân tộc với sức mạnh thời đại là bài học lớn của cách mạng Việt Nam nói chung, cũng như của công tác đối ngoại nói riêng. Sau hơn 35 năm đổi mới, “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay”(18). Song, việc kết hợp chặt chẽ giữa sức mạnh dân tộc với sức mạnh thời đại vẫn là yêu cầu quan trọng, thực lực của ta mạnh lên thì ngoại giao sẽ càng hiệu quả; đúng như Chủ tịch Hồ Chí Minh đã dạy, có thực lực mạnh, thì ngoại giao sẽ thắng lợi. Tinh thần đó tiếp tục được thể hiện rõ trong Văn kiện Đại hội XIII của Đảng: “Kết hợp sức mạnh dân tộc với sức mạnh thời đại, chủ động và tích cực hội nhập quốc tế toàn diện, sâu rộng”(19), “Gắn kết chặt chẽ quá trình chủ động, tích cực hội nhập quốc tế toàn diện và sâu rộng với việc nâng cao sức mạnh tổng hợp, huy động tiềm năng của toàn xã hội; đổi mới, hoàn thiện thể chế trong nước, nâng cao năng lực tự chủ, cạnh tranh và khả năng thích ứng của đất nước”(20).</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Chúng ta kết hợp sức mạnh dân tộc với sức mạnh thời đại để phát huy triệt để những thế mạnh của chính mình, tận dụng mặt tích cực, hạn chế mặt tiêu cực của các mối quan hệ quốc tế. <span className="font-bold text-red-700 uppercase italic">Ba là, tiếp tục phát huy vai trò tiên phong của đối ngoại trong việc tạo lập và giữ vững môi trường hòa bình, ổn định</span>. Đại hội XIII của Đảng nhấn mạnh: “Tiếp tục phát huy vai trò tiên phong của đối ngoại trong việc tạo lập và giữ vững môi trường hòa bình, ổn định, huy động các nguồn lực bên ngoài để phát triển đất nước, nâng cao vị thế và uy tín của đất nước”(21). Đây là lần đầu tiên Văn kiện Đại hội Đảng xác định cụ thể và sâu sắc vị trí, vai trò của công tác đối ngoại và hội nhập quốc tế.</p>
               <p className="indent-10">Điều đó làm sáng rõ hơn nhiệm vụ trọng yếu của công tác đối ngoại là tiên phong trong việc giữ vững môi trường hòa bình, tạo điều kiện thuận lợi cho việc kết hợp sức mạnh dân tộc với sức mạnh thời đại, phục vụ phát triển đất nước. Mở rộng quan hệ đối ngoại nhằm thúc đẩy quan hệ kinh tế, tăng cường hợp tác quốc tế để phát triển kinh tế - xã hội, đẩy mạnh CNH, HĐH đất nước, bảo vệ vững chắc độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ. Môi trường đối ngoại trong những năm tới tiếp tục chuyển biến nhanh, phức tạp, khó lường cả về an ninh, chính trị, kinh tế, đan xen nhiều cơ hội và những những thách thức.</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Đảng đã nhận thức sâu sắc hơn, đầy đủ hơn các đặc điểm của môi trường quốc tế cũng như các hệ thống công cụ, quyền lực được sử dụng để chi phối, kiểm soát và vận dụng linh hoạt trong quá trình hội nhập quốc tế. Hội nhập quốc tế không giới hạn trong một phạm vi hay một lĩnh vực nào của đời sống quốc tế mà nó lan tỏa ở mọi cấp độ, mọi lĩnh vực trên phạm vi khu vực và toàn cầu. Thực hiện nhất quán quan điểm này, công tác đối ngoại sẽ phát huy được vai trò tiên phong, trở thành một điểm sáng trong những thành tựu chung của cả dân tộc, góp phần tạo lập và giữ vững môi trường hòa bình, ổn định để phát triển, nâng cao vị thế, uy tín của đất nước.</p>
               <p className="font-bold text-red-700 uppercase italic">Bốn là, xác định mục tiêu của đối ngoại trong thời kỳ mới là bảo đảm cao nhất lợi ích quốc gia - dân tộc</p>
               <p className="indent-10 italic">Trong Văn kiện Đại hội XIII của Đảng, “mục tiêu tối thượng” trong công tác đối ngoại của Đảng là: “Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở các nguyên tắc cơ bản của Hiến chương Liên hợp quốc và luật pháp quốc tế, bình đẳng, hợp tác, cùng có lợi”(22). Đây là một trong những quan điểm chỉ đạo cao nhất nhằm thực hiện tầm nhìn và định hướng phát triển của đất nước. Đại hội khẳng định rõ lợi ích quốc gia - dân tộc luôn được quan tâm và xác định là mục tiêu trọng yếu trong hoạt động đối ngoại và hội nhập quốc tế; gồm nhiều yếu tố lợi ích: chính trị, văn hóa - xã hội, quốc phòng - an ninh... Trong đó, lợi ích cao nhất của quốc gia - dân tộc là độc lập dân tộc và CNXH.</p>
            </div>
         ),
         back: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10">Hiện nay, bối cảnh toàn cầu hóa và hội nhập quốc tế sâu rộng, sự phụ thuộc giữa các quốc gia ngày càng tăng. Chính vì vậy, Đảng khẳng định trong hoạt động đối ngoại và hội nhập quốc tế, việc bảo đảm lợi ích quốc gia - dân tộc là lợi ích dân tộc chân chính, không phải là lợi ích dân tộc vị kỷ, hẹp hòi. Bảo đảm cao nhất lợi ích của quốc gia - dân tộc phải dựa trên các nguyên tắc cơ bản của Hiến chương Liên hợp quốc và luật pháp quốc tế. Quan điểm này của Đại hội thể hiện sâu sắc sự vận dụng tư tưởng Hồ Chí Minh trong công tác đối ngoại. Người luôn nhấn mạnh tư tưởng độc lập, tự chủ trong hoạch định đường lối đối ngoại, xây dựng quan hệ hữu nghị, hợp tác với các nước trên cơ sở tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ. Ngoại giao dù với những đối tượng nào, với những cách thức, hình thức ra sao thì đều phải bảo đảm vững chắc lợi ích quốc gia - dân tộc.</p>
               <p className="font-bold text-red-700 uppercase italic">Năm là, thực hiện đường lối ngoại giao rộng mở, đa phương hóa, đa dạng hóa trong quan hệ quốc tế</p>
               <p className="indent-10 italic">Qua 35 năm đổi mới, Việt Nam đã đạt được nhiều thành tựu quan trọng trong lĩnh vực đối ngoại, đặc biệt là thiết lập các cơ chế hợp tác song phương và đa phương để kết nối với thế giới. Tiếp nối những thành tựu này, Đại hội XIII của Đảng chủ trương: “Đẩy mạnh đối ngoại song phương và nâng tầm đối ngoại đa phương. Chủ động tham gia và phát huy vai trò của Việt Nam tại các cơ chế đa phương... Coi trọng phát triển quan hệ hợp tác, hữu nghị, truyền thống với các nước láng giềng; chủ động, tích cực và có trách nhiệm cùng các nước ASEAN xây dựng Cộng đồng đoàn kết, vững mạnh, giữ vững vai trò trung tâm của ASEAN trong cấu trúc an ninh khu vực.</p>
            </div>
         ),
      },
      {
         front: (
            <div className="space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] leading-relaxed text-justify">
               <p className="indent-10 italic">... Đẩy mạnh và làm sâu sắc hơn quan hệ hợp tác song phương với các đối tác, đặc biệt là các đối tác chiến lược, đối tác toàn diện và các đối tác quan trọng khác, tạo thế đan xen lợi ích và tăng độ tin cậy. Chủ động, tích cực tham gia các cơ chế đa phương về quốc phòng, an ninh theo tư duy mới về bảo vệ Tổ quốc”(23).</p>
               <p className="indent-10">Như vậy, cần tiếp tục đưa các mối quan hệ đối ngoại song phương đi vào chiều sâu, đồng thời cần “tạo thế đan xen lợi ích” và “tăng độ tin cậy”. Đối ngoại đa phương cần “chủ động tham gia, tích cực đóng góp, nâng cao vai trò của Việt Nam trong xây dựng, định hình các thể chế đa phương và trật tự chính trị - kinh tế quốc tế”. Đây là bước phát triển quan trọng về lý luận và thực tiễn đối ngoại song phương và đa phương. Tư duy mới này thể hiện sự vận dụng sáng tạo tư tưởng Hồ Chí Minh về xây dựng quan hệ hữu nghị, hợp tác với các nước trên cơ sở tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ. Điều này phù hợp với thế và lực mới của đất nước cũng như những đòi hỏi thực tiễn đối with công tác đối ngoại. Vận dụng sáng tạo tư tưởng Hồ Chí Minh về đối ngoại, Đại hội XIII của Đảng đã hoạch định đường lối đối ngoại độc lập, tự chủ, kiên định mục tiêu bảo đảm cao nhất lợi ích quốc gia - dân tộc, đồng thời cũng thể hiện tinh thần hòa bình, tôn trọng độc lập, chủ quyền quốc gia của các dân tộc trên thế giới. Những quan điểm chỉ đạo mới tại Đại hội XIII của Đảng về đối ngoại thể hiện mạnh mẽ tính kế thừa và tinh thần đổi mới tư duy, phù hợp xu thế phát triển của quốc tế và những thay đổi của đất nước.</p>
            </div>
         ),
         back: (
            <div className="pt-20 h-full flex flex-col justify-center text-center">
               <p className="text-2xl font-black text-red-950 uppercase font-serif tracking-tighter">PGS, TS NGUYỄN XUÂN TRUNG</p>
               <p className="text-2xl font-black text-red-950 uppercase font-serif mt-2 tracking-tighter">THS NGUYỄN THỊ HUYỀN TRANG</p>
               <p className="text-[13px] opacity-60 uppercase font-bold mt-4 tracking-[0.4em]">Học viện Chính trị khu vực I</p>
            </div>
         )
      },
      {
         front: (
            <div className="space-y-3 font-mono text-[9px] opacity-40 leading-tight h-full overflow-y-auto no-scrollbar forced-black-ink">
               <p className="whitespace-pre-wrap leading-[1.8]">(1) Hồ Chí Minh: Toàn tập, t.2, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, tr.320.
                  (2), (3), (12), (13) Hồ Chí Minh: Toàn tập, Sđd, t.5, tr.162, 602, 256, 39.
                  (4) Hồ Chí Minh: Toàn tập, Sđd, t.12, tr.732.
                  (5) Hồ Chí Minh: Toàn tập, Sđd, t.7, tr.445.
                  (6), (8) Hồ Chí Minh: Toàn tập, Sđd, t.4, tr.147, 76-77.
                  (7) Hồ Chí Minh: Toàn tập, Sđd, t.15, tr.675.
                  (8) Hồ Chí Minh: Toàn tập, Sđd, t.13, tr.453.
                  (10), (11) Hồ Chí Minh: Toàn tập, Sđd, t.14, tr.148, 304.
                  (14) Hồ Chí Minh: Toàn tập, Sđd, t.6, tr.145.
                  (15) Hồ Chí Minh: Biên niên tiểu sử, Nxb Chính trị quốc gia Sự thật, Hà Nội, 1993, tr.216.
                  (16) Hồ Chí Minh: Toàn tập, Sđd, t.8, tr.555.
                  (17), (18), (19), (20), (21), (22), (23) ĐCSVN: Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII, t.I, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr.161, 25, 162, 164, 162, 110, 162-163. HẾT.</p>
            </div>
         ),
         back: (
            <div className="h-full flex items-center justify-center opacity-20"></div>
         )
      }
   ];

   const totalSheets = sheets.length;

   return (
      <main className="bg-[#080404] text-white w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative no-scrollbar">

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

         {/* Z-INDEX 0: BACKGROUND CỐ ĐỊNH */}
         <div className="fixed inset-0 z-0 pointer-events-none">
            <img src={bgImage} className="w-full h-full object-cover brightness-[0.5] contrast-[1.2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#080404]/80 to-[#080404]" />
         </div>

         {/* NAVBAR */}
         <nav className="fixed top-0 left-0 w-full z-50 px-12 py-10 flex justify-end items-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
               {['Khởi đầu', 'Giá trị', 'Nghiên cứu', 'Di sản'].map(item => (activeSection === item ? <span key={item} className="text-[#D4AF37] font-black">{item}</span> : <a key={item} href={`#${item}`} className="hover:text-[#D4AF37] transition-all">{item}</a>))}
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
                  <h2 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-6xl md:text-[8rem] font-bold tracking-normal text-white uppercase mb-4 leading-none text-center">HỒ CHÍ MINH</h2>
                  <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-2xl md:text-5xl italic text-white/80 mb-20 text-center">ĐỐI NGOẠI HIỆN ĐẠI</h3>
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
                     <button className="px-14 py-5 bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-3xl text-left">HỆ GIÁ TRỊ TƯ TƯỞNG</button>
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
                        <img src={OfficialMap} alt="Viet Nam Sovereign Map" className="w-full h-full object-contain filter contrast-150 brightness-75 mix-blend-screen" />
                        <div className="absolute top-[35%] right-[20%] text-[11px] font-black text-white uppercase tracking-[0.5em] drop-shadow-2xl">QUẦN ĐẢO <br /> HOÀNG SA</div>
                        <div className="absolute bottom-[25%] right-[30%] text-[11px] font-black text-white uppercase tracking-[0.5em] drop-shadow-2xl">QUẦN ĐẢO <br /> TRƯỜNG SA</div>
                     </motion.div>
                     <div className="absolute inset-0 bg-[#0a0505]/30 pointer-events-none" />
                  </div>
               </div>
            </div>
         </Section>

         {/* SECTION 3: NGHIÊN CỨU */}
         <Section id="Nghiên cứu" className="!p-0 bg-[#080404] overflow-hidden">
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
               <motion.img initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} src={BacNPT} alt="Bac Trong Background" className="w-full h-full object-cover object-center filter brightness-[1.1] contrast-[1.15]" />
               <div className="absolute inset-0 z-10 opacity-[0.4] mix-blend-screen pointer-events-none">
                  <img src={bgImage} className="w-full h-full object-cover filter blur-[1px] scale-110" />
               </div>
               <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#080404] via-[#080404]/40 to-transparent z-30" />
            </div>
            <div className="relative w-full h-full max-w-[1920px] mx-auto z-40 flex flex-col justify-center text-left">
               <div className="px-12 lg:px-44 w-full lg:w-3/5">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                     <div className="flex items-center gap-4 mb-6"><div className="w-8 h-[2px] bg-red-700" /><span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em]">Tiêu điểm đối ngoại</span></div>
                     <h2 className="text-white text-4xl lg:text-5xl font-[1000] uppercase tracking-normal leading-tight mb-4 text-left">TỔNG BÍ THƯ <br /><span className="text-[#D4AF37]">NGUYỄN PHÚ TRỌNG</span></h2>
                     <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] mb-12">Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam</p>
                     <div className="max-w-xl space-y-10">
                        <div className="relative border-l-2 border-red-700/50 pl-6">
                           <p style={{ fontFamily: "'Times New Roman', Times, serif" }} className="text-white/90 italic text-xl lg:text-3xl leading-[1.6]">
                              "Quyết tâm xây dựng và phát triển nền đối ngoại, ngoại giao Việt Nam hiện đại, mang đậm bản sắc 'Cây tre Việt Nam' — Gốc vững, thân chắc, cành uyển chuyển."
                           </p>
                        </div>
                        <button onClick={() => setShowVideo(true)} className="flex items-center gap-6 p-2 bg-red-800 hover:bg-red-700 border border-white/10 rounded-full text-white transition-all shadow-4xl group pr-10 scale-90">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-800 group-hover:scale-110 transition-transform"><ChevronRight size={20} strokeWidth={3} /></div>
                           <span className="text-[9px] font-black uppercase tracking-[0.4em]">XEM PHIM TƯ LIỆU</span>
                        </button>
                     </div>
                  </motion.div>
               </div>
            </div>
         </Section>

         {/* SECTION 4: DI SẢN - UNIFIED 3D BOOK */}
         <Section id="Di sản" className="overflow-hidden" style={{ background: 'radial-gradient(circle, #2a0808 0%, #020202 100%)' }}>
            <div className="relative w-full h-full flex items-center justify-center p-20 text-black">
               <motion.div
                  key="unified-book"
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  animate={{
                     opacity: 1,
                     scale: 1,
                     y: 0,
                     x: currentPage === 0 ? "-25%" : "0%"
                  }}
                  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="relative w-full max-w-[1700px] aspect-[16/9.5]"
                  style={{ transformStyle: 'preserve-3d' }}
               >
                  <div className="w-full h-full relative book-3d">
                     <div className={`absolute left-0 top-1 bottom-1 bg-white/90 rounded-l-2xl border-l-[8px] border-black/5 stack-edge-right transition-all duration-700 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`} style={{ width: `${(currentPage / (totalSheets + 1)) * 40}px`, left: `-${(currentPage / (totalSheets + 1)) * 40}px` }} />
                     <div className="absolute right-0 top-1 bottom-1 bg-white/90 rounded-r-2xl border-r-[8px] border-black/5 stack-edge-right transition-all duration-700" style={{ width: `${((totalSheets + 1 - currentPage) / (totalSheets + 1)) * 40}px`, right: `-${((totalSheets + 1 - currentPage) / (totalSheets + 1)) * 40}px` }} />
                     <div className="absolute inset-0 grid grid-cols-2 shadow-2xl">
                        <div className={`page-soft-gradient rounded-l-[15px] border-r border-black/5 shadow-inner transition-opacity duration-700 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`} />
                        <div className="page-soft-gradient rounded-r-[15px] border-l border-black/5 shadow-inner" />
                     </div>

                     <div className={`absolute left-0 inset-y-0 w-1/2 bg-[#3a0a0a] rounded-l-[15px] -z-10 shadow-2xl transition-opacity duration-700 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`} />

                     <div className="absolute inset-y-0 left-0 w-1/2 z-[200] cursor-pointer" onClick={() => setCurrentPage(p => Math.max(0, p - 1))} />
                     <div className="absolute inset-y-0 right-0 w-1/2 z-[200] cursor-pointer" onClick={() => setCurrentPage(p => Math.min(totalSheets, p + 1))} />

                     {/* SHEET 0: INTEGRATED COVER */}
                     <div className="sheet" style={{ zIndex: currentPage === 0 ? 100 : 5, transform: `rotateY(${currentPage > 0 ? -180 : 0}deg)` }}>
                        <div className="page page-front rounded-r-[15px] overflow-hidden shadow-2xl p-0">
                           <div className="w-full h-full bg-[#1e0808] border-l-[20px] border-[#3a0a0a] relative overflow-hidden">
                              <img src={FinalPoster} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                              <div className="absolute inset-0 flex flex-col items-center justify-start pt-72 p-12 text-center text-white">
                                 <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-6 text-[#FFD700] drop-shadow-[0_0_25px_rgba(212,175,55,1)]">
                                    Tư tưởng Hồ Chí Minh về đối ngoại <br />
                                    <span className="text-[#FFD700] text-xl lg:text-2xl opacity-100">và sự vận dụng trong Văn kiện Đại hội XIII của Đảng</span>
                                 </h4>
                                 <div className="w-24 h-[1px] bg-[#D4AF37]/50 mt-4" />
                              </div>
                           </div>
                        </div>
                        <div className="page page-back page-soft-gradient rounded-l-[15px] p-8 lg:p-12 overflow-hidden forced-black-ink focus-within:z-50">
                           <div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" />
                           <div className="relative z-30 space-y-4 font-['Times_New_Roman'] text-[#1c0a0a] text-[17px] lg:text-[18px] leading-relaxed text-left">
                              <p className="indent-10 border-t border-black/10 pt-4 italic text-justify">
                                 (LLCT) - Tư tưởng Hồ Chí Minh về đối ngoại cho đến nay vẫn còn nguyên giá trị lý luận và thực tiễn sâu sắc. Tại Đại hội XIII của Đảng, đối ngoại của Đảng có những điều chỉnh, bổ sung, phát triển, vừa phù hợp với xu thế quốc tế, vừa phù hợp với chuyển biến của thực tiễn đất nước sau 35 năm đổi mới. Bài viết làm rõ tư tưởng Hồ Chí Minh về đối ngoại và sự vận dụng của Đảng trong Văn kiện Đại hội XIII.
                              </p>
                              <h3 className="text-xl font-bold text-[#b08d26] border-b border-red-900/10 pb-1 uppercase">1. Tư tưởng Hồ Chí Minh về đối ngoại</h3>
                              <p className="indent-10 text-justify">Hồ Chí Minh là nhà ngoại giao kiệt xuất, người sáng lập nền ngoại giao hiện đại Việt Nam. Người luôn quan tâm chỉ đạo công tác đối ngoại nhằm xây dựng khối đoàn kết quốc tế, tranh thủ sự ủng hộ của các nước và nhân dân yêu chuộng hòa bình trên thế giới với sự nghiệp cách mạng của Đảng và nhân dân Việt Nam. Tại Đại hội XIII của Đảng, đường lối đối ngoại của Đảng đã kế thừa quan điểm các Đại hội trước và có những điều chỉnh, bổ sung phù hợp; đặc biệt là sự vận dụng đúng đắn, sáng tạo tư tưởng Hồ Chí Minh về đối ngoại trong điều kiện mới. Thực tiễn hoạt động cách mạng cùng nền tảng tri thức và vốn văn hóa đã kết tinh ở Hồ Chí Minh hệ thống tư tưởng toàn diện, sâu sắc. Trong đó, tư tưởng của Người về đối ngoại chứa đựng nhiều nội dung không chỉ bền vững qua thời gian, mà còn có những tư duy đi trước thời đại; thể hiện ở những điểm sau:</p>
                           </div>
                        </div>
                     </div>

                     {sheets.map((sheet, index) => (
                        <div key={index} className="sheet" style={{ zIndex: currentPage > index + 1 ? index + 10 : totalSheets - index + 10, transform: `rotateY(${currentPage > index + 1 ? -180 : 0}deg)` }}>
                           <div className="page page-front page-soft-gradient rounded-r-[15px] p-8 lg:p-12 overflow-y-auto no-scrollbar forced-black-ink"><div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" />{sheet.front}</div>
                           <div className="page page-back page-soft-gradient rounded-l-[15px] p-8 lg:p-12 overflow-y-auto no-scrollbar forced-black-ink"><div className="absolute inset-0 gutter-shadow opacity-50 z-20 pointer-events-none" /><div style={{ transform: 'rotateY(0deg)' }}>{sheet.back}</div></div>
                        </div>
                     ))}

                     <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-black/20 z-[250] blur-[1.5px]" />
                  </div>
               </motion.div>
            </div>
         </Section>

         {showVideo && (
            <div className="fixed inset-0 z-[150] bg-black/98 flex items-center justify-center p-24 backdrop-blur-3xl" onClick={() => setShowVideo(false)}>
               <div className="w-full max-w-6xl aspect-video rounded-sm overflow-hidden bg-black shadow-2xl border border-white/10">
                  <iframe
                     className="w-full h-full"
                     src="https://www.youtube.com/embed/1dbI31vF9Xs?autoplay=1&mute=0&controls=1&rel=0"
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  />
               </div>
            </div>
         )}
      </main>
   );
}