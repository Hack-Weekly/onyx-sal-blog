import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

// Get User by GitHub ID
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);

  const post = await prisma.user.findUnique({
    where: { githubId: idInt },
    select: {
      id: true,
      githubId: true,
      name: true,
      email: true,
      comments: true,
    },
  });

  res.json(post);
});

export default router;
