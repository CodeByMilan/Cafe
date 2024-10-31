import React from 'react'
import Card from './Card'
import pizza from './../assets/pizza.jpg'
import pasta  from './../assets/pasta.avif'
import burger from './../assets/burger.avif'


const Featured = () => {
    const cardData = [
        {
          name: 'Pizza',
          description: 'Close to Barceloneta Beach, 2 min walk from bus stop, near vibrant nightlife.',
          image:pizza,
          rating:4.5,
        },
        {
          name: 'Pasta',
          description: 'Authentic Italian pasta in a cozy environment with beautiful ambiance.',
          image: pasta,
          rating:4.5,
        },
        {
          name: 'Burger',
          description: 'Juicy burger with fresh ingredients, perfect for a quick meal.',
          image:burger,
          rating:4.5,
        },
      ];
  return (
 <>
 <div className='mb-5 mt-0 items-center justify-items-center'>
 <h1 className='font-bold font-mono text-center text-2xl m-10 underline p-3 '>Featured Items</h1>

 <div className='flex  items-center flex-auto gap-5 ml-2'>     
 {cardData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          description={card.description}
          image={card.image}
          rating={card.rating}
        />
      ))}
 </div>
 </div>
 </>
  )
}

export default Featured