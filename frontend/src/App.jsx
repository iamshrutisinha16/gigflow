import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Gigs from "./Gigs";
import CreateGig from "./CreateGig";
import BidGig from "./BidGig";
import ViewBids from "./ViewBids";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gigs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path= "/creategig" element={<CreateGig />} />
        <Route path="bidgig" element={<BidGig />} />
        <Route path="viewbids" element={<ViewBids />} />
      </Routes>
    </BrowserRouter>
  );
}
