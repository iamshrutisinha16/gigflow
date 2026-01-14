import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post(
        "https://gigflow-1xze.onrender.com/api/auth/register",
        { name, email, password },
        { withCredentials: true }
      );

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 border rounded text-gray-800 focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded text-gray-800 focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded text-gray-800 focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded text-gray-800 focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}
