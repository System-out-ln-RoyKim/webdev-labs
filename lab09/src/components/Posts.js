import React from 'react'
// import PropTypes from 'prop-types'
import { getHeaders } from '../utils.js'
import Post from './Post.js'

class Posts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('/api/posts', {
                // authentication headers added using 
                // getHeaders() function from src/utils.js
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
    }
    
    render () {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post model={post} key={'post-' + post.id} />
                        )
                    })
                }
            </div>
        );     
    }
}

export default Posts