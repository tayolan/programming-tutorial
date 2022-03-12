import React from 'react'

function Home() {
  return (
    <div><header>
    <div className="container">
        <div id="branding">
            <h1><span className="highlight">Premium</span> Dough Confectioneries</h1>
        </div>
        <nav>
            <ul>
                <li className="current"><a href="index.html">Home</a></li>
                <li className="content"><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
            </ul>
        </nav>
    </div>
</header>
<section id="showcase"style={{ 
      backgroundImage: `url("./images/showcase.webp")` 
    }}
>
    <div className="container">
        <h1>Healthy Family Loaf</h1>
        <p>Give your family the best eating experience</p>
    </div>
  </section>
    <section id="Newsletter">
      <div className="container">
          <h1>Subscribe to our newsletter</h1>
          <form>
              <input type="email" placeholder="Enter email..."/>
              <button type="submit" className="button_1">Subscribe</button>
          </form>
      </div>
</section>
<section id="boxes">
  <div className="container">
      <div className="box">
          <img src="./images/html.jfif"/>
      <h3>HTML5 Markup</h3>
      <p>Give your family the best eating experience</p>
      </div>
      <div className="box">
      <img src="./images/apple.jfif"/>
      <h3>CSS3 Styling</h3>
      <p>Give your family the best eating experience</p>
  </div>
  <div className="box">
      <img src="./images/waterflow.jfif"/>
      <h3>Bread making</h3>
      <p>Give your family the best eating experience</p>
  </div>
  </div>

</section>
<footer>
    <p>Premium Dough Confectioneries, copyright &copy;2022</p>
</footer>
</div>
  )
}

export default Home