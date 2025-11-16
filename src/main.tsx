import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Contact } from "./components/Contact/Contact.tsx";
import { WorkList } from "./components/WorkList/WorkList.tsx";
import { works } from "./works/works.tsx";
import { formatRoute } from "./components/WorkList/formatRoute.ts";
import { Reader } from "./components/Reader/Reader.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WorkList />} />
          <Route path="/contact" element={<Contact />} />
          {works.map((work) => {
            const { title, element } = work;
            if (!element) {
              return null;
            }
            return (
              <Route element={<Reader title={title} />} key={title}>
                <Route path={formatRoute(title)} element={element} />
              </Route>
            );
          })}
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
