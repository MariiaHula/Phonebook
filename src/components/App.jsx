import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Phonebook from '../pages/Phonebook';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Phonebook />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
