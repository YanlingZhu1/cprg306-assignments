    "use client";

    export default function Item(props) {
    const { item: it, onSelect } = props;

    // Support both 'item' prop and individual props
    const { name, quantity, category, id } = it ?? props;
    const safeItem = it ?? { id, name, quantity, category };

    const handleSelect = () => onSelect?.(safeItem);

    return (
        <li
        className="bg-amber-200 text-2xl font-bold mb-4 p-4 rounded cursor-pointer hover:bg-amber-300"
        onClick={handleSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSelect();
        }}
        aria-label={`Select ${name}`}
        >
        <h2>{name}</h2>
        <p>buy {quantity} in {category}</p>
        </li>
    );
    }
