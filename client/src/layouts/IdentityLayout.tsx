import { Routes } from "@/router/router";
import { Link, Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <>
      <div>Identity Services</div>
      <div>
        <div>
          <Link to={Routes.IdentityExtraction}>
            Visualize extracted data beside the image + export in different
            formats
          </Link>
        </div>
        <div>
          <Link to={Routes.IdentityCustomExtraction}>
            Create custom templates to see data
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default IdentityLayout;
