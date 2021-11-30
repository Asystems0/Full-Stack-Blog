const router = require("express").Router();

const {
  getAllPosts,
  newPost,
  getPost,
  changePost,
  deletePost,
} = require("../controller/Post");

router.get("/", getAllPosts);
router.post("/", newPost);
router.get("/:id", getPost);
router.put("/:id", changePost);
router.delete("/:id", deletePost);

module.exports = router;
