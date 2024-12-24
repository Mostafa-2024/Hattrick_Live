import { useParams } from "react-router-dom"
import { details } from "../../data/details"
import "./news-details.css"
import { useEffect } from "react"
import Section from "../section/Section"

const NewsDetails = () => {

  const {id} = useParams()
  const card = details[id - 1]
  const date = new Date().toLocaleDateString();

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <>
      <div className="news-details container my-4">
        <h3>{card.title}</h3>
        <p>كاتب:-القسم:اخبار الكورة- تاريخ النشر : <span>{date}</span></p>
        <div className="content">
          <img src={card.img} />
          <p>{card.description}{card.description}{card.description}</p>
        </div>
      </div>
      <Section title="هاتريك لايف  || Hattrick Live" description="موقع هاتريك لايف  يقدم بث مباشر لأهم المباريات مجاني وغير منقطع لجميع المباريات بدون تقطيع وبجودات متعددة اون لاين  موقع هاتريك لايف  الموقع الاول عربيا لمتابعة جميع البطولات العالمية علي سيرفرات متعددة الجودات اونلاين بالإضافة إلى بث أقوى مباريات الدول العربية ، وكذلك في برشلونة ، ريال مدريد وليفربول ومانشستر سيتي ومانشستر يونايتد وتشيلسي وبايرن ميونيخ وإيه سي ميلان وإنتر ميلان وأياكس أمستردام وغيرها من الفرق الدولية الكبرى يتم نقلها بين  ، ويتم نقل المباريات مباشرة إلى جميع الدول العربية ، مثل الأهلي المصري ، الزمالك المصري ، الوداد البيضاوي المغربي ، الدار البيضاء المغربي ، الترجي التونسي ، والنجم الساحلي التونسي ، الهلال السعودي ، العين الإماراتي وجميع البطولات القارية الأفريقية والآسيوية الأخرى ، لأنه ينقل جميع المباريات علي موقع بين ماتش مثل مونديال قطر 2022 وكأس أمم أوروبا 2020 وكأس أمريكا 2021 وتصفيات هذه البطولات بتعليقات عربية دون أي انقطاع. ومجانا."/>
    </>
  )
}

export default NewsDetails
