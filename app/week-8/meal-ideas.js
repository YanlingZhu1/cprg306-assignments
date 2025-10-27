    "use client";

    import { useEffect, useState } from "react";

    // --- API function defined OUTSIDE the component ---
    async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
        )}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.meals ?? [];
    } catch (err) {
        console.error("Error fetching meal ideas:", err);
        return [];
    }
    }

    export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        let ignore = false;

        (async () => {
        const list = await fetchMealIdeas(ingredient);
        if (!ignore) setMeals(list);
        })();

        return () => {
        ignore = true;
        };
    }, [ingredient]);

    return (
        <div className="mx-auto max-w-md p-4 bg-gray-100 rounded">
        <h1 className="text-3xl font-bold mb-3">Meal Ideas</h1>
        <p className="text-sm text-gray-600 mb-4">
            Ingredient: <span className="font-semibold">{ingredient || "—"}</span>
        </p>

        {!ingredient && (
            <p className="text-gray-700">Select an item from the list to see ideas.</p>
        )}

        {ingredient && meals.length === 0 && (
            <p className="text-gray-700">No meal ideas found for “{ingredient}”.</p>
        )}

        <ul className="space-y-2">
            {meals.map((m) => (
            <li key={m.idMeal} className="bg-white p-3 rounded shadow">
                {/* Week 8 basic requirement: show the dish name (thumb optional) */}
                <div className="flex items-center gap-3">
                {m.strMealThumb && (
                    <img
                    src={m.strMealThumb}
                    alt={m.strMeal}
                    className="w-12 h-12 rounded object-cover"
                    />
                )}
                <span className="text-lg font-semibold">{m.strMeal}</span>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
    }
