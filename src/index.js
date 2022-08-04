import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIrfNy4b3E4T76R4NDG0Ab-PUq8NeDrdQ",
  authDomain: "celu-store.firebaseapp.com",
  projectId: "celu-store",
  storageBucket: "celu-store.appspot.com",
  messagingSenderId: "861848821206",
  appId: "1:861848821206:web:acd8568af2636025f6d877"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
