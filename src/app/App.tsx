import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="h-full w-full height__full">
      <Outlet />
    </div>
  );
}

export default App;
