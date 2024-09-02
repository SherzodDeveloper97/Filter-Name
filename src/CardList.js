import React from 'react';

const CardList = ({names}) => {
    return (
        <div className='d-flex justify-content-evenly'>
            {names.map((name) => {
                return (
                    <div className='border p-4' key={name.id}>
                        <h1>{name.fName}</h1>
                        <h2>{name.lName}</h2>
                        <p>{name.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default CardList;
