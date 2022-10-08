import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <main className="font-font py-10 overflow-x-hidden">
      <Navbar />
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>
      </Routes>
    </Router>
    </main>
  );
}
export default App;
