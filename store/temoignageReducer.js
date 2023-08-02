
//1- Les actions (qui modifient le store)

const ADD_TEMOIGNAGE = 'ADD_TEMOIGNAGE'
const DELETE_TEMOIGNAGE = 'DELETE_TEMOIGNAGE'
const UPDATE_TEMOIGNAGE = 'UPDATE_TEMOIGNAGE'
const LIST_TEMOIGNAGE = 'LIST_TEMOIGNAGE'
const CURRENT_TEMOIGNAGE = 'CURRENT_TEMOIGNAGE'

//2 - Createurs d'actions (retournent un objet)

export const addTEMOIGNAGE = (TEMOIGNAGE) => ({ type: ADD_TEMOIGNAGE, payload: TEMOIGNAGE })

export const updateTEMOIGNAGE = (TEMOIGNAGE, id) => ({ type: UPDATE_TEMOIGNAGE, payload: { TEMOIGNAGE, id } })

export const deleteTEMOIGNAGE = id => ({ type: DELETE_TEMOIGNAGE, payload: { id } })

export const getAllTEMOIGNAGE = (TEMOIGNAGEs) => ({ type: LIST_TEMOIGNAGE, payload: TEMOIGNAGEs })

export const getTEMOIGNAGE = id => ({ type: CURRENT_TEMOIGNAGE, payload: { id } })


// Le reducteur pour les etudiants

// --Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    temoignages: [],
    temoingnage: {}
}

// Faites attention aux comparaison == et === car les types son differents des fois
export const TEMOIGNAGEReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_TEMOIGNAGE:
            return { ...state, temoignages: payload }
        case CURRENT_TEMOIGNAGE:
            return { ...state, temoingnage: state.temoignages.find(temoingnage => temoingnage.id === payload.id) }

        case ADD_TEMOIGNAGE:
            return { ...state, temoignages: [...state.temoignages, payload] }

        case UPDATE_TEMOIGNAGE:
            return { ...state, temoingnages: state.temoignages.map(temoingnage => temoingnage.id == payload.id ? payload.TEMOIGNAGE : TEMOIGNAGE) }

        case DELETE_TEMOIGNAGE:
            return { ...state, temoignages: state.temoignages.filter(temoingnage => temoingnage.id !== payload.id) }

        default:
            return state
    }
}
