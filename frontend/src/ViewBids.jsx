import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewBids (){
    const {id} = useParams();
    const [bids, setBids] = useState([]);

    useEffect(() => {
    axios.get(`https://gigflow-1xze.onrender.com/api/bids/${id}`, {
      withCredentials: true,
    })
      .then(res => setBids(res.data));
  }, [id]);

  const hireBid = async (bidId) => {
    await axios.patch(
      `http://localhost:5000/api/bids/${bidId}/hire`,
      {},
      { withCredentials: true }
    );
    alert("Freelancer hired ");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Bids</h2>

      {bids.map(b => (
        <div
          key={b._id}
          className="bg-white p-4 mb-4 rounded shadow"
        >
          <p><b>Message:</b> {b.message}</p>
          <p><b>Price:</b> ₹{b.price}</p>
          <p><b>Status:</b> {b.status}</p>

          {b.status === "pending" && (
            <button
              onClick={() => hireBid(b._id)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Hire
            </button>
          )}
        </div>
      ))}
    </div>
  );
}