import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import "./App.css"
import { useState } from "react"


const App = () => {
   const [data, setData] = useState(0);
   const [gifSlide, setGifSlide] = useState([
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Live-now/Artboard-1.gif",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384_1.png",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif",
    "https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/update/712x384.jpg",
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Global/Artboard.jpg"
   ])

         const addNum = () => {
        setData (data + 1)
      }
      const subNum = () => {
        if (data > 0) {
          setData (data - 1)
        } else {
          setData (0)
        }
      }
  return (
    <main className="mainApp">
      <Header />
      <Hero />
      <Body />
      <Footer />
      <main className="edit">
        <div className="addSub">
        <button onClick={subNum} className="tryEdit">-</button>
        {/* <span>{data}</span> */}
        <img src={gifSlide[data % gifSlide.length]} alt="slide" />
        <button onClick={addNum} className="tryEdit">+</button>
      </div>
      </main>
    </main>
  )
}

export default App
