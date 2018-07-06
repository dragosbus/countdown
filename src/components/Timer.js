import React, { Component } from 'react';


export const Timer = props =>{
    return(
        <div className="timer">
            <p>{props.days} days</p>
            <p>{props.hours} hours</p>
            <p>{props.minutes} min</p>
            <p>{props.seconds} sec</p>
        </div>
    );
};