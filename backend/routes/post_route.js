const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
// const PostModel = require('../models/post_models');
const mongoose = require('mongoose');
const PostModel = mongoose.model("PostModel");
const { body, validationResult } = require('express-validator');


// ROUTER 1 :-> Add create post.
router.post('/createpost', fetchuser, [
    body('description', 'Enter a valid description').isLength({ min: 1 }),
    body('image', 'Put a valid image'),

], async (req, res) => {

    try {
        const { description, image } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // req.user.password = undefined
        const postObj = new PostModel({
            description, image, author: req.user.id

        })
        // console.log(req.user);

        const savePost = await postObj.save() //saves the entries
        // .then((newpost) => {
        //     res.status(201).json({ post: newpost })
        // })
        // res.json(savedSale);
        res.json(savePost)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error. Unable to add entries.")
    }

});

// router.post("/createpost", fetchuser, (req, res) => {
//     const { description, image } = req.body;
//     if (!description || !image) {
//         return res.status(400).json({ error: "One or more mandatory fields are empty" });
//     }
//     // req.user.password = undefined;
//     const postObj = new PostModel({ description: description, image: image, author: req.user });
//     postObj.save()
//         .then((newPost) => {
//             res.status(201).json({ post: newPost });
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });

// ROUTER 2 :-> Get all the sales.
// router.get('/allpost', fetchuser, async (req, res) => {
//     try {
//         const total = await PostModel.find({ user: req.user.id });
//         res.json(total);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send("Internal Server Error. Unable to add entries.")
//     }
// });

// Get specific user post
router.get('/myposts', fetchuser, async (req, res) => {
    try {
        const posts = await PostModel.find({ author: req.user.id });
        res.json(posts)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Get  all user posts
router.get('/allposts', fetchuser, async (req, res) => {
    try {
        const posts = await PostModel.find({ id: req.user.id });
        res.json(posts)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})







// router.get('/allpost', fetchuser, async (req, res) => {
//     PostModel.find({ author: req.user._id })
//         .populate("author", "_id fullName profileImg")
//         .then((dbPosts) => {
//             res.status(200).json({ post: dbPosts })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });






// ROUTER 3 :-> Update the entry. 
router.put('/updatepost/:id', fetchuser, [
    body('productName', 'Enter a valid productName'),
    body('quantity', 'Enter a valid quantity'),
    body('amount', 'Enter a valid amount')
], async (req, res) => {
    const { productName, quantity, amount } = req.body;

    try {

        //Create new entry
        const newSale = {};
        if (productName) {
            newSale.productName = productName
        }
        if (quantity) {
            newSale.quantity = quantity
        }
        if (amount) {
            newSale.amount = amount
        }

        //Find the sale an update it
        let sale = await PostModel.findById(req.params.id);
        if (!sale) {
            res.status(404).send("Not Found")
        }

        if (sale.user.toString() !== req.user.id) {   //toString() give the id of this note
            return res.status(401).send("Not allowed");
        }

        sale = await PostModel.findByIdAndUpdate(req.params.id, { $set: newSale }, { new: true })
        res.json({ sale });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error. Unable to add entries.")
    }

})

// ROUTER 4 :-> Delete the entry. 
router.delete('/deletepost/:id', fetchuser, async (req, res) => {

    try {
        //Find the sale an delete it
        let post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).send("Not Found")
        }

        //Allow deletion onlu user owns this note
        if (post.author.toString() !== req.user.id) {   //toString() give the id of this note
            return res.status(401).send("Not allowed");
        }

        post = await PostModel.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note as been successfully deleted", post: post });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error. Unable to delete entries.")
    }

})

//Route LIKE functionality
router.put("/like", fetchuser, (req, res) => {
    PostModel.findByIdAndUpdate(req.body.postId, {
        $push: { likes: req.user.id }
    }, {
        new: true
    }).populate('author', 'id fullName')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({ error: error })
            } else {
                res.json(result)
            }
        })
}
);

//Route UNLIKE functionality
router.put("/unlike", fetchuser, (req, res) => {
    PostModel.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: req.user.id }
    }, {
        new: true
    }).populate('author', 'id fullName')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({ error: error })
            } else {
                res.json(result)
            }
        })
}
);

//Route COMMENT functionality
router.put("/comment", fetchuser, (req, res) => {

    const comment = { commentText: req.body.commentText, commentedBy: req.user.id }

    PostModel.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true
    }).populate('comments.commentedBy', 'id fullName') //user who commented
        .populate("author", "id fullName") //post owner
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({ error: error })
            } else {
                res.json(result)
            }
        })
}
);


module.exports = router;