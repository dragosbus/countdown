import React, { Component } from 'react';


export const Timer = props =>{
    return(
        <div className="timer">
            <p>{props.days}</p>
            <p>{props.hours}</p>
            <p>{props.minutes}</p>
            <p>{props.seconds}</p>
        </div>
    );
};