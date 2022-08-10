import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/Card/card"


const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get (
      'https://fakestoreapi.com/products',
    )
    console.log(response);

    setProducts(response.data.results)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <Card></Card>
    </div>
  )
}

export default Home
