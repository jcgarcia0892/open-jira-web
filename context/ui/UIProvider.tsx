import React, { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from '.';

export interface UIState {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UIProvider: FC<PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSideMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  }

  const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
  }

  const addEntry = (isAddingEntry: boolean) => {
    dispatch({type: 'UI - Set isAddingEntry', payload: isAddingEntry});
  }

  const startDragging = () => {
    dispatch({type: 'UI - Start Dragging'});
  }

  const endDragging = () => {
    dispatch({type: 'UI - End Dragging'});
  }


  return (
    <UIContext.Provider value={{
      ...state,
      //method
      openSideMenu,
      closeSideMenu,
      addEntry,
      startDragging,
      endDragging
      }} >
      {children}
    </UIContext.Provider>
  )
}
