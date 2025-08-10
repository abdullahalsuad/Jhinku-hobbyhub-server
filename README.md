# 🧠 BrainWave Server

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🚀 Description

**BrainWave Server** powers a modern article publishing platform for tech creators and enthusiasts.  
It provides secure, scalable APIs for managing articles, likes, comments, and user authentication with Firebase.  
Built with a focus on performance and developer experience, BrainWave is your backend for the next-gen knowledge hub!

---

## 🛠️ Tech Stack

| Technology                                                                                 | Purpose                         |
| ------------------------------------------------------------------------------------------ | ------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)       | JavaScript runtime              |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) | Web framework                   |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)       | NoSQL database                  |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)    | MongoDB ODM                     |
| ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)    | Authentication (JWT)            |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)          | Cloud deployment                |
| ![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?logo=dotenv&logoColor=black)          | Environment variable management |
| ![CORS](https://img.shields.io/badge/CORS-00599C?logo=cors&logoColor=white)                | Cross-origin resource sharing   |

---

## ✨ Main Features

- 🔒 **JWT Authentication** with Firebase
- 📝 **CRUD APIs** for articles
- 🏷️ **Category & Tag Filtering**
- 👍 **Like/Dislike** system
- 💬 **Commenting** on articles
- 📊 **User stats**: total likes, comments, articles
- 🕒 **Recent articles** endpoint
- 🚀 **Ready for Vercel deployment**

---

## 📂 Project Structure

```
src/
  server.js
  config/
    db.js
    firebase.js
    serviceAccountKey.json
  controllers/
    articleController.js
  middleware/
    verifyToken.js
  models/
    articleModel.js
  routes/
    articleRoutes.js
```

---

## 🏁 Getting Started

1. **Clone the repo**
2. `npm install`
3. Add your `.env` with `MONGO_URI`
4. `npm run dev` to start in development

<br /><br />

# 🧠 BrainWave Server API Documentation

**Base URL:** [`https://brain-wave-server.vercel.app/`](https://brain-wave-server.vercel.app/)

---

## Authentication

Most endpoints require a valid Firebase JWT token in the `Authorization` header:

```
Authorization: Bearer <your_token>
```

---

## Endpoints

### 📄 Articles

#### `GET /api/v1/articles`

Get all articles.

**Query Parameters:**

- `category` (optional): Filter by category
- `tag` (optional): Filter by tag

**Response:**

```json
[
  {
    "_id": "articleId",
    "title": "Article Title",
    "content": "Article content...",
    "author": "userId",
    "category": "Tech",
    "tags": ["Node.js", "API"],
    "likes": 5,
    "comments": [],
    "createdAt": "2025-06-17T12:00:00Z"
  }
]
```

---

#### `GET /api/v1/articles/:id`

Get a single article by ID.

---

#### `POST /api/v1/articles`

Create a new article.  
**Auth required**

**Body:**

```json
{
  "title": "My Article",
  "content": "Content here...",
  "category": "Tech",
  "tags": ["Node.js", "API"]
}
```

---

#### `PUT /api/v1/articles/:id`

Update an article.  
**Auth required**

---

#### `DELETE /api/v1/articles/:id`

Delete an article.  
**Auth required**

---

### 👍 Likes

#### `POST /api/v1/articles/:id/like`

Like or unlike an article.  
**Auth required**

---

### 💬 Comments

#### `POST /api/v1/articles/:id/comments`

Add a comment to an article.  
**Auth required**

**Body:**

```json
{
  "text": "Great article!"
}
```

---

#### `GET /api/v1/articles/:id/comments`

Get all comments for an article.

---

### 👤 User Stats

#### `GET /api/v1/users/:id/stats`

Get user stats: total articles, likes, comments.

**Response:**

```json
{
  "articles": 10,
  "likes": 42,
  "comments": 15
}
```

---

## 🛠️ Error Handling

Errors are returned as:

```json
{
  "error": "Error message"
}
```

---

## 🏁 Try it out!

Visit the deployed API:  
[https://brain-wave-server.vercel.app/](https://brain-wave-server.vercel.app/)
