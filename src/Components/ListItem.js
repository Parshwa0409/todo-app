import React from 'react'

export default function ListItem(props) {



    return (
        /* 
        <li>
        <button onClick={props.onDeletePressed}>X</button> 
        *** This is fine if we want to show smtg but we also want to know which item is being deleted so what we have to do is pass in the item-key & we cant call this passed-function like 👇 ***
        <button onClick={props.onDeletePressed(props.key)}>X</button> ***WRONG***
        ***RATHER MAKE ANOTHER FUNCTION CALL A CALLBACK KIND OF THING, AS SHOWN BELOW***
        {props.value}
        </li>
        */
        <li><button onClick={() => { props.onDeletePressed(props.id) }}>X</button> {props.value}</li>
    )
}
