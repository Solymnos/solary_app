import React from 'react';

function PlayersContent({ data })
{
    return (
        <div className='flex flex-grow w-full h-full bg-green-300'>
            <h1 className='text-red-500'>PLAYERS</h1>
            <h2 className='text-pink-300'>{data}</h2>
        </div>
    )
}

export default PlayersContent;