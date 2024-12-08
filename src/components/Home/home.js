import React, {useState} from 'react';
import './home.css';

import pfpImage from '../images/bird.webp';
import linkdin from '../images/linkdin.png';
import github from '../images/git.png';
import resume from '../images/resume.png';


function Home (props){
    return(
        <div className = "main">

            <div className = "top">
                <div className = "top-left">
                    <div className = "pfp-container">
                        <img class = "pic circle" src = {pfpImage} alt=""></img>
                    </div>
                    <div className = "links">
                        <img src = {linkdin} class = "linkdin icon"></img>
                        <img src = {github} class = "git icon"></img>
                        <img src = {resume} class = "resume icon"></img>

                    </div>
                </div>

                <div className = "top-right">
                    <h1 className = "emoji">👋</h1>
                    <h1 class="typing-effect">
                        <span>I</span>
                        <span>'</span>
                        <span>m</span>
                        <span>&nbsp;</span>
                        <span>P</span>
                        <span>r</span>
                        <span>a</span>
                        <span>d</span>
                        <span>o</span>
                        <span>s</span>
                        <span>h</span>
                        <span>,</span><br></br>
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span>e</span>
                        <span>&nbsp;</span>
                        <span>t</span>
                        <span>o</span>
                        <span>&nbsp;</span>
                        <span>m</span>
                        <span>y</span>
                        <span>&nbsp;</span>
                        <span>W</span>
                        <span>e</span>
                        <span>b</span>
                        <span>s</span>
                        <span>i</span>
                        <span>t</span>
                        <span>e</span>
                        <span>!</span>
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Home;