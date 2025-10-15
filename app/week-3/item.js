import ItemList from "./item-list";


export default function Item({ name, quantity, category }) {
    return (
        
        <div className="bg-amber-100 text-2xl font-bold mb-4 p-4 rounded">
            <h2>{name}</h2>
            <p>buy {quantity} in {category}</p>
        </div>
    );
}
