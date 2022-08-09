import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import './styles/main.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './Home/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
