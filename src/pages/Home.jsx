import { useDispatch } from "react-redux"
import ImportantMatches from "../component/important-matches/ImportantMatches"
import LatestNews from "../component/latest-news/LatestNews"
import TodayMatches from "../component/today-matches/TodayMatches"
import { useEffect } from "react"
import { store } from "../store/store"
import { toggleActiveMode } from "../store/reducer2"

const Home = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(toggleActiveMode());
}, [])

  return (
    <>
      <TodayMatches />
      <LatestNews />
      <ImportantMatches />
    </>
  )
}

export default Home
