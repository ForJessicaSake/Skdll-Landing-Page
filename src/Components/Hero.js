import phone from '../Images/phone.png'
function Hero() {
    return(
  <header className='flex justify-center'>
    <section className="text">
      <h1>Scheduling</h1>
      <h1>just got easier!</h1>
      <p>Plan and schedule your day to day tasks and activities easily.</p>
      <section>
        <figure>
          <aside>
            <img src="" alt="google play icon" />
          </aside>
          <div>
            <h4>GET IT ON</h4>
            <h2>Google Play</h2>
          </div>
        </figure>

        <figure>
          <aside>
            <img src="" alt="App store icon" />
          </aside>
          <div>
            <h4>Download on the</h4>
            <h2>App Store</h2>
          </div>
        </figure>
      </section>
    </section>
    <section>
        <img src={phone} alt ='phone'/>
    </section>
  </header>
)
}

export default Hero;
