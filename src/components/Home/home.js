import React, {useState} from 'react';
import './home.css';

import pfpImage from '../images/bird.webp';
import linkdin from '../images/linkdin.png';
import github from '../images/git.png';
import resume from '../images/resume.png';
import test from '../images/test.png';


function Home (props){
    return(
        <div className = "main">

            <div className = "top">
                <div className = "top-left">
                    <div className = "pfp-container">
                        <img class = "pic circle" src = {pfpImage} alt=""></img>
                    </div>
                    <div className = "links">
                        <a href = "https://www.linkedin.com/in/pradosht/">
                            <img src = {linkdin} class = "linkdin icon"></img>
                        </a>
                        <a href = "https://github.com/tpradosh/">
                            <img src = {github} class = "git icon"></img>
                        </a>
                        <a href = "https://drive.google.com/file/d/1UjXCPghZybnWpaoWn6W2ClqCwBRkqcnA/view?usp=sharing">
                            <img src = {resume} class = "resume icon"></img>
                        </a>

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


            <div className = "bottom">
                <div className = "projectGrid">
                    <div className = "typing">
                        <h1>💻 My Projects!</h1>
                    </div>
                    <div className = "project">
                        <a href = "https://github.com/setripper/ZotNostic">
                            <img className = "cover one" src = {test}></img>
                        </a>
                        <div className = "projecttext">
                            <h1 className = "zotnostic">ZOTNostic</h1>
                            <p>ZOTNostic is a </p>
                        </div>
                    </div>

                    <div className = "project">
                        <a href = "https://github.com/tpradosh/tpradosh.github.io">
                            <img className = "cover two" src = {test}></img>
                        </a>
                        <div className = "projecttext">
                            <h1 className = "website">Portfolio Website</h1>
                            <p>ZOTNostic is a </p>
                        </div>
                    </div>

                    <div className = "project three cover"></div>
                        <div className = "project three bot"></div>

                    <div className = "project four cover"></div>
                        <div className = "project four bot"></div>


                </div>
            </div>

        </div>
    )
}

export default Home;