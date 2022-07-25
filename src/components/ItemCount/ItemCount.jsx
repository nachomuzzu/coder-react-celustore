import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css"
import { Link } from "react-router-dom";

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

            <div className="mt-2">
                <Link to={`/cart`} style={{ textDecoration: "none" }}>
                    <Button disabled={count === "" || count === 0} onClick={onAdd(count)} className='cartButton btnContainer btn-dark'>Agregar al carrito</Button>
                </Link>
            </div>

        </>
    );
};

export default ItemCount;
