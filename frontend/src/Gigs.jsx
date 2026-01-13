import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gigs() {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/gigs?search=${search}`
    );
    setGigs(res.data);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">GigFlow</h1>

        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
          >
            Login
          </Link>

          {/* Corrected Post Gig button */}
          <Link to="/creategig">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Post Gig
            </button>
          </Link>
        </div>
      </nav>

      {/* Search */}
      <div className="p-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={fetchGigs}
          placeholder="Search gigs by title..."
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Gigs */}
      <div className="px-8 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {gigs.length === 0 ? (
          <p className="text-gray-500">No open gigs available</p>
        ) : (
          gigs.map((g) => (
            <div
              key={g._id}
              className="bg-white p-5 rounded shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{g.title}</h2>
              <p className="text-gray-600 mt-2">{g.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold">
                  ₹{g.budget}
                </span>

                <Link to={`/gigs/${g._id}/bid`}>
                  <button className="bg-green-600 text-white px-3 py-2 rounded">
                    View & Bid
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
