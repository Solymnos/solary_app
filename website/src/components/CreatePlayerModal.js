import React, { useState } from 'react';
import { postNewPlayer } from '../api/apiHelper';
import './Modal.css';

function CreatePlayerModal({ closeModal , toastOnMain, gameId, type })
{
    const [ name, setName ] = useState('');
    const [ role, setRole ] = useState('');
    const [ icon, setIcon ] = useState('');

    const handleNameChange = (event) =>
    {
        setName(event.target.value);
    }

    const handleRoleChange = (event) =>
    {
        setRole(event.target.value);
    }

    const handleIconChange = (event) =>
    {
        setIcon(event.target.value);
    }

    const confirm = async () =>
    {
        if (name === '')
        {
            toastOnMain.error('Nom Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else if (icon === '')
        {
            toastOnMain.error('Icône Requise', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else {
            let { itWork, text } = await postNewPlayer(name, role, icon, gameId, type);
            if (itWork === true)
            {
                closeModal('');
                toastOnMain.success(text, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            } else {
                toastOnMain.error(text, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
            }
        }
    }

    let imgIcon;

    if (icon === '')
    {
        imgIcon = 'https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-gris.png';
    } else {
        imgIcon = icon;
    }

    return (
        <div className='ModalBackground'>
            <div className='ModalContainer'>
                <div className='Title'>
                    <h1>Création d'un nouveau joueur</h1>
                </div>
                <div className='Body'>
                    <div className='Form'>
                        <input onChange={handleNameChange} placeholder='Nom'></input>
                        <input onChange={handleRoleChange} placeholder='Role'></input>
                        <input onChange={handleIconChange} placeholder='Icône'></input>
                    </div>
                    <div className='Preview'>
                        <img src={imgIcon} alt='preview of the game icon'/>
                        <h1>{name}</h1>
                        <h2>{role}</h2>
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

export default CreatePlayerModal;