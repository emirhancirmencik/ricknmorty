import {useSelector} from "react-redux"
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Table from './Components/Table';


function App() {
  
  const nav = useSelector(state => state.nav.value)

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-green-700 pb-10">
      <Header />
      <HeroSection/>
      <Table nav={nav} />
    </div>
  );
}

export default App;
