import style from './card.module.css';

import {Link} from 'react-router-dom';

import { connect  } from 'react-redux';

import { addFav, removeFav } from '../../Redux/actions';

import { useState, useEffect } from 'react';


 function Card({id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites}) {

   const [ isFav, setIsFav ] = useState( false );

   const handleFavorite = () => {

      if( isFav ) {
         setIsFav( false );
         removeFav(id);

      }else {
         setIsFav( true );
         addFav({
            id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites
         })
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div >
         { isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
};
          <button onClick={ ()=> onClose(id)}>X</button>
          <div className={style.characters} >
        <Link to={`/detail/${id}`}>
        
         <h2>{name}</h2>
         
          </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         </div>
         <img src={image} 
         alt=''
         className={style.image} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => { 

   return {
      addFavorite: (character) => { dispatch( addFav(character) )},

      removeFavorite: (id) => { dispatch( removeFav(id) );
      },
   };
};


const mapStateToProps = ( state ) => {

   return {
      myFavorites: state.myFavorites,
   }
};
export default connect ( mapStateToProps, mapDispatchToProps) (Card);
