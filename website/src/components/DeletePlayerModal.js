import React from 'react';
import { deletePlayer } from '../api/apiHelper';
import './Modal.css';

function DeletePlayerModal({ closeModal , toastOnMain , playerId , gameId , playerName })
{

    const confirm = async () =>
    {

        let { itWork, text } = await deletePlayer( gameId , playerId);

        if (itWork === true)
        {
            closeModal('');
            toastOnMain.success(text, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else {
            toastOnMain.error(text, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
    }

    return (
        <div className='ModalBackground'>
            <div className='ModalContainer'>
                <div className='Title'>
                    <h1>Suppression d'une personne</h1>
                </div>
                <div className='Body'>
                    <h1>Êtes vous sûr de vouloir supprimer {playerName} ?</h1>
                </div>
                <div className='Footer'>
                    <button id="CancelBtn" onClick={() => closeModal('')}>Annuler</button>
                    <button onClick={() => confirm()}>Confirmer</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePlayerModal;