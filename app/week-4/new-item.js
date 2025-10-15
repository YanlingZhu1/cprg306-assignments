"use client";
import { Quintessential } from "next/font/google";
import { useState } from "react";


export default function NewItem() {
    let [quantity, setQuantity] = useState(1);


    const increment = () => {
        if (quantity < 20) {
            return setQuantity(quantity + 1);
        }
        else {
            alert("You cannot add more than 20 items at a time.");
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            return setQuantity(quantity - 1);
        }
        else {
            alert("You cannot add less than 1 item at a time.");
        }
    };
        

    return (
        
        <div className="min-h-screen flex flex-col items-center justify-center p-8 rounded-6xl">
            <h1 className="bg-amber-100 text-4xl font-bold mb-4 p-4 rounded-1xl">
                Add New Item
            </h1>
            <div className="bg-amber-100 text-2xl font-bold mb-4 p-4 rounded text-center">
                <h2 className="bg-green-300 mb-3 p-4 rounded-2xl">Number of items to add: {quantity}</h2>
                <button
            onClick={increment}
            disabled={quantity === 20}
            className={`text-lg font-bold m-4 p-4 rounded
            ${quantity === 20
                ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                : "bg-green-100 text-green-600 hover:bg-green-300"}`}
        >
            +
        </button>

                <span className="mx-3 text-lg font-bold">{quantity}</span>
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className={`text-lg font-bold m-4 p-4 rounded
                    ${quantity === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                        : "bg-red-100 text-red-600 hover:bg-red-300"}`}
                >
                    -
                </button>
            </div>
        </div>
    );
}
