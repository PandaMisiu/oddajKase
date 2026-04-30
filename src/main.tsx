import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardPage from "./pages/DashboardPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import GroupPage from "./pages/GroupPage.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/groups",
    element: <GroupPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
