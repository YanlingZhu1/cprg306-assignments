"use client";

import { useState } from "react";


export default function NewItem({ onAddItem }) {
    let [name, setName] = useState(" ");
    let [category, setCategory] = useState("Produce");
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
        
        // handle form submission
        const handleSubmit = (e) => {
            e.preventDefault();

            const id = Math.random().toString(36).substring(2, 9); // generate a random id
            const item = { id: id, name: name, category: category, quantity: quantity };
            // Handle form submission logic here
            console.log("Submitting item:", item);
            alert(
        `Item submitted:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`
                );

        // Call the onAddItem prop function to add the new item
        onAddItem(item);

        // Reset form fields
        setName(" ");
        setQuantity(1);
        setCategory("produce");
        
    };


    return (
        <div className="mx-auto flex flex-col items-center justify-center p-1 rounded-6xl bg-amber-100">    
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col items-center justify-center pb-6 rounded-6xl">


            <h1 className="bg-amber-100 text-4xl font-bold mb-4 p-4 rounded-1xl">
                Add New Item
            </h1>
        {/* name */}
        <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold">
            Name <span className="text-red-500">*</span>
            </label>
            <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., New Item"
            className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-amber-400"
            />
        </div>

        {/* Quantity */}
        <div className="space-y-2">
            <label className="block text-sm font-semibold">Quantity</label>
            <div className="flex items-center">
            <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className={`rounded-xl px-4 py-2 font-bold mr-3
                ${quantity <= 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                    : "bg-red-100 text-red-700 hover:bg-red-200"}`}
            >
                −
            </button>

            <span className="min-w-16 text-center font-semibold">
                {quantity}
            </span>

            <button
                type="button"
                onClick={increment}
                disabled={quantity >= 20}
                className={`rounded-xl px-4 py-2 font-bold ml-3
                ${quantity >= 20
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                    : "bg-green-100 text-green-700 hover:bg-green-200"}`}
            >
                +
            </button>
            </div>
            <p className="text-xs opacity-60">Range: 1–20</p>
        </div>

        {/* category */}
        <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-semibold">
            Category
            </label>
            <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-amber-400"
            >
            {/* list of categories */}
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
        </div>

        {/* submit button */}
        <div className="pt-2">
            <button
            type="submit"
            className="w-full mx-auto rounded-xl  bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold px-6 py-3 transition"
            >
            Submit
            </button>
        </div>
        </form>
        </div>
    );
    };
