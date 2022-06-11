import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStatus } from './hooks/useAuthStatus';
import Loading from './Loading';

const PrivateRoute = () => {
  const { loading, loggedIn } = useAuthStatus();

  if (loading) {
    return <Loading />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
