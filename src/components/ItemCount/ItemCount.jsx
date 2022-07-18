import { useState } from "react";

const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
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
            <div className="mt-5 mb-3 d-flex justify-content-center">
                <input
                    onChange={(e) => updateCountInput(e)}
                    className="border-dark "
                    placeholder=""
                    value={count}
                    type="number"
                />
                <button
                    onClick={() => updateCount("-")}
                    className="btn btn-dark ms-2"
                    type="button"
                >
                    -
                </button>
                <button
                    onClick={() => updateCount("+")}
                    className="btn btn-dark ms-2"
                    type="button"
                >
                    +
                </button>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button
                    onClick={() => onAdd(count)}
                    type="button"
                    className="btn btn-dark"
                    disabled={count === "" || count === 0}
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};

export default ItemCount;
