require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
  "login": "abrar37",
  "id": 83450580,
  "node_id": "MDQ6VXNlcjgzNDUwNTgw",
  "avatar_url": "https://avatars.githubusercontent.com/u/83450580?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abrar37",
  "html_url": "https://github.com/abrar37",
  "followers_url": "https://api.github.com/users/abrar37/followers",
  "following_url": "https://api.github.com/users/abrar37/following{/other_user}",
  "gists_url": "https://api.github.com/users/abrar37/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abrar37/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abrar37/subscriptions",
  "organizations_url": "https://api.github.com/users/abrar37/orgs",
  "repos_url": "https://api.github.com/users/abrar37/repos",
  "events_url": "https://api.github.com/users/abrar37/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abrar37/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Abrar Ahmad",
  "company": null,
  "blog": "",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2021-04-30T09:58:58Z",
  "updated_at": "2024-06-08T13:05:16Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('<h1>Express App</h1>')
    
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on, http://localhost:${port}/`)
})