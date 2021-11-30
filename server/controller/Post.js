const Post = require("../models/Post");
const { postValidation } = require("../models/validation");

module.exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports.newPost = async (req, res) => {
  try {
    //VALIDATE THE DATA BEFORE WE A USER
    const { error } = postValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const data = {
      title: req.body.title,
      datetime: req.body.datetime,
      body: req.body.body,
    };

    const post = await new Post(data).save();
    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) return res.status(400).json({ message: "Post Not Found" });
    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.changePost = async (req, res) => {
  try {
    //VALIDATE THE DATA BEFORE WE A USER
    const { error } = postValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const editPost = {
      title: req.body.title,
      datetime: req.body.datetime,
      body: req.body.body,
    };

    const post = await Post.findOneAndUpdate({ _id: req.params.id }, editPost);
    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
