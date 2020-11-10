import React from "react";
import "./Home.css";
import Products from "./Products";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_2x._CB418727893_.jpg"
        />

        <div className="home_row">
          <Products
            title="Xbox Wireless Controller"
            price={47.29}
            brand="Microsoft"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/310GTQ%2BNejL._AC_SY400_.jpg"
            alt="Xbox Wireless Controller - Grey And Blue"
          />
          <Products
            title="New Apple iPhone 12 Pro Max (128GB, Graphite) "
            price={999}
            brand="Apple"
            rating={5}
            image="https://m.media-amazon.com/images/I/71XXJC7V8tL.jpg"
            alt="Iphone 12 pro"
          />
          <Products
            title="SAMSUNG 65-inch QLED Q90T Series-4K UHD "
            price={655}
            brand="Samsung"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61pzhWiGSbL._AC_SX679_.jpg"
            alt="SAMSUNG 65-inch Class QLED Q90T Series - 4K UHD Direct Full Array 16X Quantum HDR 16X Smart TV with Alexa Built-in (QN65Q90TAFXZA, 2020 Model)"
          />
        </div>
        <div className="home_row">
          <Products
            title="Insleep Orthopaedic Memory Foam Mattress in a Box - 72X48X6, Double, Grey and White"
            price={70}
            brand="Insleep"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71sME4GWISL._SX569_.jpg"
            alt="Insleep Orthopaedic Memory Foam Mattress in a Box - 72X48X6, Double, Grey and White"
          />
          <Products
            title="Usha Shriram Enviro , 2IN1 Pack, Washable, Reusable, Multi Layer Anti - Pollution Face Mask (PACK OF 1)"
            price={3}
            brand="Usha Shriram"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Be-oaOrmL._UX522_.jpg"
            alt="Usha Shriram Enviro , 2IN1 Pack, Washable, Reusable, Multi Layer Anti - Pollution Face Mask (PACK OF 1)"
          />
          <Products
            title="Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)"
            price={40}
            brand="Prestige"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Z4fxBfkVL._SX679_.jpg"
            alt="Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)"
          />
        </div>

        <div className="home_row">
          <Products
            title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
            price={5}
            brand={"#####"}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._SX322_BO1,204,203,200_.jpg"
            alt="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
          />
          <Products
            title="Donner 36'' Dreadnought Acoustic Guitar Package 3/4 Size Beginner Guitar Kit Black DAG-1MB Spruce Body With Bag "
            price={130}
            brand="Donner"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71BsniPSvwL._AC_SX569_.jpg"
            alt="Donner 36'' Dreadnought Acoustic Guitar Package 3/4 Size Beginner Guitar Kit Black DAG-1MB Spruce Body With Bag Capo Tuner Strap String Guitar Picks"
          />
          <Products
            title="Manyavar Men's Blended Kurta & Pyjama Set"
            price={15}
            brand="Manyavar"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71E6ujna7NL._UY741_.jpg"
            alt="Manyavar Men's Blended Kurta & Pyjama Set"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
