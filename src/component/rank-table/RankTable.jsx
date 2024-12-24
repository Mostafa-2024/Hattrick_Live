import LeagueItem from "../league-item/LeagueItem"
import "./rank-table.css"
import img1 from "../../assets/europa-league.png"
import img2 from "../../assets/champions-league-v3-150x150.png"
import img3 from "../../assets/moroccan-league-v2.png"
import img4 from "../../assets/europa-conference-league-150x150.png"
import img5 from "../../assets/egyptian-league.png"
import img6 from "../../assets/bundesliga-v2-150x150.png"
import img7 from "../../assets/ligue-1-v2-150x150.png"
import img8 from "../../assets/saudi-mbs-v2-150x150.png"
import img9 from "../../assets/serie-a-v3-150x150.png"
import img10 from "../../assets/12-3-150x150.png"
import img11 from "../../assets/premier-league-150x150.png"
import img12 from "../../assets/serie-a.png"
import img13 from "../../assets/download-18-115x150.png"
import img14 from "../../assets/bundesliga.png"
import img15 from "../../assets/barclays-premier-league.png"
import img16 from "../../assets/la-liga-150x150.png"
import Section from "../section/Section"

const RankTable = (props) => {
  return (
    <>
      <div className="table-rank container rounded-2 px-0">
        <h3 className="mb-0"><span className="rounded">{props.type}</span></h3>
        <div className=" p-3 pt-4"><LeagueItem img={img1} title="جدول ترتيب مجموعات الدوري الأوروبي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img2} title="جدول ترتيب مجموعات دوري أبطال أوروبا 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img3} title="جدول ترتيب فرق الدوري المغربي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img4} title="جدول ترتيب فرق دوري المؤتمر الأوروبي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img5} title="جدول ترتيب فرق الدوري المصري 2020/2021" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img6} title="جدول ترتيب فرق الدوري الألماني 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img7} title="جدول ترتيب فرق الدوري الفرنسي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img8} title="جدول ترتيب فرق الدوري السعودي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img9} title="جدول ترتيب فرق الدوري الإيطالي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img10} title="جدول ترتيب فرق الدوري الإسباني 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img11} title="جدول ترتيب فرق الدوري الإنجليزي 2021/2022" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img12} title="جدول ترتيب فرق الدوري الإيطالي 2019/2020" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img13} title="ترتيب الدوري الفرنسي 2019-2020" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img14} title="ترتيب الدوري الالماني 2019-2020" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img15} title="ترتيب الدوري الانجليزي 2019-2020" button={props.type}/></div>
        <div className=" p-3 pt-2"><LeagueItem img={img16} title="ترتيب الدوري الاسباني 2019-2020" button={props.type}/></div>
      </div>
      <Section title="هاتريك لايف  || Hattrick Live" description="موقع هاتريك لايف  يقدم بث مباشر لأهم المباريات مجاني وغير منقطع لجميع المباريات بدون تقطيع وبجودات متعددة اون لاين  موقع هاتريك لايف  الموقع الاول عربيا لمتابعة جميع البطولات العالمية علي سيرفرات متعددة الجودات اونلاين بالإضافة إلى بث أقوى مباريات الدول العربية ، وكذلك في برشلونة ، ريال مدريد وليفربول ومانشستر سيتي ومانشستر يونايتد وتشيلسي وبايرن ميونيخ وإيه سي ميلان وإنتر ميلان وأياكس أمستردام وغيرها من الفرق الدولية الكبرى يتم نقلها بين  ، ويتم نقل المباريات مباشرة إلى جميع الدول العربية ، مثل الأهلي المصري ، الزمالك المصري ، الوداد البيضاوي المغربي ، الدار البيضاء المغربي ، الترجي التونسي ، والنجم الساحلي التونسي ، الهلال السعودي ، العين الإماراتي وجميع البطولات القارية الأفريقية والآسيوية الأخرى ، لأنه ينقل جميع المباريات علي موقع بين ماتش مثل مونديال قطر 2022 وكأس أمم أوروبا 2020 وكأس أمريكا 2021 وتصفيات هذه البطولات بتعليقات عربية دون أي انقطاع. ومجانا."/>
    </>
  )
}

export default RankTable
