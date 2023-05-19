// import AboutUs from './container/AboutUs/AboutUs';
// import Chef from './container/Chef/Chef';
// import FindUs from './container/Findus/FindUs';
// import Footer from './container/Footer/Footer';
// import Gallery from './container/Gallery/Gallery';
// import Header from './container/Header/Header';

// export {
//   AboutUs,
//   Chef,
//   Header,
// };

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>
);
