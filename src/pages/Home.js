import React from 'react';
import Card from '../components/Card';
import {posts} from "../data";

function Home() {
  return (
    <div className="home">
        {posts && posts.map(post=>(
            <Card key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Home