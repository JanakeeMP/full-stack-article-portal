import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFqnydesMSTzFu3T-HueVCuOaCcvyYLlE",
  authDomain: "full-stack-react-e9657.firebaseapp.com",
  projectId: "full-stack-react-e9657",
  storageBucket: "full-stack-react-e9657.firebasestorage.app",
  messagingSenderId: "178166994391",
  appId: "1:178166994391:web:606d8d02452b11ced26792"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
