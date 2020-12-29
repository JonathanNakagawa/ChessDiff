import React from 'react';

function Games(props) {
    return(
        <div>
            games
            {props.gamesList.map((item, index) => (<div key={index}> {JSON.stringify(item)} </div>))}
        </div>
    );
}
export default Games;