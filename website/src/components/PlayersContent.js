import React, { useState } from 'react';

function PlayerCard({ name, role, icon, type, _id, setOpenModal, setModalData }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative rounded-xl overflow-hidden w-full h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered && (
                <div className='absolute flex-col inset-0 bg-gray-900 opacity-90 flex justify-center items-center z-10'>
                    <button onClick={() => {setModalData({playerId : _id, playerName : name, playerRole : role, playerIcon : icon, playerType : type}); setOpenModal('updatePlayerModal');}} className=' bg-green-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Modifier</button>
                    <button onClick={() => {setModalData({playerId : _id, playerName : name });setOpenModal('deletePlayerModal');}} className=' bg-red-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Supprimer</button>                    
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

function PlayersContent({ data, setOpenModal, setModalData })
{
    return (
        <div className='overflow-y-auto bg-black'>
            <h1 className='text-white text-5xl ml-6'>Joueurs</h1>
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full'>
                {data.filter(player => player.type === 'PLAYER').map((player) => (
                    <div key={player._id} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl'>
                        <PlayerCard {...player} setModalData={setModalData} setOpenModal={setOpenModal} />
                    </div>
                ))}
                <div onClick={() => {setModalData({ type : 'PLAYER' });setOpenModal('createPlayerModal')}} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl text-center justify-center'>
                    <h1 className='text-white text-9xl mb-6'>+</h1>
                    <h1 className='text-white text-4xl p-6'>Ajouter un nouveau joueur</h1>
                </div>
            </div>
            <h1 className='text-white text-5xl ml-6'>Staff</h1>
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full'>
                {data.filter(player => player.type === 'STAFF').map((player) => (
                    <div key={player._id} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl'>
                        <PlayerCard {...player} />
                    </div>
                ))}
                <div onClick={() => {setModalData({ type : 'STAFF' });setOpenModal('createPlayerModal')}} className='flex flex-grow flex-col h-96 w-full items-center border-2 border-white rounded-2xl text-center justify-center'>
                    <h1 className='text-white text-9xl mb-6'>+</h1>
                    <h1 className='text-white text-4xl p-6'>Ajouter un nouveau staff</h1>
                </div>
            </div>
        </div>
    )
}

export default PlayersContent;