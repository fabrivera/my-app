import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import styles from '../../styles/Product.module.css'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const router = useRouter()

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/"+router.query.id)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [router.query.id])


  return (
    <div className={styles.centrar}>
      <Card sx={{ maxWidth: 700, height: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default ProductDetails
