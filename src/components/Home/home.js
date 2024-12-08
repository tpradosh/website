import React, {useState} from 'react';
import './home.css';

import pfpImage from '../images/bird.webp';


function Home (props){
    return(

        <div className = "main">
            <div className ="top">

                <div className = "pfp">
                    <img src = {pfpImage} alt ="" class="pic"></img>
                </div>

                <div className = "intro">
                    <p>👋 Hi There </p>
                    <p>Im Pradosh Thirunavukkarsu, a sophmore 
                        @uci currently studying computer science
                    </p>
                </div>

            </div>




        </div>
    )
}

export default Home;