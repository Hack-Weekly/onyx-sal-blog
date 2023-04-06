// Module Imports
import express, { Request, Response, Router } from "express";

// Services (Utils)
import { getAccessToken, getUserData } from "../services/githubServices.js";

const router: Router = express.Router();

router.get("/accessToken", (req: Request, res: Response) => {
  const code = req.query.code;

  getAccessToken(code as string).then((resp) => res.json(resp));
});

router.get("/userData", (req: Request, res: Response) => {
  const accessToken = req.query.accessToken;

  getUserData(accessToken as string, req, res).then((resp) => res.json(resp));
});

export default router;
