import { AddShoppingCart } from "@mui/icons-material";
import { type IProduct } from "../../model/IProduct";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";
import { LoadingButton } from "@mui/lab";
import { currencyTRY } from "../../utils/formatCurrency";
import { addItemToCart } from "../cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

interface Props {
  product: IProduct
}

export default function Product({ product }: Props) {

  const { status } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();



  return (
    <Card>
      <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5032/images/${product.imageUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {currencyTRY.format(product.price)}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          size="small"
          variant="outlined"
          loadingPosition="start"
          startIcon={<AddShoppingCart />}
          loading={status === "pendingAddItem" + product.id}
          onClick={() => dispatch(addItemToCart({ productId: product.id }))}>Sepete Ekle</LoadingButton>

        <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<SearchIcon />} color="primary">View</Button>
      </CardActions>
    </Card>
  );
}
