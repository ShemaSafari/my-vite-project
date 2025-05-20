import React from 'react'


const Foodcard = () => {

  const FoodData = [

      {
        image: "/Food/biltong-southAfrica.jpg",
        title: "Biltong",
        description: "Biltong is a traditional South African snack made by curing and air-drying meat. It's similar to beef jerky but differs in preparation, ingredients, and texture.",
      },
      {
        image: '/Food/Mandazi-Malawi.jpg',
        title: 'Mandazi',
        description: "Mandazi is a popular East African fried dough treat, often referred to as 'African doughnuts.' It's slightly sweet, fluffy on the inside, and golden on the outside — commonly enjoyed as a snack or breakfast item.",
      },
      {
        image: "/Food/Chamucas-mocambique.jpg",
        title: "Chamucas",
        description: "Chamucas (also spelled chamuças) are savory pastries popular in Goan, Mozambican, and Portuguese cuisines, with origins in South Asia. They are closely related to samosas, with a triangular shape and a crisp, flaky pastry filled with spicy fillings.",
      },

    ]

  return (
    <section id='Foodcard' className="container mx-auto px-4 py-8 ">
    <div>
      <h2 className="text-4xl text-center pt-10 pb-5 font-bold">Food selection</h2>
    </div>
    
    
    </section>
    
  )
}

export default Foodcard
