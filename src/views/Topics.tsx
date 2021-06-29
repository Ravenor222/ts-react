import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link, Switch, Route, useParams, BrowserRouter} from 'react-router-dom';
import {Card, CardActionArea, CardActions, CardHeader, Typography} from "@material-ui/core";
import {Topic} from "./Topic";
import './Topics.css'
import {generateTopics} from "../helpers/generateTopics";
import { Button } from '@material-ui/core';
import {generatePictures} from "../helpers/generatePictures";
import {PictureParameterConstructor} from "../types/pictureParameters";
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

export const Topics = () => {
    let match = useRouteMatch();
    const [topics, setTopics] = useState([]);
    const [images, setImages] = useState([]);
    //@ts-ignore
    let { topicId } = useParams();

    useEffect(  () => {
        // @ts-ignore
        let newTopics = generateTopics(4);
        // setImages()
        const pictures = async () => {
            let s = await generatePictures(PictureParameterConstructor(4, 300, 300))
            setImages(s)
        }
        pictures()



        let test2: any = [];
        let imageClone = images.map(x => x)
        console.log(newTopics)

        newTopics.forEach((y: any, i) => {
            let image = imageClone[i]
            console.log(image)
            test2.push({
                ...y,
                data:image
            })
        })
        console.log(test2)
        //@ts-ignore
        setTopics(newTopics)

    }, [])




console.log(topics)
    return(
        <div >
            {/*<Card className="card-container">*/}
            {/*    <CardHeader>Topics</CardHeader>*/}
                {   topics
                    &&
                    topics.map((x) => (
                        <Card className={"card-container"}>
                            <CardActionArea>
                                {/*<CardMedia*/}
                                {/*    image={x}*/}
                                {/*    title="Contemplative Reptile"*/}
                                {/*/>*/}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" onClick={() => alert('deleted')}>
                                    Delete
                                </Button>
                                <Link to="/topics/12345">
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))
                }

            {/*</Card>*/}
        </div>
    )
};