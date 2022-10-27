import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/UserContexts";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div id={theme}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
