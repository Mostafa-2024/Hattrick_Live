import { Outlet } from "react-router-dom"
import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import "./main-layout.css"

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
