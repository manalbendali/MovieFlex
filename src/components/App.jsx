import {  Routes, Route, useLocation} from "react-router-dom"
import GlobalStyle from "../style/GlobalStyle"

//import SignUp from "./Authetification_system/SignUp.css"
import WeeWeeklyMovies from "../components/ShowMovies/WeeklyMovies"
import Reservation from "../pages/Reservation"
import Profile from "../pages/Profile"
import Description from "../pages/Description"
import Login from "../pages/Login"
import Nav from "./Nav"
import Home_page from "./Home_page"
import SignUp from "../pages/signUp"
function App() {
  const location = useLocation();

  return (
    <>
    <GlobalStyle />
    <>
    <Nav />
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home_page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movies" element={<WeeWeeklyMovies />} />
            <Route path="/description/:id" element={<Description />} />
            <Route path="/reservation/:id" element={<Reservation />} />
            <Route path="/reservationCompleted/:id" element={<Home_page />} />
        </Routes>
        </>
     
    </>
  )
}

export default App
