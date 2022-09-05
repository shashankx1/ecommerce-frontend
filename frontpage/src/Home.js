import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";
const images = [
  {
    url:
      "https://www.freeiconspng.com/thumbs/chair-png/classic-chair-png-3.png",
  },
  {
    url:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1611464908623-07f19927264e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
  },
  {
    url: "https://3.imimg.com/data3/GK/JX/MY-3148977/wooden-chair-500x500.png",
  },
];

function Home() {
  const Home = () => {};
  return (
    <div className="home container">
      <div className="background">
        <div className="main">
          <div className="text">
            <h4>
              Welcome to <br /> your dream furniture.
            </h4>
            <br />
            <button type="button" class="btn btn-outline-dark">
              SHOP NOW
            </button>
          </div>

          <div className="image">
            <SimpleImageSlider
              width={550}
              height={600}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>

        <div className="last bg-secondary">
          <p className="lasttext">2020 • NEW DELHI - NCR </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
