"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-services.js";

// 清洗食材名字，给 MealIdeas 用
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
  // 初始值一定要是 []，不要留空，不然 ItemList 收到 undefined
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();
  const router = useRouter();

  // 挂载时：如果没登录就跳回登录页；如果有 user 就加载该用户的 items
  useEffect(() => {
    if (!user) {
      // 这里跳回你的登录页路由：如果你的登录页在 /week-10 就改成 "/week-10"
      router.push("/week-10");
      return;
    }

    const loadItems = async () => {
      try {
        // 一定要把 user.uid 传进去
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    loadItems();
  }, [user, router]);

  // 没有 user 时先显示占位文字
  if (!user) {
    return (
      <p className="mx-auto max-w-5xl p-4 bg-gray-300">
        Redirecting to login...
      </p>
    );
  }

  // 添加条目：先写入 Firestore，再把带 id 的新条目加到本地 state
  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem); // 写库
      const itemWithId = { id, ...newItem };
      setItems((prev) => [...prev, itemWithId]);   // 更新本地列表
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
