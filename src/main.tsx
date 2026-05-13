import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import SignInPage from "./pages/AuthPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
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
