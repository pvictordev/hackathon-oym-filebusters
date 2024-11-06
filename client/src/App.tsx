import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <>
      <Navbar name={"Victor"}></Navbar>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
