import React, { lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/operations';
import PrivateRoute from './hoc/PrivateRoute';
import { selectIsRefresh } from 'redux/auth/selectors';
import CategoryLoader from './ContentLoader';
import Layout from './Layout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

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
        <div className="h-screen overflow-hidden">
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
