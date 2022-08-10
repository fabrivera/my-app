import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './card.module.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Cards = ({titulo, precio, categoria, descripcion}) => {
  return (
    <div className={styles.box}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                <p> Titulo: {titulo} </p>
                <p> Precio: {precio}  </p>
                <p> Categoria : {categoria} </p>
                <p> Descripcion : {descripcion} </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eligendi, esse, maxime non, rem facere autem cum nulla officia dolor enim perspiciatis quos? Commodi tempore dicta impedit accusamus, asperiores eius!
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            color="primary"
            arial-label="add to shopping cart"
            onClick={() => setList(list.concat(props.title))} >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Cards
