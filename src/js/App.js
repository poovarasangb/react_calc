import { lazy, Suspense, useRef, useState } from "react";
import { CalcContext } from "./context/calcContext";

const Header = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/header")
);
const Wrapper = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/wrapper")
);

const Screen = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/screen")
);

const ButtonBox = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/buttonBox")
);

const Button = lazy(() =>
    import(/* webpackChunkName: "header" */ "./components/button")
);

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];

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
            <Wrapper>
                <CalcContext.Provider value={context}>
                    <Screen />
                    <ButtonBox>
                        {btnValues.flat().map((btn, i) => (
                            <Button
                                value={btn}
                                key={i}
                            />
                        ))}
                    </ButtonBox>
                </CalcContext.Provider>
            </Wrapper>
        </Suspense>
    );

};
