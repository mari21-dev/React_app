import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt=""/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div><img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/></div>
                <div>ava+description</div>
                <div>My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}


export default App;
