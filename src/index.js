import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Store from './App/Store';
import { Provider } from 'react-redux';
import Home from './Components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <App />
      <Routes>
        <Route path='/' element={<Register/>}/> 
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/home' element={<Home/>}/>
       
      </Routes>
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
);


