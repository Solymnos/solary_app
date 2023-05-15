import React, { useState } from 'react';
import { postNewResult } from '../api/apiHelper';
import './Modal.css';

import ReactDatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

function CreateResultModal({ closeModal , toastOnMain , gameId })
{
    const [ type , setType ] = useState('OPPO');
    const [ competition , setCompetition ] = useState('');
    const [ teamLeftName , setTeamLeftName ] = useState('');
    const [ teamLeftIcon , setTeamLeftIcon ] = useState('');
    const [ teamLeftScore , setTeamLeftScore ] = useState('');
    const [ teamRightName , setTeamRightName ] = useState('');
    const [ teamRightIcon , setTeamRightIcon ] = useState('');
    const [ teamRightScore , setTeamRightScore ] = useState('');
    const [ format , setFormat ] = useState('');
    const [ date , setDate ] = useState('');
    const [ selectedDate, setSelectedDate ] = useState(null);
    const [ selectedTime, setSelectedTime ] = useState(null);

    const handleSDateChange = (date) =>
    {
        setSelectedDate(date);
        handleDateChange(date, selectedTime);
    }

    const handleTimeChange = (time) =>
    {
        setSelectedTime(time);
        handleDateChange(selectedDate, time);
    }

    const handleTypeChange = (event) =>
    {
        setType(event.target.value);
    }

    const handleCompetitionChange = (event) =>
    {
        setCompetition(event.target.value);
    }

    const handleTeamLeftName = (event) =>
    {
        setTeamLeftName(event.target.value);
    }

    const handleTeamLeftIcon = (event) =>
    {
        setTeamLeftIcon(event.target.value);
    }

    const handleTeamLeftScore = (event) =>
    {
        setTeamLeftScore(event.target.value);
    }

    const handleTeamRightName = (event) =>
    {
        setTeamRightName(event.target.value);
    }

    const handleTeamRightIcon = (event) =>
    {
        setTeamRightIcon(event.target.value);
    }

    const handleTeamRightScore = (event) =>
    {
        setTeamRightScore(event.target.value);
    }

    const handleFormatChange = (event) =>
    {
        setFormat(event.target.value);
    }

    const handleDateChange = (sdate, time) =>
    {
        if (sdate && time) {
            const dateTimeString = `${selectedDate.toISOString().split('T')[0]}T${selectedTime}`;
            setDate(new Date(dateTimeString));
        }
    }

    const confirm = async () =>
    {
        if (type === '')
        {
            toastOnMain.error('Type Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else if (type === 'OPPO')
        {
            if (competition === '')
            {
                toastOnMain.error('Competition Requise', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else if (teamLeftName === '' || teamRightName === '')
            {
                toastOnMain.error('Nom d\'équipe Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else if (teamLeftIcon === '' || teamRightIcon === '')
            {
                toastOnMain.error('Icone Requise', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else if (teamLeftScore === '' || teamRightScore === '')
            {
                toastOnMain.error('Score Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else if (format === '')
            {
                toastOnMain.error('Format Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else if (date === '')
            {
                toastOnMain.error('Date Requise', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else {
                let { itWork , text } = await postNewResult(gameId, type, competition, teamLeftName, teamLeftIcon, teamLeftScore, teamRightName, teamRightIcon, teamRightScore, format, date);
                if ( itWork === true )
                {
                    closeModal('');
                    toastOnMain.success(text, {position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
                } else {
                    toastOnMain.error(text, {position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
                }
            }
        } else if (type === 'RANK')
        {

        } else {
            toastOnMain.error('Type ' + {type} + ' Inconnu', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
    }

    let leftImgIcon;
    let rightImgIcon;

    if (teamLeftIcon === '')
    {
        leftImgIcon = 'https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-gris.png';
    } else {
        leftImgIcon = teamLeftIcon;
    }
    if (teamRightIcon === '')
    {
        rightImgIcon = 'https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-gris.png';
    } else {
        rightImgIcon = teamRightIcon;
    }

    return (
        <div className='ModalBackground'>
            <div className='ModalContainer'>
                <div className='Title'>
                    <h1>Création d'un nouveau résultat</h1>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col items-center w-1/2 m-5'>
                            <input onChange={handleTeamLeftName} placeholder='Nom' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                            <input onChange={handleTeamLeftScore} placeholder='Score' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                            <div className='flex flex-row items-center w-full'>
                                <input onChange={handleTeamLeftIcon} placeholder='Icon' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                                <img src={leftImgIcon} alt='left icon' className='h-20'/>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-1/2 m-5'>
                            <input onChange={handleTeamRightName} placeholder='Nom' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                            <input onChange={handleTeamRightScore} placeholder='Score' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                            <div className='flex flex-row items-center w-full'>
                                <input onChange={handleTeamRightIcon} placeholder='Icon' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                                <img src={rightImgIcon} alt='right icon' className='h-20'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <input onChange={handleCompetitionChange} placeholder='Competiton' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                        <input onChange={handleTypeChange} placeholder='Type' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                        <input onChange={handleFormatChange} placeholder='Format' className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2'></input>
                    </div>
                    <div className='flex flex-row items-center'>
                        <ReactDatePicker className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2' selected={selectedDate} onChange={handleSDateChange} dateFormat="dd/MM/yyyy" placeholderText="Date"/>
                        <TimePicker className='text-white bg-black border-2 border-white p-5 rounded-xl w-full m-2' value={selectedTime} onChange={handleTimeChange} format="HH:mm" disableClock={true} clearIcon={null} placeholder="Time"/>
                    </div>
                </div>
                <div className='Footer'>
                    <button id="CancelBtn" onClick={() => closeModal('')}>Annuler</button>
                    <button onClick={() => confirm()}>Confirmer</button>
                </div>
            </div>
        </div>
    )
}

export default CreateResultModal;