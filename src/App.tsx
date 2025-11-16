import { Outlet } from "react-router";
import cs from "./App.module.scss";

function App() {
  return (
    <div className={cs.frame}>
      <div className={cs.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
