import React from "react";
import Review from "./Review";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Dolls",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "/images/doll.png",
    },
    {
      id: 2,
      title: "Animals",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "/images/animal.png",
    },
    {
      id: 3,
      title: "Cars & trains",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "/images/car-train.png",
    },
    {
      id: 4,
      title: "LEGO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius interdum euismod. Donec egestas vulputate tincidunt. Sed mollis, sapien id vulputate luctus, elit mi efficitur nis",
      img: "/images/lego.png",
    },
  ];

  return (
    <>
      <div className="menu">
        <h1>Other toys you may like</h1>
        <div className="posts"></div>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
      <Review />
    </>
  );
};

export default Menu;
