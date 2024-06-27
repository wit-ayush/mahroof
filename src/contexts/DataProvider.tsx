// src/contexts/DataProvider.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
  name: string;
  image: string;
  category: 'Men' | 'Women';
}

interface State {
  loading: boolean;
  filters: {
    category: string;
  };
  products: Product[];
}

interface Action {
  type: string;
  payload: any;
}

interface DataProviderProps {
  children: ReactNode;
}

const initialState: State = {
  loading: false,
  filters: {
    category: 'All',
  },
  products: [
    { name: 'Men Wallet 1', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 1', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 2', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 2', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 3', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 3', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 4', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 4', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 5', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 5', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 6', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 6', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
    { name: 'Men Wallet 7', image: 'https://i.pinimg.com/originals/18/6a/ec/186aec96225b1c96b429fe77e542277c.png', category: 'Men' },
    { name: 'Women Wallet 7', image: 'https://i.pinimg.com/originals/eb/3c/58/eb3c58c69c10962db2b8453a83c3c667.png', category: 'Women' },
  ],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'RESET':
      return { ...state, filters: initialState.filters };
    case 'SET_CATEGORY':
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    default:
      return state;
  }
};

const DataContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
