import React from 'react'
import { getHeaders } from '../utils.js'

export default class BookmarkButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
        
        this.state = {
            bookmarkId: this.props.bookmarkId
        }
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('unbookmark');
            this.unbookmark();
        } else {
            console.log('bookmark');
            this.bookmark();
        }
    }

    async bookmark() {
        // console.log('code to like the post');
        // issue fetch request and then afterwards requery for the post:
        const postData = {
            "post_id": this.props.postId
        }
        const response = await fetch(`/api/bookmarks`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(postData)
        })
        const bookmark = await response.json()
        this.setState({bookmarkId: bookmark.id})
        await this.props.requeryPost();
    }

    async unbookmark() {
        // console.log('code to unlike the post');
        // issue fetch request and then afterwards requery for the post:
        await fetch(`/api/bookmarks/${this.state.bookmarkId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
        // const likepost = await response.json()
        this.setState({bookmarkId: undefined})
        await this.props.requeryPost();
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
            </button>
        ) 
    }
}
