import React, { Component } from 'react';


export const Timer = props =>{

    let days = props.date / (1000 * 3600 * 24);
    let hours = (days - parseInt(days)) * 24;
    let minutes = (hours - parseInt(hours)) * 60;
    let seconds = (minutes - parseInt(minutes)) * 60;
    //because the decrementer is called when the component is called
    //the seconds become negative
    //so, when is negative the value become 0
    return(
        <div className="timer">
            <p>{parseInt(days)} days</p>
            <p>{parseInt(hours)} hours</p>
            <p>{parseInt(minutes)} min</p>
            <p>{parseInt(seconds) < 0 ? 0 : parseInt(seconds)} sec</p>
        </div>
    );
};