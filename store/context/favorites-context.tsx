import { createContext, ReactNode, useState } from "react";

interface IContextProvider {
  children: ReactNode;
}

interface InitialStateType {
  favoriteMealIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const initialState: InitialStateType = {
  favoriteMealIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
};

const FavoritesContext = createContext<InitialStateType>(initialState);

const FavoritesContextProvider = ({ children }: IContextProvider) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavoriteMealIds) => [
      ...currentFavoriteMealIds,
      id,
    ]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavoriteMealIds) =>
      currentFavoriteMealIds.filter(
        (currentFavoriteMealId) => currentFavoriteMealId !== id
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, favoriteMealIds }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContextProvider, initialState, FavoritesContext };
