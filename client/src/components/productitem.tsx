import{ productActions } from "../redux/slices/product";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ReviewsIcon from "@mui/icons-material/Reviews";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Prop, Product } from "../types/type";
import { useDispatch } from "react-redux";

export default function Productitem({ product }: Prop) {
  const dispatch = useDispatch();
  // const addlike = (item: Product) => {
  //   dispatch(productActions.likePost(item._id));
  // };
  const addToFavourites = (item: Product) => {
    dispatch(productActions.addToFavourites(item));
  };
  return (
    <div className="flex-item">
      <Card sx={{ maxWidth: 250 }} key={product._id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.title.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title}
          subheader="September 14, 2016"
        />
        <Link to={`/product/${product._id}`}>
          <CardMedia
            component="img"
            height="194"
            image={product.image}
            alt={product.title}
          />
        </Link>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              addToFavourites(product);
            }}
          >
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton
            aria-label="like"
            onClick={() => {
              addlike(product);
            }}
          >
            <ThumbUpOffAltIcon />
            {product.likes}
          </IconButton> */}
          {/* <IconButton>
            <ThumbDownOffAltIcon />
          </IconButton>
          <IconButton>
            <ReviewsIcon />
          </IconButton> */}
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
