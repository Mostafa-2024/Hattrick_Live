import { Container, Nav, Navbar } from "react-bootstrap"
import img from "../../assets/logo.png"
import "./header.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleDarkMode } from "../../store/reducer"
import { BiUpArrow } from "react-icons/bi"

const Header = () => {

  const navLists = useRef([]);
  const upArrow = useRef();
  const darkSate = useSelector(state => state.darkModeStatue);
  const activeSate = useSelector(state => state.activeModeStatue);
  const dispatch = useDispatch(); 

  useEffect(() =>{
    if(darkSate) {
      document.documentElement.setAttribute("data-bs-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light")
    }
  }, [darkSate])


  useEffect(() => {
    navLists.current.forEach(el => {
      el.classList.remove("active")
    });
    navLists.current[0].classList.add("active");
    navLists.current.forEach(el => {
      el.addEventListener("click", (e) => {
        navLists.current.forEach(el => {
          el.classList.remove("active")
        });
        navLists.current.forEach(el => {
          e.target.classList.add("active")
        })
      })
    })
    window.addEventListener("scroll", () => {
      if(scrollY >= 300) {
        upArrow.current.style.display = "block";
      } else {
        upArrow.current.style.display = "none";
      }
    })
    upArrow.current.addEventListener("click", () => {
      window.scrollTo(0, 0);
    })
  }, [activeSate])

  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary bg-dark nav-parent" data-bs-theme="dark">
      <Container className="px-0">
        <Navbar.Brand as={Link} to="/"><div className="logo-container"><img src={img} alt="logo" className="first" /> <span className="last">مـبـاشـــر</span></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-parent2">
          <Nav className="match-nav gap-1">
            <Nav.Link as={Link} to="/" className="active" ref={el => navLists.current[0]=el}>الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/news" ref={el => navLists.current[1]=el}> الأخـبـار</Nav.Link>
            <Nav.Link as={Link} to="/matches-today" ref={el => navLists.current[2]=el}>اهم المبارايات</Nav.Link>
            <Nav.Link as={Link} to="/leagues-rank" ref={el => navLists.current[3]=el}>ترتيب الفرق</Nav.Link>
            <Nav.Link as={Link} to="/scorers-rank" ref={el => navLists.current[4]=el}>ترتيب الهدافين</Nav.Link>
          </Nav>
          <div className="icons me-auto">
            <FaTwitter/>
            <FaFacebookF />
            <FaInstagram />
            <span className="dark-mode" onClick={() => dispatch(toggleDarkMode())}><MdDarkMode /></span>
          </div>
          <div className="up" ref={upArrow}><BiUpArrow /></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
