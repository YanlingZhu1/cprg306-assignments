import ItemList from "./item-list.js"; 


export default function Page() {

    
    return (
        <main className="flex justify-center items-center min-h-0 w-full bg-gray-50 ">
            {/* <h1 className="text-7xl font-bold mb-4 w-1/3 ml-6">Shopping List</h1> */}
        <ItemList />
        </main>
    );
}