"use client";
import ItemList from "./item-list.js"; 
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    

    return (
        <main className="mx-auto max-w-md p-4 bg-gray-300">
            <h1 className="text-4xl font-bold gap-2 p-2">Shopping List</h1>

            {/* Render NewItem component and pass handleAddItem as a prop */}
            <NewItem onAddItem={handleAddItem} />

            {/* Render ItemList component and pass the items state as a prop */}
            <ItemList items={items} />
        </main>
    );
}