import React from 'react'

const CarTrainToys = () => {
const posts = [
    {
      id: 1,
      price: "$ 99.99",
      title: "Dickie Toys Truck Carry- Red",
      img: "images/cars and trains/Dickie Toys Truck Carry Case Red.jpg",
    },
    {
       id: 2,
      price: "$ 19.99",
      title: "Disney Pixar Cars - Assorted",
      img: "images/cars and trains/Disney Pixar Cars-Assorted 1.jpg",
    },
    {
      id: 3,
      price: "$ 119.99",
      title: "Thomas Launch & Loop",
      img: "images/cars and trains/Thomas & Friends Launch & Loop Maintenance Yard 1.jpg",
    },
 
  ];

  return (
    <div className="cartrain">
      <div className='heading'>
        <h1> Cars and Trains </h1>
      </div>
   
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              {/* Link???   */}
              <p> {post.price}</p>
              <h3>{post.title}</h3>
            </div>
            <div> <button> Add to cart </button></div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CarTrainToys