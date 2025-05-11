import React from 'react';
import { Route, Routes } from "react-router-dom";
import GraphicDesignPortfolio from './GraphicDesignPortfolio';

function Navpage() {
  return (
    <Routes>
        <Route path="/graphic-design-portfolio" element={<GraphicDesignPortfolio />} />
    </Routes>
  )
}

export default Navpage;