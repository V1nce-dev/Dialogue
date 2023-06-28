"use client"
import { useState } from "react";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://dialogue-api-v1nce-dev.vercel.app/api/users/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: username, password: password }),
            });

            if (res.ok) {
                console.log("Registration Successful");
                setUsername("");
                setPassword("");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="border border-black"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="border border-black"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
