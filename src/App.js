
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Favicon from "react-favicon";
import HomeHeader from './components/HomeScreen'
import Services from './components/Services'
import CareerScreen from './components/CareerScreen'
import ServicesTypet from './components/ServicesTypet'
import Portfolio from './components/Portfolio'
const App =()=> {
  return (
    <>
    <Favicon url='https://www.novuslab.io/logo.svg'/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeHeader />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/career' element={<CareerScreen/>}/>
          <Route exact path='/portfolio' element={<Portfolio/>}/>
          <Route exact path='/ServicesType' element={<ServicesTypet/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
