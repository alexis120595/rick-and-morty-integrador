import './App.css';

import Cards from './components/cards/Cards.jsx';


import Nav from './components/nav/Nav';

import { useState, useEffect } from 'react';

import axios from 'axios';

import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import About from './components/About/About';

import Detail from './components/Detail/Detail';

import Form from './components/Form/Form';

import Favorites from './components/Favorites/Favorite';

const URL = 'http://localhost:3001/rickandmorty/login';



function App() {

   const location = useLocation();

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

  const login = async (userData) => {

   try {
      const {email, password} = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`);
      const {access} = data;
      
      setAccess(access);
      access && navigate('/home');
   
   } catch (error) {
      console.log(error.message);
      
   }

};
   

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const [characters, setCharacters] = useState([]);

   const onSearch = async(id)=> {
      try {
         const {data} = await  axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data])
         };
        
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
        
   };

   const onClose = (id)=> {

      const charactersFiltered =characters.filter(character => character.id !== Number (id))

      setCharacters(charactersFiltered)

   }

   return (
      <div className='App'>

         {

            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }

         

         <Routes>

            <Route path ='/home' element={<Cards characters={characters} onClose={onClose} />} />


            <Route path ='/About' element = { <About/> } />

            <Route path ='/favorites' element = { <Favorites/> } />

            <Route path ='/Detail/:id' element = { <Detail/> } />

            <Route path ='/' element = { <Form login = { login } /> }></Route>

         </Routes>
         
         
      </div>
   );
}

export default App;
