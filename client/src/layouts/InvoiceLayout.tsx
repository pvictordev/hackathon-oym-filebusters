import { Routes } from "@/router/router";
import { Link } from "react-router-dom";

const InvoiceLayout = () => {
  return (
    <>
      <div>Invoice Services</div>
      <div>
        <div>
          <Link to={Routes.IdentityLayout}>
            Extract data and vizualize grouped in tables + export in different
            formats
          </Link>
        </div>
        <div>
          <Link to={Routes.IdentityLayout}>
            Extract data and vizualize it on boundaries + export in different
            formats
          </Link>
        </div>
        <div>
          <Link to={Routes.IdentityLayout}>
            Create custom templates to visualize extracted data
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceLayout;
