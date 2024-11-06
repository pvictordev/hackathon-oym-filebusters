import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";


function App() {
  return (
    <>
      <h1 className="text-red-500">This is navigation (title and user status account)</h1>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
