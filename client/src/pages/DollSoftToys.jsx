import React from 'react'

const DollSoftToys = () => {
  const posts = [
    {
      id: 1,
      price: "$ 14.99",
      title: "Bear Plush Archie",
      img: "images/dolls and soft toys/Bear Plush Archie 25 cm.jpg",
    },
    {
      id: 2,
      price: "$ 24.99",
      title: "Julia Doll",
      img: "images/dolls and soft toys/Julia Doll.jpg",
    },
    {
      id: 3,
      price: "$ 34.99",
      title: "Mermaid Doll Sparkle",
      img: "images/dolls and soft toys/Mermaid doll sparkle.jpg",
    },
  ];

  return (
    <div className="doll">
      <div className="heading">
        <h1> Dolls and soft toys</h1>
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
            <div>
              {" "}
              <button> Add to cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DollSoftToys