import React from "react";
import { createBrowserRouter } from "react-router-dom";

// const InvoiceLayout = React.lazy(() => import("../layouts/InvoiceLayout"));
// const PassportLayout = React.lazy(() => import("../layouts/PassportLayout"));
// const PrivateLayout = React.lazy(() => import("../layouts/PrivateLayout"));

import {
  PrivateLayout,
  IdentityLayout,
  InvoiceLayout,
  PassportLayout,
  ServicesLayout,
} from "@/layouts";

const IdentityExtraction = React.lazy(
  () => import("@features/identity/pages/IdentityExtraction")
);
const IdentityCustomExtraction = React.lazy(
  () => import("@features/identity/pages/IdentityCustomExtraction")
);

export enum Routes {
  PrivateLayout = "/",
  ServicesLayout = "/services",
  IdentityLayout = "/services/identity",
  IdentityExtraction = "/services/identity/template-extraction",
  IdentityCustomExtraction = "/services/identity/custom-template-extraction/:identityCustomTemplateId",
  InvoiceLayout = "/services/invoice",
  PassportLayout = "/services/passport",
}

export const router = createBrowserRouter([
  {
    path: Routes.PrivateLayout,
    element: <PrivateLayout />,
  },
  {
    path: Routes.ServicesLayout,
    element: <ServicesLayout />,
  },
  {
    path: Routes.IdentityLayout,
    element: <IdentityLayout />,
    children: [
      // { index: true, element: <IdentityLayout /> },
      { path: Routes.IdentityExtraction, element: <IdentityExtraction /> },
      {
        path: Routes.IdentityCustomExtraction,
        element: <IdentityCustomExtraction />,
      },
    ],
  },
  {
    path: Routes.InvoiceLayout,
    element: <InvoiceLayout />,
  },
  {
    path: Routes.PassportLayout,
    element: <PassportLayout />,
  },
]);
