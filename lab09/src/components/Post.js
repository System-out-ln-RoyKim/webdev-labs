import React from 'react';
import LikeButton from './LikeButton.js';
import BookmarkButton from './BookmarkButton.js';
// import {getHeaders} from './utils';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }

        this.requeryPost = this.requeryPost.bind(this);
    }

    async requeryPost() {
        const response = await fetch(`/api/posts/${this.state.post.id}`)
        const post = await response.json()
        // console.log(post)
        this.setState({post: post})

        // fetch(`/api/posts/${this.state.post.id}`
        //         // , {
        //         // headers: getHeaders()
        //         // }
        //     )
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({ 
        //             post: data
        //         });
        //     });
    }
    
    render () {
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="card-header">
                    <h3>{ post.user.username }</h3>
                    <button>
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div className="buttons">
                        <div>
                            <LikeButton 
                                postId={post.id} 
                                likeId={post.current_user_like_id}
                                requeryPost={this.requeryPost} />
                            <button>
                                <i className="far fa-comment"></i>
                            </button>
                            <button>
                                <i className="far fa-paper-plane"></i>
                            </button>
                        </div>
                        <div>
                            <BookmarkButton 
                                    postId={post.id} 
                                    bookmarkId={post.current_user_bookmark_id}
                                    requeryPost={this.requeryPost} />
                        </div>
                    </div>
                    <p className="likes" id={"likes-"+post.id}><strong>{ post.likes.length } like{post.likes.length !== 1 ? 's' : ''}</strong></p>
                    <div className="caption">
                        <p>
                            <strong>{ post.user.username }</strong> 
                            { post.caption }
                        </p>
                    </div>
                </div>
                {/* <div className="info">
                    <div>
                        <LikeButton 
                            postId={post.id} 
                            likeId={post.current_user_like_id}
                            requeryPost={this.requeryPost} />
                        
                        Additional data / controls go here...
                    </div>
                    <p>{ post.caption }</p>
                </div> */}
            </section> 
        );     
    }
}

export default Post;