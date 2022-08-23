import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css"
import { useEffect } from "react";

const ItemCount = ({ items = { items }, stock = items.stock, initial = 0, onAdd }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        if (initial > stock && stock > 0) {
          console.warn(`Initial value can't be bigger than stock`);
          setCount(1);
        }
        if (stock === 0) setCount(0);
      }, [initial, stock]);

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
            <div className="itemCountContainer">

                <Button
                    onClick={() => updateCount("-")}
                    className="btn btn-dark btnBg me-2"
                    type="button"
                >
                    -
                </Button>
                <input
                    onChange={(e) => updateCountInput(e)}
                    className="text-center input border-dark"
                    placeholder=""
                    value={count}
                    type="number"
                />

                <Button
                    onClick={() => updateCount("+")}
                    className="btn btn-dark btnBg ms-2"
                    type="button"
                >
                    +
                </Button>
            </div>
            <Button 
                    onClick={() => onAdd(count)}
                    type="button"
                    className="mt-2 btn btn-dark"
                    disabled={count === "" || count === 0}
                >
                    Agregar al carrito
                </Button>

        </>
    );

};

export default ItemCount;
