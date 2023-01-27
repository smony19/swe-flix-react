import React, { useState } from "react";

function Card(props) {

    const [favourite, setFavourite] = useState();
    const [completed, setCompleted] = useState();

    function handleFavChange(){
        setFavourite(!favourite);
        props.toggleFavourite(props.id);
    }

    function handleCompletedChange(){
        setCompleted(!completed);
        props.toggleCompleted(props.id);
    }

    const favouriteIcon = favourite ? "favorite" : "favorite_border";
    const completedIcon = completed ? "done" : "add";

    return(
        <div className="card">
            <img
                src={require('./img/java-logo-sm.png')}
                alt="java logo"
            />
            <div className="card--content">
                <h2 className="card--title">{props.title}</h2>
                <p className="card--description">
                {props.description}
                </p>
            </div>
            <div className="card--actions">
                <button type="button" className="button--icon" onClick={() => handleFavChange()}>
                    <span className="material-icons">{favouriteIcon}</span>
                </button>
                <button type="button" className="button--icon" onClick={() => handleCompletedChange()}>
                    <span className="material-icons">{completedIcon}</span>
                </button>
                <button className="button--play">PLAY</button>
            </div>
        </div>
    );
}

export default Card;