import React, { Component } from 'react';


export const Form = props =>{
    let today = new Date().toISOString().substring(0,10);
    
    return(
        <form className="add-form">
            <input type="date" min={today}/>
            <button type="submit">Add</button>        
        </form>
    );
};