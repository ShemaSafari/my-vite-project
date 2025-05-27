import React from 'react'


const Foodcard = () => {

  const FoodData = [

      {
        image: "/Food/biltong-southAfrica.jpg",
        title: "Biltong",
        description: "Biltong is a traditional South African snack made by curing and air-drying meat.",
      },
      {
        image: '/Food/Mandazi-Malawi.jpg',
        title: 'Mandazi',
        description: "Mandazi is a popular East African fried dough treat, often referred to as 'African doughnuts.'",
      },
      {
        image: "/Food/Chamucas-mocambique.jpg",
        title: "Chamucas",
        description: "Chamuças are savory pastries popular in Mozambican,with a triangular shape and a crisp, flaky pastry filled with spicy fillings.",
      },
      {
        image: "/Food/Chamucas-mocambique.jpg",
        title: "Chamucas",
        description: "Chamuças are savory pastries popular in Mozambican,with a triangular shape and a crisp, flaky pastry filled with spicy fillings.",
      },
      {
        image: "/Food/Chamucas-mocambique.jpg",
        title: "Chamucas",
        description: "Chamuças are savory pastries popular in Mozambican,with a triangular shape and a crisp, flaky pastry filled with spicy fillings.",
      },
      

    ]

  return (
    <section id='Foodcard' className="container mx-auto px-4 py-8 ">
    <div>
      <h2 className="text-4xl text-center pt-5 pb-7 font-bold">Food selection</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {FoodData.map((food, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 ">
          <img src={food.image} alt={food.title} className="w-full h-40 object-cover object-top rounded-t-lg" />  
          <h3 className="text-lg font-semibold mt-2">{food.title}</h3>
          <p className="text-gray-600">{food.description}</p>
          <button className="border text-sm text-gray-500 border-gray-500/30 w-28 h-8 rounded-full mt-5 hover:bg-green-500 hover:text-white">
                <p className="mb-1 ">Get recipe</p>
          </button>
        </div>
      ))}

    </div> 
    </section>
    
  )
}

export default Foodcard
