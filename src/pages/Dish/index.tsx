import styles from "./Dish.module.scss";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import menuItems from "data/menuItems.json";
import Tags from "components/Tags";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

const Dish = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = menuItems.find((element) => element.id === Number(id));
  if (!item) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.back} onClick={() => navigate(-1)}>
                {"< Voltar"}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{item.title}</h1>
                <div className={styles.image}>
                  <img src={item.photo} alt={item.title} />
                </div>
                <div className={styles.content}>
                  <p className={styles.content__description}>
                    {item.description}
                  </p>
                  <Tags {...item} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default Dish;
