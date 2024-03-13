import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./Context/SearchContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="nikhil-0200.us.auth0.com"
    clientId="s3HWRNsRHp1NCBZZ9kKUTWjJGSNJ1WRZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchContextProvider>
    </AuthContextProvider>
  </Auth0Provider>
);
