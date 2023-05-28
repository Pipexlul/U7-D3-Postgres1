import manager from "./manager.js";
const { query } = manager;

const POSTS_TABLENAME = "posts";

const retrievePosts = async () => {
  try {
    const posts = await query(`SELECT * FROM ${POSTS_TABLENAME};`);

    return posts.rows;
  } catch (err) {
    throw new Error(err.message || err);
  }
};

const insertPost = async ({ titulo, url, descripcion }) => {
  try {
    await query(
      `INSERT INTO ${POSTS_TABLENAME} (titulo, img, descripcion) VALUES ($1, $2, $3);`,
      [titulo, url, descripcion]
    );
  } catch (err) {
    throw new Error(err.message || err);
  }
};

export { retrievePosts, insertPost };
