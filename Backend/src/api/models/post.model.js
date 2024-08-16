const mongoose  = require("mongoose");

//Defining Post Schema
const postSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true, 
            min : 50,
            trim: true
        },
        content: { 
            type: String, 
            required: true, 
            min : 100
        },
        author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            // required: true, 
        },
        category: { 
            type: String, 
            enum: ['Technology', 'Travel','Lifstyle'],
            default: 'Test',
            required: true
        },
        img: {
            type: String,
            required :true
        }
    },{
        timestamps : true
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
