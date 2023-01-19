import './App.css';

// The import of pages
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Company from './Pages/Company';

// Imports Required
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
