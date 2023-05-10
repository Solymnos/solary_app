import React, { useState } from 'react';
import { updateGame } from '../api/apiHelper';
import './Modal.css';

function UpdateTeamModal({ _id, _name, _link, _icon, closeModal , toastOnMain })
{
    const [ name, setName ] = useState(_name);
    const [ link, setLink ] = useState(_link);
    const [ icon, setIcon ] = useState(_icon);

    const handleNameChange = (event) =>
    {
        if (event.target.value === '')
        {
            setName(_name);
        } else {
            setName(event.target.value);
        }
    }

    const handleLinkChange = (event) =>
    {
        if (event.target.value === '')
        {
            setLink(_link)
        } else {
            setLink(event.target.value);
        }
    }

    const handleIconChange = (event) =>
    {
        if (event.target.value === '')
        {
            setIcon(_icon)
        } else {
            setIcon(event.target.value);
        }
    }

    const confirm = async () =>
    {

        if (name === '')
        {
            toastOnMain.error('Nom Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else if (link === '')
        {
            toastOnMain.error('Lien Requis', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else if (icon === '')
        {
            toastOnMain.error('Icône Requise', { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        } else {
          let { itWork, text } = await updateGame(_id, name, link, icon);
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
                    <h1>Modification de l'équipe {name}</h1>
                </div>
                <div className='Body'>
                    <div className='Form'>
                        <input onChange={handleNameChange} placeholder={_name}></input>
                        <input onChange={handleLinkChange} placeholder={_link}></input>
                        <input onChange={handleIconChange} placeholder={_icon}></input>
                    </div>
                    <div className='Preview'>
                        <img src={imgIcon} alt='preview of the game icon'/>
                        <h1>{name}</h1>
                        <h2>{link}</h2>
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

export default UpdateTeamModal;