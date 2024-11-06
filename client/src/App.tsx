import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";

function App() {
  return (
    <>
      <div>This is navigation (title and user status account)</div>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
