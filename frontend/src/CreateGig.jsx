import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateGig() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to post a gig.");
        return;
      }

      await axios.post(
        "https://gigflow-1xze.onrender.com/api/gigs",
        { title, description, budget },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Gig posted successfully!");
      navigate("/"); 
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 401) {
        alert("Unauthorized! Please log in again.");
      } else {
        alert("Error posting gig. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Post a New Gig
        </h2>

        <input
          type="text"
          placeholder="Gig Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Gig Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Budget (₹)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
          className="w-full mb-6 p-3 border rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Post Gig
        </button>
      </form>
    </div>
  );
}
