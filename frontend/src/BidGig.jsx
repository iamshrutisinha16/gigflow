import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BidGig() {
  const { id } = useParams(); 
  const [gig, setGig] = useState(null);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/gigs/${id}`)
      .then(res => setGig(res.data));
  }, [id]);

  const submitBid = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/bids",
        { gigId: id, message, price },
        { withCredentials: true }
      );
      alert("Bid submitted");
    } catch {
      alert("Error submitting bid");
    }
  };

  if (!gig) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">{gig.title}</h2>
        <p className="text-gray-600 mb-4">{gig.description}</p>

        <textarea
          placeholder="Your message"
          className="w-full p-3 border rounded mb-3"
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Your price (₹)"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={submitBid}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Submit Bid
        </button>
      </div>
    </div>
  );
}
