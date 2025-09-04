import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Filters from "./components/Filters";
import Layout from "./components/layout.tsx";

import "./style.module.scss";
import styles from "./style.module.scss";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div className={styles.loaderPage}>Loading...</div>}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <App />
                <Filters />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Suspense>
  </BrowserRouter>
);
