import { Link } from "react-router-dom"
import "./about-us.css"
import { useEffect } from "react"

const AboutUs = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="about-us container py-5">
      <h2>من نحن</h2>
      <p>
        هاتريك لايف – موقع أخباري نقدم خدمة أخبارية شاملة في مجال الرياضة العالمية والرياضة المحلية نهتم بكافة الاخبار الهامة في عالم الساحرة المستديرة ، كما نعرض للمتابعين اخبار الكورة العربية والافريقية والسودانية والسعودية والاسيوية بشكل سهل ومبسط حتي يتمكن القراء من الاستفاده من الخبر وذلك علي مدار اليوم كما ينضم الينا نخبة من المراسلين الذين يعملون جاهدين علي التغطية الاخبارية الرياضية الحصرية بشكل دائم تلك الاخبار يتم نقلها من مصادر موثوقة اهمها الملاعب الكروية التي تقام فيها المباريات كما يتم تغطية عدد من الاخبار من خلال مواقع حكومية رياضية ونتميز بنقل الاخبار بشكل كامل ونقدمها لزائرنا كما اننا لدينا مقر : جمهورية مصر العربية / القاهرة / المعادي .
      </p>
      <p>
        الهدف من موقعنا هاتريك لايف الذي تم اطلاقة مؤخراً هو رغبتنا الدائمة ان يكون الموقع الاول في تقديم الخدمة الاخبارية في عالم الرياضية كما لا ننسي الاهتمام بنقل المواعيد الخاصة بالمباريات والتشكيل المتوقع للفرق والمنتخبات ، وتقديم نبذات مختصره عن اخبار اللاعبين وايضا الصفقات التي تُعتمد في المرحلة الصيفية والمرحلة الشتوية كما اننا لا نتحيز الي نادي او مؤسسة بيعنها فقط نهتم بتقديم اخبار الرياضة دون تحيز بمنتهي الشفافية .
      </p>
      <p>
        تحترم اسرة موقع هاتريك لايف  كافة الحقوق المختلفة واهمها حقوق الطبع وحقوق النشر وحقوق الملكية الفكرية الخاصة بمؤسسي المواقع وخاصة المواقع الاخبارية الاخري والصحف والمجلات التي تقدم خدمه رياضية اخري تلك المؤساسات علي رأسها المؤسسات الحكومة او المؤسسات الخاصة وكذلك الافراد ، حيث انه في جعبتنا عدد لا بأس به من المراسلين القادرين علي تغطية كافة الاخبار والاحداث في عالم الرياضة سواء علي الناحية المحلية او العالمية.
      </p>
      <p>
        يحرص موقع هاتريك مباشر علي عدم انتهاك القوانين كما يمنع اي نسخ لمحتوي خاص بموقع اخر او محتوي لطائفة او عرق بعينة ونسعي دائماً ان ننشر اخبار رياضة يوميه وحصرية دون ان يسبقنا احد كما اننا نعمل علي التحقق من كافة الاخبار التي نقدمها قبل ان يتم الضغط علي زر النشر مرة واثنين حتي يتعين لنا الخبر انه ذات مصداقية وشفافية دون تحيز الي مذهب معين .
      </p>
      <h3>
        التواصل معنا مباشر من خلال هذا النموذج: <Link style={{textDecoration: "none"}} to="/contact-us">هنــا</Link>
      </h3>
    </div>
  )
}

export default AboutUs
