import { Routes } from "@/router/router";
import { Link } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <>
      <h1>Services Available</h1>
      <div>
        <div>
          <Link to={Routes.IdentityLayout}>Identity Services</Link>
        </div>
        <div>
          <Link to={Routes.InvoiceLayout}>Invoice Services</Link>
        </div>
        <div>
          <Link to={Routes.PassportLayout}>Passport Services</Link>
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
