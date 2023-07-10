"use client"
import { useState, useEffect } from "react";
import IsLoggedIn from "../home/UserLoggedIn";

const TextForm = () => {
    const [texts, setTexts] = useState([]);
    const [newText, setNewText] = useState("");
    const isLoggedIn = IsLoggedIn();

    useEffect(() => {
        fetch("http://localhost:8080/api/post/")
            .then(response => response.json())
            .then(data => setTexts(data))
            .catch(error => console.error("Error:", error));
    }, []); 

    const handleSubmit = event => {
        event.preventDefault();

        if (!isLoggedIn) {
            alert("Please log in to create a message.");
            return;
        }

        fetch("http://localhost:8080/api/post/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: newText }),
        })
        .then(response => response.json())
        .then(data => {
            setTexts(prevTexts => [...prevTexts, data]);
            setNewText("");
        })
        .catch(error => console.error("Error:", error));
    };

    const handleDelete = id => {
        fetch(`http://localhost:8080/api/post/${id}`, {
            method: 'DELETE',
        })
        .then(() => setTexts(texts.filter(text => text._id !== id)))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            {isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={newText} 
                        onChange={event => setNewText(event.target.value)} 
                        placeholder="New Text" 
                        required 
                    />
                    <button type="submit">Add</button>
                </form>
            ) : null}
            {texts.map((text) => (
                <div key={text._id}>
                    <p>{text.text}</p>
                    {isLoggedIn ? <button onClick={() => handleDelete(text._id)}>Delete</button> : null}
                </div>
            ))}
        </div>
    );
}

export default TextForm;
