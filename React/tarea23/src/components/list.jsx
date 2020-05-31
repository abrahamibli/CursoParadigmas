import React, { useState, useEffect } from 'react';
import '../App.css';
import { Fragment } from 'react';
import Modal from 'react-modal';

export const List = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getData();
    }, []);

    Modal.setAppElement('#root');
  
    const nextPage = () => {
      let newValue = (currentPage + 1);
      setCurrentPage(newValue);
      getData();
    }
    const previousPage = () => {
      if (currentPage > 0) {
        let newValue = (currentPage - 1);
        setCurrentPage(newValue);
        getData();
      }
    }
  
    const getData = async () => {
      const api_key = '0287efb168fda099ac59fe6ad2c63420';
      const ts = '1';
      const hash = '61a15d1b209fbedd061f988de5602572';
      console.log(currentPage);
      let offset = (currentPage * 30);
      const url = `https://gateway.marvel.com/v1/public/characters?limit=30&apikey=${api_key}&ts=${ts}&offset=${offset}&hash=${hash}`;
  
      const params = {
        method: 'GET',
      }
  
      try {
        const response = await fetch(url, params);
        if (response.status === 200) {
          const json = await response.json();
          console.log(json.data.results);
          setCharacters(json.data.results);
        } else {
          throw 'error';
        }
      } catch (e) {
        console.error(e);
      }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(199,42,82,.9) 62%, rgba(207,120,28,.9) 100%)',
            maxHeight: '95vh',
        }
    };

    const handleOpenModal = (Id) => {
        getInfo(Id);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    const getInfo = async (id) => {
        const api_key = '0287efb168fda099ac59fe6ad2c63420';
        const ts = '1';
        const hash = '61a15d1b209fbedd061f988de5602572';
        const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${api_key}&ts=${ts}&hash=${hash}`;

        const params = {
            method: 'GET',
        }

        try {
            const response = await fetch(url, params);
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setModalImageUrl(`${data.data.results[0]?.thumbnail?.path}.${data.data.results[0]?.thumbnail?.extension}`);
                setModalInfo(data.data.results[0]);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Fragment>
            <div className="container characters-list">
                <div className="row">
                    <div className="col-xl-6 col-sm-12 disp-al-c">
                        <img src="marvel.png" alt="MarvelLogo" width="150px" height="150px" />
                        <h3 className="app-title lil-title">
                            List of Characters
                    </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-sm-12 d-flex align-items-center">
                        <button className="btn-bonito" onClick={previousPage}>
                            Pagina Anterior
                    </button>
                    </div>
                    <div className="col-xl-6 col-sm-12 d-flex align-items-center nextPage-button">
                        <button className="btn-bonito" onClick={nextPage}>
                            Siguiente Pagina
                    </button>
                    </div>
                </div>
                <div className="list-group" id="list">
                    {characters.map((character) => {
                        return (
                            <button className="list-group-item list-group-item-action character-item btn-sinout" key={character.id} onClick={() => handleOpenModal(character.id)}>
                                <span className="badge badge-primary badge-pill justify-content-between">{character.id}</span>
                                <p className="character-name"> {character.name} </p>
                                <p className="text-secondary character-description">{character.description || 'Este personaje no tiene descripcion'} </p>
                            </button>
                        );
                    })}
                </div>
            </div>
            <Modal
                isOpen={showModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Character"
            >
                <div className="row">
                    <div className="col-xl-12 col-sm-12 disp-al-c">
                        <img src="marvel.png" alt="MarvelLogo" width="150px" height="150px" />
                        <h3 className="app-title lil-title">
                            List of Characters
                    </h3>
                    </div>
                </div>
                <div className="row character-details-card">
                    <div className="col-xl-6">
                        <div className="card character-card" id="card">
                            <div className="card-body">
                                <img className="card-img-top" src={modalImageUrl} alt="Card cap" />
                                <h5 className="card-title">ID: {modalInfo?.id}</h5>
                                <h5 className="card-title">Nombre: {modalInfo?.name}</h5>
                                <p className="card-text">{modalInfo?.description || 'No hay descripcion de este personaje'}</p>
                                <div className="row">
                                    <div className="col-6">
                                        <button onClick={handleCloseModal} className="btn-nobonito">  Regresar a la lista</button>
                                    </div>
                                    <div className="col-6">
                                        <button href="${data.urls[0].url}" className="btn-nobonito">Mas detalles...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card character-card" id="card-comics">
                            <div className="card-body">
                                <h5 className="card-title">Comics:</h5>
                                {modalInfo.comics?.items.map(comic => {
                                    return (
                                        <p key={comic.name}> {comic.name}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
}