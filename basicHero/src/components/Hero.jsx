import "../App.css";

const Hero = () => {
  return (
    <div className="hero">
    <div className="left-hero">
    <h1 className="moto">YOUR FEET DESERVE <br />THE BEST</h1>

      <p className="desc">
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br />
        SHOES.
      </p>

      <button className="shop">Shop Now</button>
      <button className="category">Category</button>
      <p>Also Available On</p>
      <img src="./public/images/flipkart.png" alt="flipkart" />
      <img src="./public/images/amazon.png" alt="amazon" />
    </div>
    <div className="right-hero">
        <img src="./public/images/shoe_image.png" alt=""/>
    </div>
      
    </div>
  );
};

export default Hero;
