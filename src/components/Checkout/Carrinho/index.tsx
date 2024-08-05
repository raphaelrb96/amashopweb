import React from 'react';
import { Grid, Typography, Divider, styled, GridProps, RegularBreakpoints } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Definindo a interface para os itens do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps extends RegularBreakpoints {

}

// Dados fictícios dos itens no carrinho
const itemsInCart: CartItem[] = [
  { id: 1, name: 'Produto 1', price: 10, quantity: 2 },
  { id: 2, name: 'Produto 2', price: 15, quantity: 1 },
  { id: 3, name: 'Produto 3', price: 20, quantity: 3 },
];

// Container principal do carrinho com estilos
const CartContainer = styled(Grid)`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilo para o título do carrinho
const CartTitle = styled(Typography)`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Estilo para os itens do carrinho
const CartItemWrapper = styled(Grid)`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const CartItemName = styled(Typography)`
  font-size: 18px;
`;

const CartItemDetails = styled(Typography)`
  font-size: 16px;
  color: #666;
`;

const Cart: React.FC<GridProps> = (props) => {
  return (
    <CartContainer container item {...props}>
      <Grid item xs={12}>
        <CartTitle variant="h4" gutterBottom>
          <ShoppingCartIcon fontSize="large" style={{ marginRight: '10px' }} />
          Carrinho
        </CartTitle>
        <Divider />
      </Grid>
      {/* Renderizar os detalhes do carrinho */}
      {itemsInCart.map((item) => (
        <CartItemWrapper container alignItems="center" key={item.id}>
          <Grid item xs={8}>
            <CartItemName>{item.name}</CartItemName>
            <CartItemDetails>Preço: ${item.price}</CartItemDetails>
            <CartItemDetails>Quantidade: {item.quantity}</CartItemDetails>
          </Grid>
          <Grid item xs={4} container justifyContent="flex-end">
            <CartItemDetails>Total: ${item.price * item.quantity}</CartItemDetails>
          </Grid>
        </CartItemWrapper>
      ))}
    </CartContainer>
  );
};

export default Cart;
