import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Form/Register';
import Login from './components/Form/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile/Profile';
import Redirect from './components/Redirect';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Redirect to='/feed' />} />

        <Route path='/feed' element={<PrivateRoute />}>
          <Route
            path='/feed'
            element={
              <div className='flex flex-col'>
                <Header />
                <main className='w-full flex mt-[6.5rem] gap-4 flex-col md:flex-row md:max-w-3xl mx-auto lg:max-w-[80%] lg:px-[1rem]  '>
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </main>
              </div>
            }
          />
        </Route>

        <Route path='/profile' element={<PrivateRoute />}>
          <Route
            path='/profile'
            element={
              <>
                <Header />
                <main className='w-full flex mt-[6.5rem] gap-4 md:gap-8 flex-col lg:flex-row md:max-w-3xl mx-auto lg:max-w-[80%] lg:px-[1rem] '>
                  <Profile />
                  <Widgets />
                </main>
              </>
            }
          />
        </Route>
        <Route path='*' element={<Redirect to='404' />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
