import { useCallback, useMemo } from "react";
import { getCalcContext } from "../context/calcContext";

const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt'
};

const result = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => a / b
};

const getStyleName = btn => className[btn];
const math = (a, b, sign) => {
    if (a && b && sign){
        return result[sign](a, b);
    }
    return a || b || 0;
};

const Button = ({
    value
}) => {
    const { setCalc } = getCalcContext();

    const getClassName = useMemo(() => getStyleName(value), [value]);

    const handleBtnClick = useCallback(() => {
        if (value === "+-"){
            setCalc((prev) => ({
                ...prev,
                number: prev.number === 0 ? 0 : (prev.number * -1)
            }));
            return;
        }
        if (value === "C") {
            setCalc(() => ({
                number: 0,
                sign: "",
                result: null
            }));
            return;
        }
        if (value === ".") {
            setCalc((prev) => ({
                ...prev,
                number: prev.number.toString().includes('.') ? prev.number : (prev.number + value)
            }));
            return;
        }
        if (value === "%") {
            setCalc((prev) => ({
                ...prev,
                number: prev.number / 100
            }));
            return;
        }


        if (getClassName){
            if (value === "="){
                setCalc((prev) => ({
                    number: 0,
                    result: math(prev.result, prev.number, prev.sign),
                    sign: ""
                }));
            } else {
                setCalc((prev) => ({
                    result: !prev.result && prev.number ? prev.number : prev.result,
                    sign: value,
                    number: 0
                }));
            }
            return;
        }
        setCalc((prev) => {
            const numberString = value.toString();
            let numberValue;
            if (numberString === '0' && prev.num === 0) {
                numberValue = "0";
            } else {
                numberValue = Number(prev.number + numberString);
            }
            return {
                ...prev,
                number: numberValue
            };
        });
    }, [getClassName, setCalc, value]);

    return (
        <button
            onClick={handleBtnClick}
            className={`${getClassName} button`}
        >
            {value}
        </button>
    );

};

export { Button as default };