import { useState } from 'react'


function CommentPage() {

    const [ironman, setComments] = useState([])
    const [post, setPost] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments/first')
        const data = await response.json()
        setComments(data)
    }

    const submitPost = async () => {
        const response = await fetch('/api/comments/first', {
            method: 'POST',
            body: JSON.stringify({ post }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    return(
        <>
            <input type='text' value={post} onChange={(e) => setPost(e.target.value)}></input>
            <button onClick={submitPost}>Submit</button>
            <button onClick={fetchComments}>Load Comments</button>
            {ironman.map(comment => {
                return(
                <div key={comment.id}>
                    {comment.id} {comment.name}

                </div>
                )
            })}
        </>
    )

}
export default CommentPage