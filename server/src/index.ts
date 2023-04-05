// Module Imports
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

// all login changes surrounded by this ==============================================================================
/**
 * Packages added to package.json
 * axios
 * qs
 * crypt
 */
// setting up login oauth stuff for github -------------------------
// import { PrismaClient } from "@prisma/client";
import axios from 'axios';
import qs from 'qs';
import crypto from 'crypto';

// define all params for github oauth -----------------------
// const prisma = new PrismaClient();
const client_id = process.env.GH_CLIENT_ID;
const client_secret = process.env.GH_CLIENT_SEC;
const redirect_uri = 'http://localhost:3000/';
const scope = 'user'; // gives us access to user
const state = crypto.randomBytes(16).toString('hex'); // generate random string to prevent cross site scripting cyber attacks
const allow_signup = "false";
const login = 'login';

const uri_params = `client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&allow_signup=${allow_signup}&login=${login}`
// all login changes surrounded by this ==============================================================================





// Routers
import blogRouter from "./routes/posts.js";
import tagRouter from "./routes/tags.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the Onyx Salemander Blog API!");
});






// all login changes surrounded by this ==============================================================================
app.get('/login', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?${uri_params}`)
})

app.get('/', async (req, res) => {
  const code = req.query.code; // authorization code recieved from github authorization url
  const returnedState = req.query.state; // returned state from login

  if(state != returnedState){ // verify original state matches returned state and if it doesn't will throw status 401
    res.status(401).send('Unauthorized request');
    return;
  }

  // post request to the GitHub OAuth token endpoint with required parameters
  const { data } = await axios.post('https://github.com/login/oauth/access_token', qs.stringify({
    code,
    client_id,
    client_secret,
    redirect_uri
  }), {
    headers: {
      'Accept': 'application/json'
    }
  });

  const access_token = data.access_token; // returned access token here
  // here is where we get the access_token that we can save to database -----------------------------
  console.log("Looks like we can login, need to store the access token somewhere", access_token)
  res.send('Authentication Successful')
})
// all login changes surrounded by this ==============================================================================





app.use("/api", blogRouter);
app.use("/api", tagRouter);

app.listen(8000, () => console.log("🚀 Server now live at http://localhost:8000"));
