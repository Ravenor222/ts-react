import React from 'react';
import {Link} from "react-router-dom";



export const Landing = () => {



    return(
        <div>
            <h1>Landing Router</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/home">Home</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

            </div>
    )
};