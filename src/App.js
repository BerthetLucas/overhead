import Contact from "./mainpages/Contact"
import Home from "./mainpages/Home"
import Historique from "./mainpages/Historique"
import Discographie from "./mainpages/Discographie"
import Presentation from "./mainpages/Presentation"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/historique' element={<Historique />}/>
      <Route path='/discographie' element={<Discographie />}/>
      <Route path='/presentation' element={<Presentation />}/>
    </Routes>
  </Router>

  )
}

export default App;
