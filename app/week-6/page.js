
import ItemList from "./item-list.js"; 

export default function Page() {

    return (
        <main className="mx-auto max-w-md p-4 bg-gray-300">
                <h1 className="text-4xl font-bold gap-2 p-2">Shopping List</h1>
                    <ItemList />
        </main>
    );
}