import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import axios from 'axios';

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
    const [items, setItems] = useState([]);

    // Fetch the items from the server
    useEffect(() => {
        axios.get(API_URI)
            .then((res) => setItems(res.data))
            .catch((err) => console.error("Error fetching doors:", err));
    }, []);

    // Handle item deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URI}/${id}`);
            setItems((prevItems) => prevItems.filter(item => item.id !== id));
            alert("Item deleted successfully!");
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

    return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
