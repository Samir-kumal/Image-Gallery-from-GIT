import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataProvider from "./context/DataProvider";
import AuthProvider from "./context/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient,QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="126301457553-2i8usop8m45o1v399rgvrg71r30avlvo.apps.googleusercontent.com">
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    <DataProvider>

      <AuthProvider>
          <App />
      </AuthProvider>
      </DataProvider>
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
