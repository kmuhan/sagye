import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./pages/Main"))
const Category = React.lazy(() => import("./pages/Category"))

function Router() {
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/:categoryId" element={<Category/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router