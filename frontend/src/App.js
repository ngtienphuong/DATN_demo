import {Routes, Route } from 'react-router-dom';
import AppRoute from './route/AppRoute';
import Admin from './admin/Admin'
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <Routes>
        <Route path="/admin/*" element={<Admin />}></Route>
        <Route path="/*" element={<AppRoute />}></Route>
    </Routes>
    </HelmetProvider>
  );
}

export default App;
