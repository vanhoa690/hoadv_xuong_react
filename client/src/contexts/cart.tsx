import {
  useState,
  useContext,
  createContext,
  ReactNode,
  ReactElement,
} from "react";

type CartContextType = {
  cart: number;
  setCart: (cart: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: 0,
  setCart: () => null,
});

export function useCart(): CartContextType {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props): ReactElement {
  const [cart, setCart] = useState<number>(0);
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
