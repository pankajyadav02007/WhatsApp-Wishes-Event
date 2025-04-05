import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from "./pages/Home";
import MessagePage from "./pages/Message";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/:name" element={<MessagePage/>} />
    <Route path="*" element={<NotFoundPage/>} />
   </Routes>
    </>
  );
}

export default App
