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

    return (
        <div className="flex flex-col items-center p-5">
            {isLoggedIn ? (
                <form onSubmit={handleSubmit} className="flex items-center">
                    <input 
                        type="text" 
                        value={newText} 
                        onChange={event => setNewText(event.target.value)} 
                        placeholder="New Text" 
                        required 
                        className="border-b-2 w-96 border-white bg-transparent text-white"
                    />
                    <button type="submit" className="w-16 p-1 ml-2 bg-white rounded-md">Add</button>
                </form>
            ) : null}
            {texts.map((text) => (
                <div key={text._id} className="w-full p-5 mt-10 bg-[#202020] rounded-md shadow-sm shadow-black text-white">
                    <p>{text.text}</p>
                </div>
            ))}
        </div>
    );
}

export default TextForm;