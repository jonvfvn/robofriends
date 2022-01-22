import React from 'react';


const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 card'>
            <img src={`https://robohash.org/${id}?size=150x150`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card