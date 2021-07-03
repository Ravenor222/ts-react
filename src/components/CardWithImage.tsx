import React from 'react';
import {useRouteMatch, Link, Switch, Route, useParams, useHistory} from 'react-router-dom';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import {TopicsStateInt} from "../types/stateProperties";

export const CardWithImage = (props: TopicsStateInt) => {
    const {id, name, picture, description} = props;
    const history = useHistory();
    let match = useRouteMatch();

    function handleClick() {
        history.push(`/topics/${id}`);
    }

    //@ts-ignore
    let { topicId } = useParams();
    return(
        <div>
            <Card className={"card-container"}>
                {/*<Link to={`/topics/${id}`}>*/}
                    <CardActionArea className={"side-by-side"} onClick={handleClick}>
                        <CardMedia
                            style={{height:"300px", width:"500px"}}
                            image={picture}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{width:"70%"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description && description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                {/*</Link>*/}
            </Card>
        </div>
    )
};