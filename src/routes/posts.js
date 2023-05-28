import { retrievePosts, insertPost } from "../database/db.js";

const getPosts = async (req, res) => {
  try {
    const posts = await retrievePosts();

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;

    await insertPost({ titulo, url, descripcion });

    res.status(201).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export default {
  getPosts,
  createPost,
};
