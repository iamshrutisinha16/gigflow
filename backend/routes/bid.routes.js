import express from "express";
import mongoose from "mongoose";
import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user.id
  });
  res.json(bid);
});

router.get("/:gigId", protect, async (req, res) => {
  const bids = await Bid.find({ gigId: req.params.gigId });
  res.json(bids);
});

router.patch("/:bidId/hire", protect, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bid = await Bid.findById(req.params.bidId).session(session);
    await Gig.findByIdAndUpdate(bid.gigId, { status: "assigned" });
    await Bid.updateMany(
      { gigId: bid.gigId },
      { status: "rejected" }
    );
    bid.status = "hired";
    await bid.save();

    await session.commitTransaction();
    res.json({ message: "Freelancer hired" });
  } catch {
    await session.abortTransaction();
    res.status(500).json({ message: "Hiring failed" });
  }
});

export default router;
