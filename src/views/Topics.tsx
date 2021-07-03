import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link, Switch, Route, useParams, BrowserRouter} from 'react-router-dom';
import './Topics.css'
import {generateTopicsWithPictures} from "../helpers";
import {TopicsStateInt} from "../types/stateProperties";
import {formatString} from "../helpers/format";
import {CardWithImage} from "../components/CardWithImage";



export const Topics = () => {
    //@ts-ignore
    let { topicId } = useParams();
    let match = useRouteMatch();
    const [topics, setTopics] = useState<TopicsStateInt[]>([]);


    useEffect(  () => {
        // @ts-ignore
    generateTopicsWithPictures(4).then(
        (r) => {
            const {topics, pictures} = r;
            let newTopics: TopicsStateInt[] = [];
            topics.forEach((topic: any, index:number) => {
                newTopics.push({
                    id: topic.id,
                    name: formatString.fromSnakeCase(topic.name),
                    description: topic.description,
                    picture: pictures[index],
                })
                console.log(newTopics)
            })

            setTopics(newTopics)
        },
        (e) => {
            console.log(`ERROR: ${e}`)
        })

    }, [])

    return(
        <div >
                {   topics
                    &&
                    topics.map((topic) => <CardWithImage name={topic.name} id={topic.id} picture={topic.picture} description={topic.description} />)
                }
        </div>
    )

}