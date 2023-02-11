import { useCallback } from "react";
import { CalendarButton } from "./components/button";

export const App = () => {
    const renderAppName =  useCallback(() =>(
        <div className="app-name">
      Calculator using react
        </div>
    ), []);

    const renderHeader = () =>(
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <div className="app-nameLogo-section">
                        <div className="app-logo">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png"
                                width="40" height="40"
                                className="d-inline-block align-top"
                                alt="C"/>
                        </div>
                        {renderAppName()}
                    </div>
                </a>
            </nav>
        </header>
    );

    return (
        <>
            {renderHeader()}
            <CalendarButton
                text={1}
                value={1}
            />
        </>
    );
};
