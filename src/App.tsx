// Import our custom CSS
import Footer from './index/Footer';
//import './assets/scss/styles.scss'
import "./assets/scss/laapp.scss";
import DefaultNavbar from './components/Navbars/DefaultNavbar';
import Features from './index/content/Features';
import Heading from './index/content/Heading';
import MultipleDesignBlocks from './index/content/MultipleDesignBlocks';
import Partners from './index/content/Partners';
import Pricing from './index/content/Princing';
//import "./assets/scss/demo.scss";

function App() {
  return (
    <>
      <DefaultNavbar useOnlyDarkLogo={true} />
      <main>
        <Heading />
        <Partners />
        <Features />
        <Pricing />
        <MultipleDesignBlocks />
      </main>
      <Footer />
    </>
  )
}

export default App
