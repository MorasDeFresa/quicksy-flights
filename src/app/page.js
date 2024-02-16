// src/app/page.js

// Agrega la directiva "use client" al principio del archivo
// para indicar que este es un componente del lado del cliente.
// use client

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/router';

export default function Home() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
