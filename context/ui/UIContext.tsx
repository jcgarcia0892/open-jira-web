import React, { createContext } from 'react'

interface UIContextProps {
    isSideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean
    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    addEntry: (isAddingEntry: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
}

export const UIContext = createContext({} as UIContextProps);
