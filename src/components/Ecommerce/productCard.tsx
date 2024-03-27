import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// material
import {
  Box,
  Card,
  Typography,
  Stack,
  Button,
  CircularProgress,
  Zoom,
  IconButton,
  Skeleton,
  useTheme,
  Rating,
  Grid,
} from "@mui/material";

// utils
// import useCurrency from "src/hooks/useCurrency";
//----------------------------------------------------------------------
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// api
// notification
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ThumbDownOffAltRoundedIcon from "@mui/icons-material/ThumbDownOffAltRounded";
import BlurImage from "../blurImage";
import Label from "./label";
import ColorPreview from "./colorPreview";

const formatNumbers = (number: number, unitRate: number) => {
  console.log("number:", number);
  console.log("unitRate:", unitRate);
  const converted = (number * Number(unitRate)).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
  console.log("converted:", converted);
  return converted;
};

export default function ShopProductCard({ ...props }) {
  const {
    product,
    category,
    loading,
    isMobile,
    isLoaded,
    loadingRedux,
    onClickCart,
    symbol,
    unitRate,
  } = props;

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { comissao, id, fotoPrincipal, 
    nome, valor, desc, categoria } = !loading && product;

  const linkTo = category ? "/categories/abc" : `/product/${id ? id : ""}`;

  const onClickWishList = async (event: any) => {

  };

  return (
    <Grid
      key={Math.random()}
      item
      lg={4}
      md={4}
      sm={4}
      xs={6}>
      <Card
        onClick={() => {}}
        sx={{
          display: "block",
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ position: "relative" }}>
          {/* {!loading &&
            product?.variants[product?.selectedVariant]?.price >
            product?.variants[product?.selectedVariant]?.priceSale && (
              <Label
                variant="filled"
                color={"primary"}
                sx={{
                  top: 16,
                  left: 16,
                  zIndex: 9,
                  position: "absolute",
                  textTransform: "uppercase",
                  borderRadius: 20,
                }}
              >
                {loading ? (
                  <Skeleton variant="text" />
                ) : theme.direction === "rtl" ? (
                  `${(
                    100 -
                    (product?.variants[product?.selectedVariant]?.priceSale /
                      product?.variants[product?.selectedVariant]?.price) *
                    100
                  ).toFixed(0)}%-`
                ) : (
                  `-${(
                    100 -
                    (product?.variants[product?.selectedVariant]?.priceSale /
                      product?.variants[product?.selectedVariant]?.price) *
                    100
                  ).toFixed(0)}%`
                )}
              </Label>
            )}
          {status &&
            product?.variants[product?.selectedVariant]?.available < 1 && (
              <Label
                variant="filled"
                color={"error"}
                sx={{
                  top: 16,
                  left: 16,
                  zIndex: 9,
                  position: "absolute",
                  textTransform: "uppercase",
                  borderRadius: 20,
                }}
              >
                {loading ? <Skeleton variant="text" /> : "Out of Stock"}
              </Label>
            )} */}
          <Box
            // onClick={() =>
            //   !loading &&
            //   product?.variants[product?.selectedVariant]?.available > 0 &&
            //   router.push(linkTo)
            // }
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            sx={{
              bgcolor: isLoading || loading ? "transparent" : "#F1F1F1",
              position: "relative",
              cursor: "pointer",
              img: {
                transition: "all 0.2s ease-in",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0!important",
              },
              "&:hover": {
                img: {
                  filter: "blur(2px)",
                },
              },
              "&:after": {
                content: `""`,
                display: "block",
                //paddingBottom: "100%",
              },
              width: "100%",
            }}
          >
            {loading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{
                  height: "100%",
                  position: "absolute",
                }}
              />
            ) : (
              <BlurImage alt={nome} src={fotoPrincipal} />
            )}
            {!loading && (
              <>
                <Zoom
                  in={open}
                  style={{ transitionDelay: open ? "150ms" : "0ms" }}
                >
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      onClickCart();
                    }}
                    size="small"
                    sx={{ position: "absolute", top: 41, right: 14, zIndex: 11 }}
                  >
                    <RemoveRedEyeOutlinedIcon fontSize="small" />
                  </IconButton>
                </Zoom>
              </>
            )}
          </Box>
        </Box>

        <Stack
          spacing={0.5}
          justifyContent="center"
          sx={{
            cursor: "pointer",
            p: 1.5,
            width: "100%",
            a: {
              color: "text.primary",
              textDecoration: "none",
            },
          }}
        >
          <Link href={linkTo}>
            <Box sx={{ display: "grid" }}>
              {" "}
              <Typography
                sx={{
                  cursor: "pointer",
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
                variant={"subtitle1"}
                noWrap
              >
                {loading ? <Skeleton variant="text" /> : nome}
              </Typography>
            </Box>
          </Link>

          <Stack
            sx={{ mt: "0!important" }}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                span: {
                  fontSize: { xs: 14, md: 18 },
                },
              }}
            >
              {loading ? (
                <Skeleton variant="text" width="60px" />
              ) : (
                <>
                  <Rating
                    name="read-only"
                    value={0}
                    readOnly
                    sx={{ display: { xs: "none", md: "flex" } }}
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      display: { xs: "flex", md: "none" },
                      svg: {
                        color: "warning.main",
                        width: 22,
                      },
                    }}
                  >
                    <StarRoundedIcon /> <span>{0}</span>
                  </Stack>
                </>
              )}
            </Stack>
            
          </Stack>
          
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mt: "0!important",
              "& .color-preview": {
                display: { sm: "flex", xs: "none" },
              },
            }}
          >
            <Typography
              variant={isMobile ? "body2" : "h6"}
              sx={{
                fontWeight: 500,
                "& > span": {
                  fontSize: 14,
                  fontWeight: 400,
                  textDecoration:
                    loading || loadingRedux ? "none" : "line-through",
                  display: { md: "flex", xs: "none" },
                },
              }}
            >
              {loading || loadingRedux ? (
                <Skeleton variant="text" width="50px" />
              ) : (
                <>
                  {symbol}{" "}
                  {isLoaded &&
                    formatNumbers(Number(valor), 0)}
                </>
              )}
            </Typography>
          </Stack>
        </Stack>

      </Card>
    </Grid>
  );
}
