import React from 'react';
import Posts from './components/Posts.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import Suggestions from './components/Suggestions.js'
import Stories from './components/Stories.js'

class App extends React.Component {  

    render () {
        return (
            <div>
                
                <NavBar />

                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>

            </div>
        );
    }
}

export default App;