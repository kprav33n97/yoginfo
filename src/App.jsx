import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
// import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense>
        <Header />
        <Hero />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
