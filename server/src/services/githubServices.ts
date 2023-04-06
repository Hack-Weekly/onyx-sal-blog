// Module Imports
import * as dotenv from "dotenv";
import axios from "axios";
import prisma from "../prisma.js";

// Types
import type { Request, Response } from "express";
import type { IGitHubUser } from "../types/GitHubUser.js";
import type { AccessTokenData } from "../types/AccessTokenData.js";

dotenv.config();

export const getAccessToken = async (code: string): Promise<AccessTokenData> => {
  try {
    const params = `?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`;

    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token${params}`,
      {},
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserData = async (accessToken: string, _req: Request, res: Response) => {
  try {
    const { data }: { data: IGitHubUser } = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user = await prisma.user.upsert({
      where: {
        name: data.login,
      },
      update: {
        name: data.login,
      },
      create: {
        githubId: data.id,
        name: data.login,
        email: data.email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
