import Home from "./Components/Home";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <main className="font-font py-10 overflow-x-hidden">
      <Nav />
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>
      </Routes>
    </Router>
    </main>
  );
}
export default App;
