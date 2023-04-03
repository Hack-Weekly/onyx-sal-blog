import { Prisma } from "@prisma/client";
import express from "express";
import prisma from "../prisma.js";

// TODO: Put array methods into their own module

const router = express.Router();

// Get all blog posts
router.get("/posts", async (_req, res) => {
  const posts = await prisma.post.findMany({
    include: { tags: true },
  });

  res.json(posts);
});

// Get blog post by id
router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);

  const post = await prisma.post.findUnique({
    where: { id: idInt },
    include: { tags: true },
  });

  res.json(post);
});

// Create a blog post
router.post("/posts", async (req, res) => {
  const { title, content, authorName, tags } = req.body;

  // const tagsData = tags.map((tag: Prisma.TagCreateInput) => {
  //   return { name: tag.name }
  // });

  const post = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connectOrCreate: {
          create: { name: authorName },
          where: { name: authorName },
        },
      },
      tags: {
        connectOrCreate: tags.map((tag: Prisma.TagCreateInput) => {
          return {
            create: { name: tag.name },
            where: { name: tag.name },
          };
        }),
      },
    },
  });

  res.json(post);
});

// Update an Existing Blog Post
router.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);

  const { title, content, tags } = req.body;

  const post = await prisma.post.update({
    where: { id: idInt },
    data: {
      title: title,
      content: content,
      tags: { set: tags },
    },
  });

  res.json(post);
});

// Delete an Existing Blog Post
router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);

  const post = await prisma.post.delete({
    where: { id: idInt },
  });

  res.json(post);
});

export default router;
