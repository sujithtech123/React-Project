import React from "react";
function Home(){
    return(
        <>
         <div className="Watch1">
           <div> 
              <h1>Live Iispird</h1>
              <p>Our watches are an expression of your taste.<br></br> Let them inspire you to be the best version of yourself.</p>
              <button>Shop Now</button>
            </div>
            <div>
              <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-24.png" height={600} width={700}></img>
            </div>
          </div>
         <div className="Watch2">
           <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-18.png" width={400} height={250}></img>
           <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-17.png"  width={400} height={250}></img>
           <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-16.png"  width={400} height={250}></img>
         </div>
         <div className="Watch3">
           <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-25.jpg" height={500} width={1350}></img>
           <h1>TIME TO MAKE A CHANGE<br></br>
             WWF x Hygge
            </h1>
         </div>
         <div className="Watch4">
           <h1>Bestselling Watches</h1>
           <img src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-03.jpg/2516776000000076668/700x700" height={450} width={350}></img>
           <img src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-06.jpg/2516776000000078029/700x700" height={450} width={350}></img>
           <img src="https://static.zohocdn.com/sites/stock-images/images/zwstock-image-15.jpg" height={500} width={600}></img>
         </div>
         <div className="Fooder">
           <img src="https://watch-shopping-demo.zohocommerce.com/Logo.png" height={80} width={80}></img>
          <div className="Fooder1">
            <h2>Quick Links</h2>
            <p>Home</p>
            <p> Contact Us</p>
          </div>
          <div className="Fooder1">
            <h2>Custmer Service</h2>
            <p>Terms of Use</p>
            <p>Returns Policy</p>
            <p>Shipping and Delivery</p>
            <p>Privacy Policy</p>
          </div>
          <div className="Fooder1">         
            <h2>We’d love to see you in our Facebook 
              Group!</h2>
              <button>Shop Now</button>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
          </div>
         </div>

        </>
    )
}
export default Home;