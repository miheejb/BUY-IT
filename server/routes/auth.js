import express from 'express';

const router = express.Router();

//get post put delete CRUD
router.get("/", (req, res) => {
  res.json({
    data: "hello from nodejs api hey routes",
  });
});

export default router;