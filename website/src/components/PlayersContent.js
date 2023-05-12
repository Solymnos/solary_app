import React, { useState } from 'react';

let data_test = [
    {
        id : 0,
        name : 'Peng',
        role : 'Mid',
        type : 'STAFF',
        icon : 'https://d2ix1vn492wbxl.cloudfront.net/player/62d041f3-0750-408e-9516-e005665febee.jpg',
    }
]

function PlayerCard({ name, role, icon }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative rounded-xl overflow-hidden w-full h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered && (
                <div className='absolute flex-col inset-0 bg-gray-900 opacity-90 flex justify-center items-center z-10'>
                    <button className=' bg-green-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Modifier</button>
                    <button className=' bg-red-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Supprimer</button>                    
                </div>
            )}
            <img src={icon} alt='player icon' className='h-72 w-full object-cover rounded-t-xl'/>
            <div className='flex flex-col w-full flex-grow items-center mt-3'>
                <h1 className='text-white text-2xl font-medium mb-2 m-auto'>{name}</h1>
                <p className='text-white m-auto'>{role}</p>
            </div>
        </div>
    )
}

function PlayersContent({ data })
{
    return (
        <div className='flex flex-grow w-full h-full overflow-auto bg-black flex-col'>
            <h1 className='text-white text-5xl ml-6'>Joueurs</h1>
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full'>
                {data_test.map((data) => (
                    <div key={data.id} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl'>
                        <PlayerCard {...data} />
                    </div>
                ))}
                <div className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl text-center justify-center'>
                    <h1 className='text-white text-9xl mb-6'>+</h1>
                    <h1 className='text-white text-4xl p-6'>Ajouter un nouveau joueur</h1>
                </div>
            </div>
            <h1 className='text-white text-5xl ml-6'>Staff</h1>
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full'>
                {data_test.map((data) => (
                    <div key={data.id} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl'>
                        <PlayerCard {...data} />
                    </div>
                ))}
                <div className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl text-center justify-center'>
                    <h1 className='text-white text-9xl mb-6'>+</h1>
                    <h1 className='text-white text-4xl p-6'>Ajouter un nouveau staff</h1>
                </div>
            </div>
        </div>
    )
}

export default PlayersContent;