import React from "react";

function Food({fav}) {
    console.log(fav);
    return (
        <h1>I like {fav}</h1>
    );
}

export default Food;