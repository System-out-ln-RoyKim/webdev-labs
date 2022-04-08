import React from 'react';
import {getHeaders} from '../utils';

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
        
        this.state = {
            likeId: this.props.likeId
        }
    }

    async toggleLike(ev) {
        if (this.props.likeId) {
            console.log('unlike');
            await this.unlike();
        } else {
            console.log('like');
            await this.like();
        }
    }

    async like() {
        // console.log('code to like the post');
        // issue fetch request and then afterwards requery for the post:
        const response = await fetch(`/api/posts/${this.props.postId}/likes`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({})
        })
        const likepost = await response.json()
        this.setState({likeId: likepost.id})
        await this.props.requeryPost();
    }

    async unlike() {
        // console.log('code to unlike the post');
        // issue fetch request and then afterwards requery for the post:
        await fetch(`/api/posts/${this.props.postId}/likes/${this.state.likeId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
        // const likepost = await response.json()
        this.setState({likeId: undefined})
        await this.props.requeryPost();
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button role="switch"
                className="like" 
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}>
                <i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i>                        
            </button>
        ) 
    }
}

export default LikeButton;