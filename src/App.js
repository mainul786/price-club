import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart';
import BarPhone from './components/BarPhone/BarPhone';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Rechart></Rechart>
      <BarPhone></BarPhone>
    </div>
  );
}

export default App;
