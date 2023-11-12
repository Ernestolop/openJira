import { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer, ADD_ENTRY, UPDATE_ENTRY } from ".";

const ENTRIES_INITIAL_STATE = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'in-progress',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            status: 'finished',
            createAt: Date.now(),
        }
    ],
}

const EntriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    const addNewEntry = (description) => {
        const entry = {
            _id: uuidv4(),
            description,
            status: 'pending',
            createAt: Date.now(),
        }
        dispatch({ type: ADD_ENTRY, payload: entry })
    }

    const updateEntry = entry => {
        dispatch({ type: UPDATE_ENTRY, payload: entry  })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            //Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

export default EntriesProvider;