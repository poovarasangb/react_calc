import { useCallback } from "react";

const Header = ({
    title = "Calculator using react"
}) => {
    const renderAppName = useCallback(() => (
        <div className="app-name">
            {title}
        </div>
    ), [title]);

    const renderHeader = useCallback(() => (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <div className="app-nameLogo-section">
                        <div className="app-logo">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png"
                                width="40" height="40"
                                className="d-inline-block align-top"
                                alt="Calc"/>
                        </div>
                        {renderAppName()}
                    </div>
                </a>
            </nav>
        </header>
    ), [renderAppName]);

    return renderHeader();
};

export {
    Header as default
};