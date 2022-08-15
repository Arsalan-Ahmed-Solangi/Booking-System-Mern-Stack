//***End of Importing*******//
import React from "react";
import {Route,Routes,BrowserRouter}  from "react-router-dom";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotels";
import List from "./pages/list/List";
//***End of Importing*******//

function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/hotels" element={<List/>}/>
           <Route path="/hotels/:id" element={<Hotels/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
