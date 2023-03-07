import React from "react";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Dolls and soft toys",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "images/doll.png",
      url: "http://localhost:3000/dollsofttoys",
    },
    {
      id: 2,
      title: "Animal toys",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "images/animal.png",
      url: "http://localhost:3000/animaltoys",
    },
    {
      id: 3,
      title: "Cars and trains",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "images/car-train.png",
      url: "http://localhost:3000/cartraintoys",
    },
    {
      id: 4,
      title: "LEGOs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "images/lego.png",
      url: "http://localhost:3000/legotoys",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <a href={post.url}> 
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              {/* Link???   */}
              <h1>{post.title}</h1>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
