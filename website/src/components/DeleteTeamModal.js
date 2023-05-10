import React from 'react';
import { deleteGame } from '../api/apiHelper';
import './Modal.css';

function DeleteTeamModal({ _id, _name, closeModal , toastOnMain })
{

    const confirm = async () =>
    {

        let { itWork, text } = await deleteGame(_id, _name);
        //console.log(itWork);
        //console.log(text);
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
                    <h1>Suppression d'une équipe</h1>
                </div>
                <div className='Body'>
                    <h1>Êtes vous sûr de vouloir supprimer l'équipe {_name} ?</h1>
                </div>
                <div className='Footer'>
                    <button id="CancelBtn" onClick={() => closeModal('')}>Annuler</button>
                    <button onClick={() => confirm()}>Confirmer</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTeamModal;