import {Route, Routes} from 'react-router-dom'

import './App.css'
import Layout from './components/layout/Layout'
import About from './pages/About';
import Homepage from './pages/Homepage'
import Menu from './pages/Menu';

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App
