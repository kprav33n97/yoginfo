import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
// import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import { Suspense } from "react";
import Twocol from "./Components/Twocol/Twocol";

function App() {
  return (
    <>
      <Suspense>
        <Header />
        <Hero />
        <Twocol />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
