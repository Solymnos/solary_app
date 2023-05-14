import React, { useState } from 'react';
import { updatePlayer } from '../api/apiHelper';
import './Modal.css';

function UpdatePlayerModal({ teamId, playerId, playerName, playerRole, playerIcon, playerType, closeModal , toastOnMain })
{
    const [ name, setName ] = useState(playerName);
    const [ role, setRole ] = useState(playerRole);
    const [ icon, setIcon ] = useState(playerIcon);

    const handleNameChange = (event) =>
    {
        if (event.target.value === '')
        {
            setName(playerName);
        } else {
            setName(event.target.value);
        }
    }

    const handleRoleChange = (event) =>
    {
        if (event.target.value === '')
        {
            setRole(playerRole)
        } else {
            setRole(event.target.value);
        }
    }

    const handleIconChange = (event) =>
    {
        if (event.target.value === '')
        {
            setIcon(playerIcon)
        } else {
            setIcon(event.target.value);
        }
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
          let { itWork, text } = await updatePlayer(teamId, playerId, name, icon, role, playerType);
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
                    <h1>Modification de {name}</h1>
                </div>
                <div className='Body'>
                    <div className='Form'>
                        <input onChange={handleNameChange} placeholder={playerName}></input>
                        <input onChange={handleRoleChange} placeholder={playerRole}></input>
                        <input onChange={handleIconChange} placeholder={playerIcon}></input>
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

export default UpdatePlayerModal;