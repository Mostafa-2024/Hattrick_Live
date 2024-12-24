import { Link, Links } from "react-router-dom"
import { details } from "../../data/details"
import Section from "../section/Section"
import "./latest-news.css"
const LatestNews = () => {

  function upToUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="latest-news container mb-4 pe-4">
      <h2 >اخر الاخبار</h2>
      <div className="news-items">
        {details.map((element, index) => 
          <div key={element.id} className="news-item">
          <img src={element.img} alt=""/>
          <h3 className="px-3 pt-3 mb-2">{element.title}</h3>
          <p className="px-3 mb-2">{element.description}</p>
          <div className="button px-3 pb-3"><Link className="p-1 rounded button" to={`/details/${element.id}`}  >اقرا المزيد</Link></div>
        </div>
        )}
        <div className="button" onClick={upToUp}><Link to="/news/page/2" className="more rounded">عرض المزيد</Link></div>
      </div>
      <Section title="هاتريك لايف  || Hattrick Live" description="موقع هاتريك لايف  يقدم بث مباشر لأهم المباريات مجاني وغير منقطع لجميع المباريات بدون تقطيع وبجودات متعددة اون لاين  موقع هاتريك لايف  الموقع الاول عربيا لمتابعة جميع البطولات العالمية علي سيرفرات متعددة الجودات اونلاين بالإضافة إلى بث أقوى مباريات الدول العربية ، وكذلك في برشلونة ، ريال مدريد وليفربول ومانشستر سيتي ومانشستر يونايتد وتشيلسي وبايرن ميونيخ وإيه سي ميلان وإنتر ميلان وأياكس أمستردام وغيرها من الفرق الدولية الكبرى يتم نقلها بين  ، ويتم نقل المباريات مباشرة إلى جميع الدول العربية ، مثل الأهلي المصري ، الزمالك المصري ، الوداد البيضاوي المغربي ، الدار البيضاء المغربي ، الترجي التونسي ، والنجم الساحلي التونسي ، الهلال السعودي ، العين الإماراتي وجميع البطولات القارية الأفريقية والآسيوية الأخرى ، لأنه ينقل جميع المباريات علي موقع بين ماتش مثل مونديال قطر 2022 وكأس أمم أوروبا 2020 وكأس أمريكا 2021 وتصفيات هذه البطولات بتعليقات عربية دون أي انقطاع. ومجانا."/>
    </div>
  )
}

export default LatestNews
