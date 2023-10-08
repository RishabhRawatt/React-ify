import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup.jsx";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import ForgetPasswordSend from "./pages/Auth/ForgetPasswordSend/ForgetPasswordSend";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ResestPassword from "./pages/Auth/ResetPassword/ResetPassword";

//react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register-verify-email",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccess />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/forget-password-send",
    element: <ForgetPasswordSend />,
  },
  {
    path: "/reset-password-success",
    element: <ResetPasswordSuccess />,
  },
  {
    path: "/reset-password",
    element: <ResestPassword />,
  },
]);

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
