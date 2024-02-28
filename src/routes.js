import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import NavigationMenu from "components/NavigationMenu";
import About from "pages/About";
import Home from "pages/Home";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
