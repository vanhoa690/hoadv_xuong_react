import {
  useState,
  useContext,
  createContext,
  ReactNode,
  ReactElement,
} from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => null,
});

/**
 * @return useContext use context flash
 */
export function useLoading(): LoadingContextType {
  return useContext(LoadingContext);
}

type Props = {
  children: ReactNode;
};

/**
 * @return FlashProvider provider value flash
 */
export function LoadingProvider({ children }: Props): ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
