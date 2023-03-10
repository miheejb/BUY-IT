import React from 'react'

const LegoToys = () => {
  const posts = [
    {
      id: 1,
      price: "$ 39.99",
      title: "LEGO CITY Recue Helicoper",
      img: "/images/lego/lego_city_rescue_helicopter.jpg",
    },
    {
      id: 2,
      price: "$ 89.99",
      title: "LEGO FRIENDS Dog Rescue",
      img: "../images/lego/lego_friends_dog_rescue_center.jpg",
    },
    {
      id: 3,
      price: "$ 31.99",
      title: "LEGO Star Wars Clone Troopers Battle",
      img: "images/lego/lego_starwars_troopers_battle.jpg",
    },
  ];

  return (
    <div className="lego">
      <div className="heading">
        <h1> Building Blocks & LEGO </h1>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <a href="/product/id">
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                {/* Link???   */}
                <p> {post.price}</p>
                <h3>{post.title}</h3>
              </div>
              <div>
                {" "}
                <button> Add to cart </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegoToys