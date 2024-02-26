import React, {useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Advantages from "./components/Advantages/Advantages";
import AboutUsSection from "./components/Aboutus/AboutAs";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import Item1 from './assets/png/item-1.png'
import Item2 from './assets/png/item-2.png'
import Item3 from './assets/png/item-3.png'
import Item4 from './assets/png/item-4.png'
import Item5 from './assets/png/item-5.png'
import Item6 from './assets/png/item-6.png'
import Item7 from './assets/png/item-7.png'
import Item8 from './assets/png/item-8.png'
import Item9 from './assets/png/item-9.png'
import Item10 from './assets/png/item-10.png'
import Item11 from './assets/png/item-11.png'
import Item12 from './assets/png/item-12.png'
import Product from './Product';



const menu = [
  {
  id: 1,
  title:'Indulge in the Fluffy Delight of Pancakes for Breakfast',
  category: 'breakfast',
  price: 3.99,
  img: Item1,
  desc : "Start your day with a culinary delight that's both comforting and indulgent  pancakes for breakfast! Dive into a stack of fluffy, golden pancakes that promise to tantalize your taste buds and invigorate your morning routine. Whether you prefer them drizzled with sweet maple syrup, adorned with a medley of fresh fruits, or sprinkled with powdered sugar, pancakes offer a versatile canvas for your breakfast cravings."
},
{
  id: 2,
  title:'A Delectable Breakfast Trio: Eggs, Salad, and Salami',
  category: 'breakfast',
  price: 6.99,
  img: Item2,
  desc : "Start your morning with eggs prepared just the way you like them – whether it's a velvety omelette, sunny-side-up eggs with a runny yolk, or scrambled eggs infused with your favorite herbs and spices. Eggs are a versatile and protein-packed addition to your breakfast, providing essential nutrients to keep you energized throughout the day."
},
{
  id: 3,
  title:'Energize Your Morning with a Nutrient-Packed Healthy Breakfast',
  category: 'breakfast',
  price: 4.99,
  img: Item3 ,
  desc : "Revitalize your mornings with a nutritious and delicious breakfast bowl featuring yogurt and an array of fresh fruits. This healthful meal option is packed with essential nutrients to kickstart your day on a vibrant note."
},
{
  id: 4,
  title:'Savor the Irresistible Flavors of Pizza for Lunch',
  category: 'lunch',
  price: 7.99,
  img: Item4 ,
  desc : "Indulge in a midday feast that delights the senses and satisfies cravings with a mouthwatering pizza for lunch. Bursting with flavor and creativity, pizza offers a tantalizing combination of savory toppings, gooey cheese, and crispy crust that promises to elevate your lunchtime experience."
},
{
  id: 5,
  title:'Savory Lunch Delight: Roast Pork with Potatoes',
  category: 'lunch',
  price: 10.99,
  img: Item5 ,
  desc : "Embark on a culinary journey that marries savory and sweet flavors with a delectable lunch featuring roast pork paired with succulent apples. This delightful combination promises to tantalize your taste buds and satisfy your hunger with each flavorful bite."
},
{
  id: 6,
  title:'Crispy Chicken Sandwich: A Crunchy Delight for Lunch',
  category: 'lunch',
  price: 8.99,
  img: Item6 ,
  desc : "Indulge in a culinary masterpiece that combines tender chicken with a satisfying crunch in the form of a crispy chicken sandwich. This mouthwatering lunch option promises to satisfy your cravings and elevate your midday meal with its irresistible flavor and texture."
},
{
  id: 7,
  title:'Fresh and Flavorful: Enjoy a Delicious Wrap for Lunch',
  category: 'lunch',
  price: 7.99,
  img: Item7 ,
  desc : "Elevate your lunchtime experience with a fresh and flavorful wrap that combines wholesome ingredients and vibrant flavors in a convenient handheld package. Whether you're on the go or dining leisurely, a well-crafted wrap is the perfect choice for a satisfying and nutritious meal."
},
{
  id: 8,
  title:'Savory Lunch Delight: Roast Pork with Potatoes',
  category: 'lunch',
  price: 11.99,
  img: Item8 ,
  desc : "Embark on a culinary journey that marries savory and sweet flavors with a delectable lunch featuring roast pork paired with succulent apples. This delightful combination promises to tantalize your taste buds and satisfy your hunger with each flavorful bite."
},
{
  id: 9,
  title:' Delight in Delectable Pasta for Dinner',
  category: 'dinner',
  price: 9.99,
  img: Item9 ,
  desc : "Embrace the comforting embrace of a classic Italian favorite with a tantalizing pasta dinner that promises to satisfy your cravings and elevate your evening mealtime experience. Whether you're craving creamy Alfredo, zesty marinara, or rich Bolognese, pasta offers endless possibilities for creating a delicious and satisfying dinner."
},
{
  id: 10,
  title:'Elevate Your Dinner with a Fresh and Flavorful Salad',
  category: 'dinner',
  price: 6.99,
  img: Item10 ,
  desc : "Turn your evening meal into a vibrant culinary experience with a fresh and flavorful salad that's as satisfying as it is nutritious. Bursting with a rainbow of colors, textures, and flavors, a well-crafted salad is the perfect centerpiece for a light and wholesome dinner."
},
{
  id: 11,
  title:'Ocean-Inspired Salad with Fresh Seafood',
  category: 'dinner',
  price: 14.99,
  img: Item11 ,
  desc : "Transport yourself to the shores of the ocean with a tantalizing salad featuring a delightful array of fresh seafood, crisp vegetables, and zesty dressings. This ocean-inspired creation promises to elevate your dinner experience with its vibrant flavors and nutritious ingredients."
},
{
  id: 12,
  title:' Seared Fish with Garlic Herb Potatoes: A Satisfying Dinner Duo',
  category: 'dinner',
  price: 15.99,
  img: Item12 ,
  desc : "Embark on a culinary journey with a delectable dinner featuring tender seared fish paired with savory garlic herb potatoes. This delightful combination promises to tantalize your taste buds and satisfy your hunger with its rich flavors and comforting textures."
},

]

const App =() => {

  const [showPopup , setShowPopup] = React.useState(false);
  const  HandlePopup = () => {
    setShowPopup(true);
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  } , []);

  const [products, setProducts] = useState(menu);
    
    const filterProducts = (category) => {
      if (category === 'all') {
        setProducts(menu);
        return;
      }
      const filteredProducts = menu.filter((product) => product.category === category);
      setProducts(filteredProducts);
    };



  return ( <div className="overflow-h-hidden">
    <Navbar HandlePopup={HandlePopup}/>
    <Hero />
    <Banner />
    <Advantages />
    <AboutUsSection HandlePopup={HandlePopup} />
  
    <div className="container mt-20 mx-auto px-4 py-8">
      <h1 data-aos="fade-down" className="text-3xl font-bold font-mono text-center mb-8">Welcome to Our Menu</h1>
      
      <div className="flex justify-center mb-8">
        <button data-aos="fade" className="mx-2 px-4 py-2 rounded bg-amber-700 text-white hover:bg-light hover:text-gray-100" onClick={() => filterProducts('all')}>All Products</button>
        <button data-aos="fade" className="mx-2 px-4 py-2 rounded bg-amber-700 text-white hover:bg-light hover:text-gray-100" onClick={() => filterProducts('breakfast')}>Breakfast</button>
        <button data-aos="fade-" className="mx-2 px-4 py-2 rounded bg-amber-700 text-white hover:bg-light hover:text-gray-100" onClick={() => filterProducts('lunch')}>Lunch</button>
        <button data-aos="fade" className="mx-2 px-4 py-2 rounded bg-amber-700 text-white hover:bg-light hover:text-gray-100" onClick={() => filterProducts('dinner')}>Dinner</button>
      </div>
      
      <div data-aos="fade-right" data-aoss-delay="500" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    <Footer />
    <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>

  </div>
  )
};

export default App;