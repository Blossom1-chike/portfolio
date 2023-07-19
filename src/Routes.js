import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
