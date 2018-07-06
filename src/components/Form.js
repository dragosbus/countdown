import React, { Component } from 'react';


export const Form = props =>{
    let today = new Date().toISOString().substring(0,10);
    let dateValue;

    function getToday(e) {
        e.preventDefault();
        props.setDate(dateValue.value);
    }
    
    return(
        <form className="add-form" onSubmit={getToday}>
            <input ref={d=>dateValue=d} type="date" min={today}/>
            <button type="submit">Add</button>        
        </form>
    );
};