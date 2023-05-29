import "./style.css";
import "../../../styles/utilities/display.css";
import "../../../styles/utilities/spaces.css";

export function LoginWallpaper() {
  return (
    <div className="container-login-wallpaper flex__center--center gap__1-5 column padding__1">
      <img src="/public/boat-blue-logo.svg" width="250px" height="250px" />
      <h1 className="text-logo">Maré Náutica</h1>
    </div>
  );
}
