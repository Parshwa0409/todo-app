import React, { useState } from 'react'
import ListItem from './ListItem';

export default function TextForm() {

    const [items, setItem] = useState([]);
    const [inpText, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const addItemToList = () => {

        // we use the "setItem" to actually update the list...
        setItem((oldItems) => {
            // Since this method is used to update the "itemList" this method can be used to access this list like done now.
            return [...oldItems, inpText]
        });

        setText("");
    }

    const handleDeleteItems = (keyOfItem) => {
        console.log(items[keyOfItem] + ' is deleted.');

        // Filter all the elements using condition , return when element.id !== selectedItem.id
        setItem((oldItems) => {
            // Since this method is used to update the "itemList" this method can be used to access this list like done now.
            return oldItems.filter((arrEle, idx) => {
                return idx !== keyOfItem;
            })
        });
    }


    return (
        <>
            <div className='my-3'>
                <input type="text" value={inpText} onChange={handleOnChange} />
                <button onClick={addItemToList}>AddItem</button>
            </div>
            <div className="my-3">
                <ul>
                    {
                        items.map((itemValue, itemIdx) => {
                            // Now we need to add a function to delete item....
                            // And this can be done by recognizing the item by key/id & pass that id back to the top/parent component & then delete from list...
                            // now we need to pass in a function which takes key/id and then call that function when the button of the li-component is clicked
                            return <ListItem value={itemValue} key={itemIdx} id={itemIdx} onDeletePressed={handleDeleteItems} />
                        })
                    }
                </ul>
            </div>
        </>
    )
}
