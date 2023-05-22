import React, { useState } from 'react'

export default function TextForm() {

    const [items, setItem] = useState([]);
    const [inpText, setText] = useState("");

    const handleOnChange = (e) => {
        let newText = e.target.value;
        setText(newText);
    }

    const addItemToList = () => {
        items.push(inpText);
        items.map((value, index, arr) => { console.log(value, index) });
        setText("");
    }


    return (
        <>
            <center>
                <div className='my-3'>
                    <input type="text" value={inpText} onChange={handleOnChange} />
                    <button onClick={addItemToList}>AddItem</button>
                </div>
            </center>
        </>
    )
}
