import React, { Component } from 'react'
import { getHeaders } from '../utils.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
        
        this.fetchProfile = this.fetchProfile.bind(this)
    }

    componentDidMount() {
        this.fetchProfile();
    }

    async fetchProfile() {
        const response = await fetch('/api/profile', {
            headers: getHeaders()
        })
        const profile = await response.json()
        // console.log(post)
        this.setState({profile: profile})
    }


    render() {
        return (
            <nav className="main-nav">
                <h1>Photo App</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><span>{ this.state.profile.username }</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul>
            </nav>
        )
    }
}
