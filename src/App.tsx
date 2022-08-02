import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../src/assets/css/flaticon.css"
import "../src/assets/css/font.css";
import "../src/assets/css/style.css";


import AppFooter from "./componentes/footer";
import HeaderApp from "./componentes/headerApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderApp />
        <Outlet />
        <AppFooter />
      </header>
    </div>
  );
}

export default App;
