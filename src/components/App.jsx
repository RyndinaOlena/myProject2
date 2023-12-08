import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from './Navibar';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import User from './User'
import About from './About';

export const App = () => {
  return (
    <>
      <Navibar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/users' element={<User />} />
        <Route exact path='/about' element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
