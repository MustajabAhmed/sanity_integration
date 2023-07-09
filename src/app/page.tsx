import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title, description, image
  }`)
  return res
}

interface IProduct {
  title: string,
  description: string
  image: IImage,
}

export default async function Home() {

  const data:IProduct[] = await getProductData()
  console.log(data);
  

  return (
    <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
      {
        data.map( (product) => (
          <div>
            <Image className='max-h-[200px] object-cover object-top' width={300} height={300} src={urlForImage(product.image).width(200).url()} alt={product.title} />
          </div>
        ))
      }
    </div>
  )
}
