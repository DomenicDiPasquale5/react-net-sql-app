import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutRoute from './Routes/AboutRoute';
import MessagesRoute from './Routes/MessagesRoute';
import HomeRoute from './Routes/HomeRoute';

import NavigationBarComponent from './Components/NavigationBarComponent';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBarComponent />}>
            <Route index element={<HomeRoute />} />
            <Route path="messages" element={<MessagesRoute />} />
            <Route path="about" element={<AboutRoute />} />
            {/*<Route path="*" element={<ErrorRoute />} />*/}
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
