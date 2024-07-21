import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import { store } from "./redux/store";

import App from "./components/App/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <HelmetProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </HelmetProvider>
    // </React.StrictMode>
);
