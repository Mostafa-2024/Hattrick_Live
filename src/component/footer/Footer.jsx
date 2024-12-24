import { HiHeart } from "react-icons/hi"
import { Link, Links } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="first">© حـقـوق الـنـشـر 2024، جـمـيـع الـحـقـوق مـحـفـوظـة | <Link className="hattrick" style={{textDecoration: "none",color: "var(--words-color)", marginRight: "5px"}} to="/">هــاتــريــك<HiHeart /></Link></div>
        <div className="last">
          <Link to="/privacy-policy">سياسة الخصوصية </Link>
          <Link to="/about-us">من نحن</Link>
          <Link to="/contact-us">اتصل بنا</Link>
          <Link to="https://yacine-app.com/">ياسين تيفي Yacine TV</Link>
          <Link to="https://livehd77.pro/">الاسطورة livehd77</Link>
          <Link to="https://goalarab.org/">جول العرب goalarab </Link>
          <Link to="https://yallalive.sx/">يلا لايف yalla live</Link>
          <Link to="https://5tv.kora-star.com/">كورة ستار kora star</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
