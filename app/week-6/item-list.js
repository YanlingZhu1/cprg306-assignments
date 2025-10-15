"use client";

import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";

// ItemList component that displays a list of shopping items
export default function ItemList() {
    const[sortBy, setSortBy] = useState("name");


        // 2) Copy + sort (trim whitespace, unify case; for category sort, use name as secondary sort)
    let itemsCopy = [...itemsData];
    itemsCopy.sort((a, b) => {
        const aName = a.name.trim().toLowerCase();
        const bName = b.name.trim().toLowerCase();

        if (sortBy === "name") {
        return aName.localeCompare(bName);
        }
        const aCat = a.category.trim().toLowerCase();
        const bCat = b.category.trim().toLowerCase();
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
            />
            ))}
        </ul>
        </main>
    );
    }