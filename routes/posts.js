const express = require("express")

const router = express.Router()

const postController = require("../controllers/posts")

router.get("/getPosts", postController.getPosts)

router.get("/", (req, res) => res.json({message: "Posts api"}))

module.exports = router