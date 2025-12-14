import { Outlet } from "react-router";
import { getBrowserLanguage } from "./helpers/getBrowserLanguage";
import { useEffect } from "react";

function App() {
  const language = getBrowserLanguage();
  const espanol = language.includes("es");

  useEffect(() => {
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const description = document.querySelector('meta[property="description"]');
    if (espanol) {
      ogDescription?.setAttribute(
        "content",
        "Isabella Guerra Uccelli es una escritora e investigadora bilingüe en inglés y español.",
      );
      description?.setAttribute(
        "content",
        "Isabella Guerra Uccelli es una escritora e investigadora bilingüe en inglés y español.",
      );
    }
  }, [espanol]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
