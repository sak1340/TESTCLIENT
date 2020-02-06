import React from 'react';
import './Bookcard.css'
const Bookcard = props => {
    return (
        <div className="bookcard">
            <p>Title : {props.title}</p>
            <img src={props.imageUrl} />
            <div>
                <button onClick = {props.UpdateBook}>Update</button>
                <button onClick = {props.deleteBook}>Delete</button>
            </div>
        </div>
    )
}
export default Bookcard;