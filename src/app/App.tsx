import { LoginPainel } from "../components/login-page/login-painel";
import { LoginWallpaper } from "../components/login-page/login-wallpaper";

import "../styles/utilities/display.css";
import "../styles/utilities/spaces.css";

import "./App.css";

function App() {
  return (
    <div className="grid__2c-1r height__full">
      <LoginWallpaper />
      <LoginPainel />
    </div>
  );
}

export default App;
