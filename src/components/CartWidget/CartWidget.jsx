import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';



export const CartWidget= () => {

    return (
        <div className="CartWidget">
            <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
    )
}

export default CartWidget;