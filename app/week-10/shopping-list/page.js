    "use client";

    import { useState, useEffect } from "react";
    import ItemList from "./item-list.js";
    import NewItem from "./new-item.js";
    import MealIdeas from "./meal-ideas.js";
    import { useUserAuth } from "../_utils/auth-context.js";
    import { useRouter } from "next/navigation";
    import{ getItems, addItem } from "../_services/shopping-list-services.js";

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
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const { user } = useUserAuth();
    const router = useRouter();
    useEffect(() => {
        if (!user) {
        router.push("/week-10");
        }
    }, [user, router]);
   
   const  loadItems = async () => {
    try {
    const fetchedItems = await getItems();
    setItems(fetchedItems);} catch (error) {
    console.log("Error fetching items:", error);
    }}
    useEffect(() => {loadItems();}, [user,router]);

if (!user) {
    return (
      <p className="mx-auto max-w-5xl p-4 bg-gray-300">
        Redirecting to login...
      </p>
    );  
   }
    const handleAddItem = async(newItem) => {
       try{const id = await addItem(user.uid, newItem);
        const itemWithId = { id, ...newItem };
        setItems((prev) => [...prev, itemWithId]);} 
        catch (error) {console.log("Error adding item:", error);
} 
    };

    const handleItemSelect = (item) => {
        const cleaned = cleanIngredientName(item.name);
        setSelectedItemName(cleaned);  };

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
