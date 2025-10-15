

export default function Item({ name, quantity, category }) {
    return (

        
        <li className="bg-amber-200 text-2xl font-bold mb-4 p-4 rounded">
            
            <h2>{name}</h2>
            <p>buy {quantity} in {category}</p>
        </li>
    );
}
