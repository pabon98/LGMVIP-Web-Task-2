import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
        <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
         <Route path = "*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
