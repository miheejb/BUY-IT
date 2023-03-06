import React from 'react'

const AnimalToys = () => {
 const posts = [
    {
      id: 1,
      price: "$ 8.99",
      title: "Chimpanzee Female",
      img: "images/animal/Chimpanzee Female.jpg",
    },
    {
       id: 2,
      price: "$ 59.95",
      title: "Terra Jungle World",
      img: "images/animal/Terra Jungle World 1.jpg",
    },
    {
      id: 3,
      price: "$ 16.2",
      title: "Safari Ltd Carabao",
      img: "images/animal/Safari Ltd Carabao 1.jpg",
    },
 
  ];

  return (
    <div className="animal">
      <div className='heading'>
        <h1>Animal Toys </h1>
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



export default AnimalToys