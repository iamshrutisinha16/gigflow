import express from "express";
import Gig from "../models/Gig.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const gigs = await Gig.find({ status: "open" });
  res.json(gigs);
});

router.post("/", protect, async (req, res) => {
  const gig = await Gig.create({
    ...req.body,
    ownerId: req.user.id
  });
  res.json(gig);
});

export default router;
