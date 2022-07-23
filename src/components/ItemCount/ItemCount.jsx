import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ items = { items }, stock = items.stock, initial = 0, onAdd }) => {
    const [count, setCount] = useState(initial);
    const updateCount = (op) => {
        if (op === "-" && count > 0) {
            setCount(count - 1);
        }
        if (op === "+" && count < stock) {
            setCount(count + 1);
        }
    };
    const updateCountInput = (e) => {
        const { value } = e.target;
        if (value <= stock) {
            setCount(isNaN(value) ? 0 : Number(value));
        }
    };


    return (
        <>
            <div className="itemCountContainer mt-5">

                <button
                    onClick={() => updateCount("-")}
                    className="btn btn-dark btnBg me-2 mb-2"
                    type="button"
                >
                    -
                </button>
                <input
                    onChange={(e) => updateCountInput(e)}
                    className="text-center input border-dark mb-2"
                    placeholder=""
                    value={count}
                    type="number"
                />

                <button
                    onClick={() => updateCount("+")}
                    className="btn btn-dark btnBg ms-2 mb-2"
                    type="button"
                >
                    +
                </button>
            </div>
            
        </>
    );
};

export default ItemCount;
