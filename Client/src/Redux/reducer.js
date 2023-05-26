import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER} from "./actions";

const initialState = {
    myFavorites: [],
    allCharactersFav:[]
};

const rootReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case ADD_FAVORITE:
            return{ ...state, myFavorites: [ ...state.allCharactersFav, action.payload ],
                allCharactersFav: [...state.allCharactersFav, action.payload ]
            };

            case REMOVE_FAVORITE:
                return { ...state, myFavorites: state.myFavorites.filter( 
                    (char) => char.id !== action.payload),
                };

                case FILTER: 
                const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
                return {...state, myFavorites: 
                    action.payload === "allCharacters"
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
                
                };

                case ORDER: 
                const allCharactersFavCopy = [...state.allCharactersFav]

                return { ...state, myFavorites:
                     action.payload === "A" 
                ? allCharactersFavCopy.sort((a,b)=> a.id - b.id)
                : allCharactersFavCopy.sort((a,b)=> b.id - a.id)

                }

            
        default:
            return { ...state};
    }
};  export default rootReducer;