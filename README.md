# Blog Website

A simple blog website built with Node.js, Express, MongoDB, and vanilla HTML/CSS/JavaScript. This application allows users to read and write blog posts.

## Features

- Create new blog posts
- View existing blog posts


## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [MongoDB](https://www.mongodb.com/) (ensure the MongoDB server is running)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Anirudha2001/Blog-website.git
    cd blog-website
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

Ensure your MongoDB server is running on the default port `27017`. If MongoDB is running on a different port or host, update the connection string in `server.js`.

## Running the Project

1. **Start the Node.js server:**

    ```bash
    node server.js
    ```

    The server will start on [http://localhost:3000](http://localhost:3000).

2. **Open the website:**

    Open `public/index.html` in your browser to view the blog website.

## Usage

### Creating a New Post

1. Fill in the "Title" and "Content" fields in the "New Post" section.
2. Click the "Submit" button to create the post.

### Viewing Posts

- Existing posts are displayed under the "Blog Posts" section.

