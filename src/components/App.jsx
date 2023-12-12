import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from './Navibar';
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import User from './User'


export const App = () => {
  return (
    <>
      <Navibar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/users' element={<User />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
