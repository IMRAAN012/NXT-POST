import { family } from "../../../data/comments";

export default function handler(req,res){
    if (req.method === 'GET') {
        res.status(200).json(family)
    } else if (req.method === 'POST') {
        const oldpost = req.body.post
        const newPost = {
            id: Date.now(),
            name: oldpost
        }
        family.push(newPost)
        res.status(201).json(newPost)
    }
    
}