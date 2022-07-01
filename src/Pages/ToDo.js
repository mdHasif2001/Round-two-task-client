import React, { useState } from 'react';


const ToDo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, ind) => {
            return ind !==  id;
        });

        setItems(updatedItems);
    }
    return (
        <div className='mb-72'>

            {/* ... */}

            <div className='flex align-middle justify-center mt-16'>

                <input type="text" placeholder="Add You task here" class="input input-bordered input-primary w-full max-w-xs"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />

                <i className='fa fa-plus mt-4 -ml-5 hover:text-indigo-800' title='add here'
                    onClick={addItem}
                ></i>
            </div>

            {/* ... */}

            <div className='border-2 border-primary mt-2 rounded-md flex' style={{ height: '50px', width: '290px', marginLeft: '537px', backgroundColor: '', color: '' }}>

                {
                    items.map((elem, ind) => {
                        return (
                            <div className='flex' key={ind}>
                                <h3 className='p-2'>{ elem }</h3>
                                <i className='fa fa-check mt-4  hover:text-indigo-800' style={{ marginLeft: '208px' }} title='complete task'
                                onClick={() => deleteItem(ind)}
                                ></i>

                            </div>

                        )
                    })
                }

            </div>

            {/* ... */}

            {/* <div>
            <button><span>Check List</span></button>
        </div> */}





        </div>
    );
};

export default ToDo;