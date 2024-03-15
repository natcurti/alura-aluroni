import Footer from "components/Footer";
import NavigationMenu from "components/NavigationMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Menu = lazy(() => import("pages/Menu"));
const DefaultPage = lazy(() => import("components/DefaultPage"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const Dish = lazy(() => import("pages/Dish"));
const About = lazy(() => import("pages/About"));

const AppRouter = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <NavigationMenu />
        <Suspense fallback={<p>Carregando....</p>}>
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<Home />} />
              <Route path="cardapio" element={<Menu />} />
              <Route path="sobre" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="prato/:id" element={<Dish />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
