import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";

import {
  DashboardLayout,
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
  DashboardLayout = "/",
  ServicesLayout = "/services",
  IdentityLayout = "/services/identity",
  IdentityExtraction = "/services/identity/template-extraction",
  IdentityCustomExtraction = "/services/identity/custom-template-extraction/:identityCustomTemplateId",
  InvoiceLayout = "/services/invoice",
  PassportLayout = "/services/passport",
  Login = "/login",
  Register = 'Register',
}

// Authenticated router setup
export const router = createBrowserRouter([
  {
    path: Routes.DashboardLayout,
    element: <ProtectedRoute />,
    children: [
      { path: Routes.DashboardLayout, element: <DashboardLayout /> },
      { path: Routes.ServicesLayout, element: <ServicesLayout /> },
      {
        path: Routes.IdentityLayout,
        element: <IdentityLayout />,
        children: [
          { path: Routes.IdentityExtraction, element: <IdentityExtraction /> },
          { path: Routes.IdentityCustomExtraction, element: <IdentityCustomExtraction /> },
        ],
      },
      { path: Routes.InvoiceLayout, element: <InvoiceLayout /> },
      { path: Routes.PassportLayout, element: <PassportLayout /> },
    ],
  },
  {
    path: Routes.Login,
    element: <Login />,
  },
  {
    path: Routes.Register,
    element: <Register />,
  },
]);
