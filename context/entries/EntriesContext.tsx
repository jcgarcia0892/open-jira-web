import { Entry } from '@/interfaces';
import React, { createContext } from 'react'

interface ContextProps {
     entries: Entry[];
     addNewEntry: (description: string) => void;
     updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);