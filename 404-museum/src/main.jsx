import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Exhibit from './pages/Exhibit.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles.css';
function ScrollManager(){const {pathname,hash}=useLocation();useEffect(()=>{if(hash){requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView())}else{window.scrollTo(0,0)}},[pathname,hash]);return null}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><ScrollManager/><Routes><Route path="/" element={<Home/>}/><Route path="/exhibition/:code" element={<Exhibit/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></React.StrictMode>);
