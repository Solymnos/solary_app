import React from 'react';
import { deleteResult } from '../api/apiHelper';
import './Modal.css';

function DeleteResultModal({ closeModal , toastOnMain , resultId , teamId })
{

    const confirm = async () =>
    {

        let { itWork, text } = await deleteResult( teamId , resultId );

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
                    <h1>Suppression d'un resultat</h1>
                </div>
                <div className='Body'>
                    <h1>Êtes vous sûr de vouloir supprimer ce resultat ?</h1>
                </div>
                <div className='Footer'>
                    <button id="CancelBtn" onClick={() => closeModal('')}>Annuler</button>
                    <button onClick={() => confirm()}>Confirmer</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteResultModal;