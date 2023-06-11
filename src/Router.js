import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./pages/Main"))
const Category = React.lazy(() => import("./pages/Category"))
const Animal = React.lazy(() => import("./pages/Animal"))
const Country = React.lazy(() => import("./pages/Country"))

function Router() {
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/:categoryId" element={<Category/>} />
                    <Route path="/animals/:id" element={<Animal/>} />
                    <Route path="/country/:id" element={<Country/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router