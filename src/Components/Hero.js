import phone from '../Images/phone.png'
function Hero() {
    return(
  <header className='flex justify-between pl-28 pr-28 pt-14'>
    <section className=' flex flex-col justify-center z-50'> 
      <hgroup className='text-7xl font-semibold tracking-wide'>
            <h1>Scheduling</h1>
            <h1>just got easier!</h1>
      </hgroup>
      <p className='mt-6 text-lg w-96 mb-10'>Plan and schedule your day to day tasks and activities easily.</p>
      <section className='flex justify-between w-80'>
            <figure className='bg-black text-white w-36 flex p-1 items-center rounded-md'>
          <aside >
            <img src="" alt="" className='w-6' />
          </aside>
          <div>
                <h6 className='text-xs  text-gray-200'>GET IT ON</h6>
            <h2 className='text-sm'>Google Play</h2>
          </div>
        </figure>

            <figure className='bg-black text-white flex w-36 p-1 items-center rounded-md '>
          <aside>
            <img src="" alt="" className='w-6' />
          </aside>
          <div>
            <h6 className='text-xs text-gray-200'>Download on the</h6>
            <h2 className='text-sm'>App Store</h2>
          </div>
        </figure>
      </section>
    </section>
        <section className=''>
        <img src={phone} alt ='phone' className='w-96'/>
    </section>
    
  </header>
)
}

export default Hero;
