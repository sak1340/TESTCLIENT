import React, { useState } from 'react';

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    return (
        <div>
            <input placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} /> <br />
            <input placeholder='Image Url' onChange={(e) => { setImageUrl(e.target.value) }} /> <br />
            <button onClick={() => { props.onClick({title,imageUrl}) }}>Add</button>
        </div>
    )
}
export default Form;