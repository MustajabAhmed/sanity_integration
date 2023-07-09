import Image from 'next/image'
import { client } from '@/lib/sanityClient'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title, description, image
  }`)
  return res
}

interface IProduct {
  title: string,
  description: string
}

export default async function Home() {

  const data:IProduct[] = await getProductData()
  console.log(data);
  

  return (
    <div>
      {
        data.map( (product) => (
          <h1>
            {product.title}
          </h1>
        ))
      }
    </div>
  )
}
