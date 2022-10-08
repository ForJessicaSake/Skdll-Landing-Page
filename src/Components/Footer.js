import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer className='pl-24 pr-24 xxs:p-8 xxs:pr-8 xxm:pl-8 xxm:pr-8 xms:pl-8 xms:pr-8'>
  <h1 className='text-lg xxs:text-sm xms:text-base font-medium mt-10 xxs:w-56 xxm:w-64 xxm:text-base smm:text-base'>Stay in the loop, subscribe to our news letter</h1>
  <form className='mt-2'>  
    <input type='email' placeholder='Enter your email address' className=' rounded-l-md border-2 mt-4 w-fbtn p-1 xms:w-64 xxs:w-40 xxm:w-36 smm:w-72 text-sm'/>
    <button className='formbtn w-36 bg-black rounded-tr-md rounded-br-md text-white p-ptt xxs:w-20 xms:w-20  xms:text-sm xxs:text-sm xxs:p-ptb xxm:w-24 xxm:text-sm smm:w-28 smm:text-sm'>SUBMIT</button>
</form>
  <section className='flex justify-between xxs:grid xxs:grid-cols-1 xxs:gap-6 xxm:grid xxm:grid-cols-1 xxm:gap-6 xms:grid xms:grid-cols-2 xms:gap-10 smm:grid smm:grid-cols-2 smm:gap-6 mt-16 tracking-wide'>
  <nav>
    <ul className='leading-10 text-sm'>
      <h1 className='font-semibold text-base'>Links</h1>
      <li><Link to ='/'>Home</Link></li>
      <li><Link to ='/'>NewsLetter</Link></li>
      <li><Link to ='/'>Features</Link></li>
    </ul>
  </nav>

  <nav>
    <ul className='leading-10 text-sm'>
      <h1 className='font-semibold text-base'>Help</h1>
      <li>Support</li>
      <li>FAQ's</li>
      <li>Partnership</li>
    </ul>
  </nav>  
  
  <nav>
    <ul className='leading-10 text-sm'>
      <h1 className='font-semibold text-base'>Download</h1>
    <li>Andriod</li>
      <li>IOS</li>
    </ul>
  </nav>

  <nav>
    <ul className='leading-10 text-sm'>
    <h1 className='font-semibold text-base'>Resources</h1>
      <li>Terms of service</li>
      <li>Privacy policy</li>
    </ul>
  </nav>
  </section>
</footer>  
)
}

export default Footer