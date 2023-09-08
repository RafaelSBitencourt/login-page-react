import { LoginPainel } from "../../components/Pages-components/login-page/login-painel";
import { LoginWallpaper } from "../../components/Pages-components//login-page/login-wallpaper";

export function LoginPage() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-1">
      <LoginWallpaper />
      <LoginPainel />
    </div>
  );
}
