import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

export const CalendarButton = ({
    text,
    value,
    onClick,
    classNames = ""
}) => {
    const getClassName = useMemo(()=>clsx(
        "",
        classNames
    ), [classNames]);

    const handleButtonClick = useCallback((event)=>{
        onClick(event, value);
    }, [onClick, value]);

    const renderText = useCallback(()=>text, [text]);

    return (
        <button
            className={getClassName}
            value={value}
            onClick={handleButtonClick}
        >
            {renderText({text: "text"})}
        </button>
    );

};

const CalendarButtonPropTypes = {
    text: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    classNames: PropTypes.string
};

CalendarButton.propTypes = CalendarButtonPropTypes;
