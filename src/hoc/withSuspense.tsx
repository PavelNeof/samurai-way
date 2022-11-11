import React from "react";
import Preloader from "../components/Common/Preloader/Preloader";


export const WithSuspense = (Component: any) => {
    return (
        <React.Suspense fallback={<Preloader/>}>
            <Component/>
        </React.Suspense>
    )
}