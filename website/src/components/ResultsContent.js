import React , { useState } from 'react';

function ResultCard({ type, competition, team_left_name, team_left_icon, team_left_score, team_right_name, team_right_icon, team_right_score, format, date, _id, setOpenModal, setModalData}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative rounded-xl overflow-hidden w-full h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered && (
                <div className='absolute flex-row inset-0 bg-gray-900 opacity-90 flex justify-center items-center z-10'>
                    <button onClick={() => {setModalData({_type: type, _competition : competition, _teamLeftName : team_left_name, _teamLeftIcon : team_left_icon, _teamLeftScore : team_left_score, _teamRightName : team_right_name, _teamRightIcon : team_right_icon, _teamRightScore : team_left_score, _format : format, _date : date, resultId : _id });setOpenModal('updateResultModal');}} className='bg-green-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Modifier</button>
                    <button onClick={() => {setModalData({resultId : _id});setOpenModal('deleteResultModal');}} className='bg-red-500 text-black m-4 w-1/3 h-1/5 rounded-xl'>Supprimer</button>
                </div>
            )}
            <div className='w-full flex flex-row mt-8'>
                <div className='flex flex-row w-1/2 justify-between items-center'>
                    <img src={team_left_icon} alt='team left icon' className='h-24 ml-12'/>
                    <h1 className='text-white mt-4 text-4xl'>{team_left_name}</h1>
                    <h2 className='text-white text-3xl border-2 border-white rounded-xl p-4 m-4'>{team_left_score}</h2>
                </div>
                <div className='flex flex-row w-1/2 items-center justify-between'>
                    <h2 className='text-white text-3xl border-2 border-white rounded-xl p-4 m-4'>{team_right_score}</h2>
                    <h1 className='text-white mt-4 text-4xl'>{team_right_name}</h1>
                    <img src={team_right_icon} alt='team left icon' className='h-24 mr-12'/>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='text-white text-2xl'>{format}</h2>
                <h1 className='text-white text-xl mb-6'>{competition}</h1>
            </div>
        </div>
    )
}

function ResultsContent({ data, setOpenModal, setModalData })
{
    let dataSorted = data.map(result => ({
        ...result,
        date : new Date(result.date)
    }));
    dataSorted.sort((a, b) => b.date - a.date);
    return (
        <div className='overflow-y-auto bg-black w-full'>
            <div onClick={() => setOpenModal('createResultModal')} className='flex flex-grow items-center border-2 border-white rounded-2xl text-center justify-center m-4'>
                <h1 className='text-white text-9xl mb-6'>+</h1>
                <h1 className='text-white text-4xl p-6'>Ajouter un nouveau résultat</h1>
            </div>
            {dataSorted.map((result) => (
                <div className='flex flex-grow items-center border-2 border-white rounded-2xl text-center justify-center m-4'>
                    <ResultCard {...result} setModalData={setModalData} setOpenModal={setOpenModal} />
                </div>
            ))}
        </div>
    )
}

export default ResultsContent;