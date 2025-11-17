"use client";

import Item from "./item.js";
import { useState } from "react";

// ItemList component that displays a list of shopping items
export default function ItemList({ items, onItemSelect }) {
    const[sortBy, setSortBy] = useState("name");


        // 2) Copy + sort (trim whitespace, unify case; for category sort, use name as secondary sort)
    let itemsCopy = [...items];
    itemsCopy.sort((a, b) => {
        const aName = a.name;
        const bName = b.name;

        if (sortBy === "name") {
        return aName.localeCompare(bName);
        }

        if (sortBy === "quantity") {
        return a.quantity - b.quantity;
    }
    // Default to category sort
        const aCat = a.category;
        const bCat = b.category;
        const byCat = aCat.localeCompare(bCat);
        return byCat !== 0 ? byCat : aName.localeCompare(bName);
    }); 

    return (
        <main>
        {/* 3) two sorting buttons */}
        <div className="mb-4 flex gap-2 font-bold">
            <button
            type="button"
            onClick={() => setSortBy("name")}
            className={sortBy === "name"
                ? "px-3 py-1.5 rounded bg-yellow-600 text-black"
                : "px-3 py-1.5 rounded bg-yellow-200 text-gray-800"}
            >
            Sort by Name
            </button>
            <button
            type="button"
            onClick={() => setSortBy("category")}
            className={sortBy === "category"
                ? "px-3 py-1.5 rounded bg-yellow-600 text-black"
                : "px-3 py-1.5 rounded bg-yellow-200 text-gray-800"}
            >
            Sort by Category
            </button>
        </div>

        {/* 4) Render items (Item itself returns <li>, so just wrap with <ul>) */}
        <ul className="space-y-2">
            {itemsCopy.map(item => (
            <Item
                key={item.id}
                name={item.name.trim()}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect?.(item)}
            />
            ))}

        </ul>
        </main>
    );
    }