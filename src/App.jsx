

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


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import HeaderText from "./components/HeaderText";

// import Footer from './components/Footer';
// import ReachUs from './components/ReachUs';
// import CompanyInfo from './components/CompanyInfo';
// import ContactForm from './components/ContactForm';
// import Carousel from './components/Carousel';
// import ProductCategories from './components/ProductCategories';
// import SWRProductScreen from './screens/SWRProductScreen';
// import HDPEProductScreen from './screens/HDPEProductScreen';
// import PVCProductScreen from './screens/PVCProductScreen';
// import HDPECoilScreen from './screens/HDPECoilScreen';
// import UPVCProductScreen from './screens/UPVCProductScreen';
// import RatingCarousel from './components/RatingCarousel';
// import DetailScreen from './details/DetailScreen';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Carousel />
//             <HeaderText/>
//             <CompanyInfo />
//             <ProductCategories />
//             <RatingCarousel/>
//             <ContactForm />
       
//           </>
//         } />
//         <Route path="/swr" element={<SWRProductScreen />} />
//         <Route path="/hdpe" element={<HDPEProductScreen />} />
//         <Route path="/pvc" element={<PVCProductScreen />} />
//         <Route path="/hdpecoil" element={<HDPECoilScreen />} />
//         <Route path="/upvc" element={<UPVCProductScreen />} />
       
//             <Route path="/details" element={<DetailScreen />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import HeaderText from "./components/HeaderText";

import Footer from './components/Footer';
import Carousel from './components/Carousel';
import CompanyInfo from './components/CompanyInfo';
import ProductCategories from './components/ProductCategories';
import ContactForm from './components/ContactForm';
import ReachUs from './components/ReachUs';
import RatingCarousel from './components/RatingCarousel';
import SWRProductScreen from './screens/SWRProductScreen';
import HDPEProductScreen from './screens/HDPEProductScreen';
import PVCProductScreen from './screens/PVCProductScreen';
import HDPECoilScreen from './screens/HDPECoilScreen';
import UPVCProductScreen from './screens/UPVCProductScreen';
import DetailScreen from './details/DetailScreen';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'products':
        return <ProductCategories />;
      case 'contact':
        return <ContactForm />;
      case 'About':
        return <ReachUs />;
      default:
        return (
          <>
            <Carousel />
  
             <HeaderText/>
            <CompanyInfo />
            <ProductCategories/>
            <RatingCarousel />
          </>
        );
    }
  };

  return (
    <Router>
      <Header setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/" element={renderContent()} />
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
