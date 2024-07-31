import {useState} from "react"
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Table from './Components/Table';


function App() {
  const [nav, setNav] = useState("All")

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-green-700 pb-10">
      <Header nav={nav} func={setNav}/>
      <HeroSection/>
      <Table nav={nav} />
    </div>
  );
}

export default App;
