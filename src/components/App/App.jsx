import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import SharedLayout from "../SharedLayout/SharedLayout";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
    return (
        <Layout>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </SharedLayout>
        </Layout>
    );
}

export default App;
