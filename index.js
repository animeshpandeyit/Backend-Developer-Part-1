const express = require("express");

require("dotenv").config();

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const gitHubData = {
  login: "animeshpandeyit",
  id: 66975764,
  node_id: "MDQ6VXNlcjY2OTc1NzY0",
  avatar_url: "https://avatars.githubusercontent.com/u/66975764?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/animeshpandeyit",
  html_url: "https://github.com/animeshpandeyit",
  followers_url: "https://api.github.com/users/animeshpandeyit/followers",
  following_url:
    "https://api.github.com/users/animeshpandeyit/following{/other_user}",
  gists_url: "https://api.github.com/users/animeshpandeyit/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/animeshpandeyit/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/animeshpandeyit/subscriptions",
  organizations_url: "https://api.github.com/users/animeshpandeyit/orgs",
  repos_url: "https://api.github.com/users/animeshpandeyit/repos",
  events_url: "https://api.github.com/users/animeshpandeyit/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/animeshpandeyit/received_events",
  type: "User",
  site_admin: false,
  name: "ANIMESH PANDEY",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "गुरु गृह गये पढ़न रघुराई, अल्पकाल विद्या सब पाई",
  twitter_username: null,
  public_repos: 26,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2020-06-15T21:43:36Z",
  updated_at: "2024-04-23T21:25:41Z",
};


app.get("/github", (req, res) => {
  res.send(gitHubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
