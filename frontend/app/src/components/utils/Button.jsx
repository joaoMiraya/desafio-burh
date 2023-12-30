import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from 'react-tooltip'
import Proptypes from 'prop-types';

function Button({ setOpen }) {
    Button.propTypes = {
        setOpen: Proptypes.func.isRequired,
    };

    return (

        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-[#E9FF1A] flex px-3 py-1 rounded-xl"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Adicionar"
                data-tooltip-place="top"
            >
                <Tooltip id="my-tooltip" />
                <p className="hidden md:flex font-semibold">Lançar nota</p><AiOutlinePlus size={25} />
            </button>
        </>
    )
}

export default Button;