import React from 'react';

function UpcomingContent({ data })
{
    return (
        <div className='flex flex-grow w-full h-full'>
            <h1 className='text-red-500'>UPCOMING</h1>
            <h2 className='text-pink-300'>{data}</h2>
        </div>
    )
}

export default UpcomingContent;