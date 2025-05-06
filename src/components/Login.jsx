import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    //Input the config here from forum
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/todo");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>

            <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Ennter passwords"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />

            <label>
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />

            <button type="submit">Log in</button>

            {error && <p>{error}</p>}
        </form>
    );
};
