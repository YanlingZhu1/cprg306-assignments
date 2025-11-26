"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-services.js";

// Helper function to clean ingredient names for meal ideas API queries
function cleanIngredientName(raw) {
  if (!raw) return "";
  const noEmoji = raw.replace(
    /[\u{1F300}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
    ""
  );
  const main = noEmoji.split(",")[0]; // "chicken breasts, 1 kg 🍗" -> "chicken breasts"
  return main.trim().toLowerCase();
}

export default function ShoppingListPage() {
  // Initial value must be [], do not leave empty, otherwise ItemList receives undefined
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();
  const router = useRouter();

  // On mount: if not logged in, redirect to login page; if user exists, load that user's items
  useEffect(() => {
    if (!user) {
      // Redirect to your login page route here: if your login page is at /week-10, change to "/week-10"
      router.push("/week-10");
      return;
    }

    const loadItems = async () => {
      try {
        // Make sure to pass user.uid
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    loadItems();
  }, [user, router]);

  // Show placeholder text while redirecting if no user
  if (!user) {
    return (
      <p className="mx-auto max-w-5xl p-4 bg-gray-300">
        Redirecting to login...
      </p>
    );
  }

  // Add item: first write to Firestore, then add the new item with id to local state
  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem); // Write to database
      
      const itemWithId = { ...newItem, id };
      console.log('itemWithId', itemWithId);
      setItems((prev) => [...prev, itemWithId]);   // Update local list
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanIngredientName(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="mx-auto max-w-5xl p-4 bg-gray-300">
      <h1 className="text-4xl font-bold gap-2 p-2 mb-4">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column: form + list */}
        <div className="md:w-1/2 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right column: meal ideas */}
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
