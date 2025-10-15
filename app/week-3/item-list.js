import Item from "./item.js";

// ItemList component that displays a list of shopping items
export default function ItemList() {
    // Item 1: Milk product in dairy category
    const item1 = {
        name: 'milk, 4 L 🥛',
        quantity: 1,
        category: 'dairy',
    };
    
    // Item 2: Bread product in bakery category
    const item2 = {
        name: 'bread 🍞',
        quantity: 2,
        category: 'bakery',
    };
    
    // Item 3: Eggs product in dairy category
    const item3 = {
        name: 'eggs, dozen 🥚',
        quantity: 2,
        category: 'dairy',
    };
    
    // Item 4: Bananas product in produce category
    const item4 = {
        name: 'bananas 🍌',
        quantity: 6,
        category: 'produce',
    };
    
    // Item 5: Broccoli product in produce category
    const item5 = {
        name: 'broccoli 🥦',
        quantity: 3,
        category: 'produce',
    };
    
    // Item 6: Chicken breasts product in meat category
    const item6 = {
        name: 'chicken breasts, 1 kg 🍗',
        quantity: 1,
        category: 'meat',
    };
    
    // Item 7: Pasta sauce product in canned goods category
    const item7 = {
        name: 'pasta sauce 🍝',
        quantity: 3,
        category: 'canned goods',
    };
    
    // Item 8: Spaghetti product in dry goods category
    const item8 = {
        name: 'spaghetti, 454 g 🍝',
        quantity: 2,
        category: 'dry goods',
    };
    
    // Item 9: Toilet paper product in household category
    const item9 = {
        name: 'toilet paper, 12 pack 🧻',
        quantity: 1,
        category: 'household',
    };
    
    // Item 10: Paper towels product in household category
    const item10 = {
        name: 'paper towels, 6 pack',
        quantity: 1,
        category: 'household',
    };
    
    // Item 11: Dish soap product in household category
    const item11 = {
        name: 'dish soap 🍽️',
        quantity: 1,
        category: 'household',
    };
    
    // Item 12: Hand soap product in household category
    const item12 = {
        name: 'hand soap 🧼',
        quantity: 4,
        category: 'household',
    };
    
    // Return a container div with all Item components
    return (
        <div>
            {/* Render Item component for milk */}
            <Item
                name={item1.name}
                quantity={item1.quantity}
                category={item1.category}
            />
            {/* Render Item component for bread */}
            <Item
                name={item2.name}
                quantity={item2.quantity}
                category={item2.category}
            />
            {/* Render Item component for eggs */}
            <Item
                name={item3.name}
                quantity={item3.quantity}
                category={item3.category}
            />
            {/* Render Item component for bananas */}
            <Item
                name={item4.name}
                quantity={item4.quantity}
                category={item4.category}
            />
            {/* Render Item component for broccoli */}
            <Item
                name={item5.name}
                quantity={item5.quantity}
                category={item5.category}
            />
            {/* Render Item component for chicken breasts */}
            <Item
                name={item6.name}
                quantity={item6.quantity}
                category={item6.category}
            />
            {/* Render Item component for pasta sauce */}
            <Item
                name={item7.name}
                quantity={item7.quantity}
                category={item7.category}
            />
            {/* Render Item component for spaghetti */}
            <Item
                name={item8.name}
                quantity={item8.quantity}
                category={item8.category}
            />
            {/* Render Item component for toilet paper */}
            <Item
                name={item9.name}
                quantity={item9.quantity}
                category={item9.category}
            />
            {/* Render Item component for paper towels */}
            <Item
                name={item10.name}
                quantity={item10.quantity}
                category={item10.category}
            />
            {/* Render Item component for dish soap */}
            <Item
                name={item11.name}
                quantity={item11.quantity}
                category={item11.category}
            />
            {/* Render Item component for hand soap */}
            <Item
                name={item12.name}
                quantity={item12.quantity}
                category={item12.category}
            />
        </div>
    );
}