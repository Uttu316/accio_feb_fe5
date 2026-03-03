import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PracticePage from "./pages/practice";
import ProductDetail from "./pages/productDetail";
import ProductsPage from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/store" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
