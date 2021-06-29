import React from 'react';
import {useRouteMatch, Link, Switch, Route, useParams} from 'react-router-dom';


export const Topic = (props: any) => {
    let match = useRouteMatch();

    //@ts-ignore
    let { topicId } = useParams();
    console.log(match, topicId)
    return(
        <div>
            <h1>Individual Topic</h1>

            <ul>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to="/topics/">Topics</Link>
                </li>
            </ul>
        </div>
    )
};