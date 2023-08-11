import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import AddBudget from './components/Actions/AddBudget';
import IncreaseBudget from './components/Actions/DecreaseBudget';
import History from './components/History';
import CurrentMonthStatistic from './components/CurrentMonthStatistic';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
