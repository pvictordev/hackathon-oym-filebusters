import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Navbar name={user ? user.displayName || "User" : "Guest"} />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
