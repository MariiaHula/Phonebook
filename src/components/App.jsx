import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategoryLoader from './ContentLoader';
import Layout from './Layout';
import Home from '../pages/Home';
import Phonebook from '../pages/Phonebook';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';

import { refreshUserThunk } from 'redux/auth/operations';
import PrivateRoute from './hoc/PrivateRoute';
import { selectIsRefresh } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const refresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUserThunk());
    navigate(`/${location.pathname}`);
  }, [dispatch, location.pathname, navigate]);

  return (
    <>
      {refresh ? (
        <div className="flex justify-center items-center">
          <CategoryLoader />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Phonebook />
                  </PrivateRoute>
                }
              />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
};