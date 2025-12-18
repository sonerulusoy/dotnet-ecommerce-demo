import { useEffect } from "react";
import { useParams } from "react-router"
import { CircularProgress, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import NotFound from "../../errors/NotFound";
import { Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { currencyTRY } from "../../utils/formatCurrency";
import { addItemToCart } from "../cart/cartSlice";
import { fetchProductById, selectProductById } from "./catalogSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function ProductDetailsPage() {

  const { cart, status } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector(state => selectProductById(state, Number(id)));
  const { status: loading } = useAppSelector(state => state.catalog);

  const item = cart?.cartItems.find(i => i.productId == product?.id);

  useEffect(() => {
    if (!product && id) dispatch(fetchProductById(parseInt(id)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])



  if (loading === "pendingFetchProductById") return <CircularProgress />;

  if (!product) return <NotFound />;


  return (
    <Grid container spacing={6}>
      <Grid size={{ xl: 3, lg: 4, md: 5, sm: 6, xs: 12 }}>
        <img src={`https://dotnet-ecommerce-demo-815860080202.europe-west3.run.app/images/${product.imageUrl}`} style={{ width: "100%" }} />
      </Grid>
      <Grid size={{ xl: 9, lg: 8, md: 7 }}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {currencyTRY.format(product.price)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" spacing={2} sx={{ mt: 3 }} alignItems="center">
          <Button
            variant="outlined"
            loadingPosition="start"
            startIcon={<AddShoppingCart />}
            loading={status === "pendingAddItem" + product.id}
            onClick={() => dispatch(addItemToCart({ productId: product.id }))}>
            Sepete Ekle
          </Button>

          {/* Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong. */}
          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            item?.quantity! > 0 && (

              <Typography variant="body2" >
                Sepetinize {item?.quantity} adet eklendi
              </Typography>

            )

          }


        </Stack>
      </Grid>
    </Grid >
  );

}



