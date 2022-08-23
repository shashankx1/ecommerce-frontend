import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {Link} from 'react-router-dom'
const images = [
  { url: "https://media.istockphoto.com/vectors/old-wooden-chair-isolated-on-white-backgroundfurniture-for-dining-vector-id1159568874?k=20&m=1159568874&s=612x612&w=0&h=DazRv9-NA88QjTRG3B58zAu58AXMyGCV9jc6gmjY_Hc=" },
  { url: "images/2.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3SLuulrfdzRGuUdNFR760xIAW3iUj41Sxlw7uQnkiwYbLC__l6KH9eSxaNM2L9LXsHRs&usqp=CAUjpg" },
  { url: "https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg" },
  { url: "https://3.imimg.com/data3/GK/JX/MY-3148977/wooden-chair-500x500.png" },
];




function Home() {
  const home = () => {

  }
  return (
    <div className="home bg-secondary">
      <div className='background'>
   


    <div className='main'>
    <div className='text'>
      <h4>Welcome to <br /> your dream furniture.</h4>
      <br />
      <button type="button" class="btn btn-outline-dark">SHOP NOW</button>
    </div>

    <div className='image'>
    <SimpleImageSlider
        width={500}
        height={250}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </div>
    
    <div className='last'>
      
      <p className='lasttext'>2020 • NEW DELHI - NCR </p>
      
    </div>

    </div>
    </div>
  );
}

export default Home;
