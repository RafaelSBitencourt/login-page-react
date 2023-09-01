import { HomePage } from "../pages/home";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { autheticated } from "../routes/router";
import { ProtectedLayout } from "../components/ProtectedLayout";

function App() {
  return (
    <div className="h-full w-full height__full">
      <ProtectedLayout>
        <RouterProvider router={autheticated} />
      </ProtectedLayout>
    </div>
  );
}

export default App;
