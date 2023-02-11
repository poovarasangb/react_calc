import { lazy, Suspense, useRef, useState } from "react";
import { CalcContext } from "./context/calcContext";

const Header = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/header")
);

export const App = () => {
    const [calc, setCalc] = useState(() => ({
        number: 0,
        sign: "",
        result: null
    }));

    const headerRef = useRef();

    const context = {
        calc,
        setCalc
    };

    return (
        <Suspense fallback={null}>
            <Header ref={headerRef} />
            <CalcContext.Provider context={context}>
                {}
            </CalcContext.Provider>
        </Suspense>
    );

};
