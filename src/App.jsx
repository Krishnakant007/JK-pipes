

// // import Tailwind from './components/Tailwind';
// import Carousel from './components/Carousel';
// import ProductCategories from './components/ProductCategories';
// // import CompanyVideo from './components/CompanyVideo';
// // import AboutUs from './components/AboutUs';
// // import ContactUs from './components/ContactUs';
// // import Footer from './components/Footer';

// import Header from "./components/Header";
// import Footer from './components/Footer';
// import ReachUs from './components/ReachUs';
// import CompanyInfo from './components/CompanyInfo';
// import ContactForm from './components/ContactForm';

// function App() {
//   return (
//     <div>
    
      
    
//       <Header />
//       <Carousel />
//       <CompanyInfo/>
//       <ProductCategories />
//      <ContactForm/>
//       <ReachUs/>
//       <Footer />
      

    
//     </div>
//   );
// }

// export default App;


// <Route path="/" element={<CompanyInfo />} />


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import ReachUs from './components/ReachUs';
import CompanyInfo from './components/CompanyInfo';
import ContactForm from './components/ContactForm';
import Carousel from './components/Carousel';
import ProductCategories from './components/ProductCategories';
import SWRProductScreen from './screens/SWRProductScreen';
import HDPEProductScreen from './screens/HDPEProductScreen';
import PVCProductScreen from './screens/PVCProductScreen';
import HDPECoilScreen from './screens/HDPECoilScreen';
import UPVCProductScreen from './screens/UPVCProductScreen';
import RatingCarousel from './components/RatingCarousel';
import DetailScreen from './details/DetailScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <CompanyInfo />
            <ProductCategories />
            <RatingCarousel/>
            <ContactForm />
            <ReachUs />
          </>
        } />
        <Route path="/swr" element={<SWRProductScreen />} />
        <Route path="/hdpe" element={<HDPEProductScreen />} />
        <Route path="/pvc" element={<PVCProductScreen />} />
        <Route path="/hdpecoil" element={<HDPECoilScreen />} />
        <Route path="/upvc" element={<UPVCProductScreen />} />
       
            <Route path="/details" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
