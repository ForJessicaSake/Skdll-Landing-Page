import phone from '../Images/phone.png'
import store from "../Images/store.png"
import playstore from "../Images/playstore.png"

function Hero() {
    return(
  <header className='flex justify-between xms:pl-20 xms:pr-20 xxs:pl-10 xxs:pr-10 pl-28 pr-28 pt-14 xxs:justify-center xxs:flex-col xxm:flex-col  xxm:pl-8 xxm:pr-8 xms:flex-col smm:pl-20 smm:pr-20'>

    <section className=' flex flex-col justify-center z-50'> 
      <hgroup className='text-6xl font-semibold tracking-wide xxs:text-3xl xxs:w-96 xxm:w-96 xxm:text-4xl xms:w-96 xms:text-5xl smm:text-5xl'>
            <h1>Scheduling</h1>
            <h1>just got easier!</h1>
      </hgroup>
      <p className='mt-6 text-lg w-96 mb-10 xms:text-sm xms:w-72 xxs:text-xs xxs:w-64 xxm:w-64 xxm:text-sm'>Plan and schedule your day to day tasks and activities easily.</p>
      <section className='flex justify-between w-80 xxs:w-bt xxm:w-80'>
            <figure className='bg-black text-white w-36 flex p-1 items-center rounded-md xxs:w-28 xxs:p-2'>
          <aside >
            <img src={playstore} alt="" className='w-5 mr-1 ml-1 xxs:w-3' />
          </aside>
          <div>
                <h6 className='text-xs text-gray-200'>Get it on</h6>
            <h2 className='text-sm xxs:text-xs'>Google Play</h2>
          </div>
        </figure>

            <figure className= 'bg-black text-white flex w-36 p-1 items-center rounded-md xxs:w-36 xxs:p-2'>
          <aside>
            <img src={store} alt="" className='w-5 mr-1 ml-1 xxs:w-3' />
          </aside>
          <div>
            <h6 className='text-xs text-gray-200'>Download on the</h6>
            <h2 className='text-sm xxs:text-xs'>App Store</h2>
          </div>
        </figure>
      </section>

    </section>
        <section className=''>
        <img src={phone} alt ='phone' className='w-96 xxs:ml-2 xxs:w-wt xxs:mt-4 xms:w-80 xms:ml-2'/>
    </section>
    
  </header>
)
}

export default Hero;
