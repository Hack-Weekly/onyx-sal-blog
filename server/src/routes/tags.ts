import { Prisma } from "@prisma/client";
import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

// Get all tags
router.get("/tags", async (_req, res) => {
  const tags = await prisma.tag.findMany({
    include: {
      posts: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  res.json(tags);
});

export default router;
