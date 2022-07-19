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
            <div className="justify-content-center">
              
                <button
                    onClick={() => updateCount("-")}
                    className="btn btn-dark btnBg me-2 mb-2"
                    type="button"
                >
                    -
                </button>
                <input
                    onChange={(e) => updateCountInput(e)}
                    className="text-center input border-dark w-25 mb-2"
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
            <div className="d-flex justify-content-center mb-2">
                <button
                    onClick={() => onAdd(count)}
                    type="button"
                    className="btn btn-dark btnBg"
                    disabled={count === "" || count === 0}
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};

export default ItemCount;
