import React   from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import Soaps from "./components/Soaps"
// import Category from "./components/Category"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <Soaps />
      {/* <Category /> */}
    </div>
  );
}

export default App;
