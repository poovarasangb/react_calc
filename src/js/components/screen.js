import { getCalcContext } from "../context/calcContext";
import { Textfit } from 'react-textfit';

const Screen = () => {
    const {
        calc
    } = getCalcContext();
    return (
        <Textfit className="screen" max={70} mode="single">
            {calc.number ? calc.number : calc.result}
        </Textfit>
    );
};

export { Screen as default };