import React from 'react'
import Button from './Button'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className='paySta'>
        <p className='pay'>Try Paystack Now</p>

        <div className='footerSty'>
            <p className='pay-2'>Start accepting payments in just 30 minutes</p>
        <Button className="btn1" text="Create a free accound"/>
        </div>
      </section>





      <div className='sideFooter'>
        <ul className='sidem'>
            <li  className='sideSty'>Why paystack</li>
            <li>Why choose paystack</li>
            <li>Success Rates</li>
            <li> For enterprenuers</li>
            <li>For coporates</li>
            <li>For internation</li>
            <li>For Startsups</li>
            <li>For Fintech</li>
            <li>For Agencies</li>
            <li>For schools</li>
            <li>for betting</li>
            <li></li>
        </ul>


        <ul className='sidem'>
            <li  className='sideSty'>Pricing</li>
            <li>Nigeria</li>
            <li>Ghana</li>
            <li>South Afica</li>
            <li>Kenya</li>
            <li> Cote D'Ivoire</li>
            <li  className='sideSty'>Customers</li>
            <li className='sideSty'>Learn</li>
            <li>blog</li>
            <li>Guides</li>
            <li>Video Tutorials</li>
            <li>Decode Fintech</li>
            <li>Commerce</li>
            <li>Terminal</li>
        </ul>


        <ul  className='sidem'>
            <li className='sideSty'>Developers</li>
            <li>Documentation</li>
            <li>Integration</li>
            <li>Staus Page</li>
            <li  className='sideSty'> Community</li>
            <li>Service Partner Directory</li>
            <li>Nigeria Lagos</li>
            <li  className='sideSty'>Support</li>
            <li>Help Desk</li>
            <li>Contact Us</li>
            <li>Why was i debited</li>
            <li>Register your buisiness</li>
            <li></li>

            
        </ul>
        <ul className='sidem'>
            <li className='sideSty'>About</li>
            <li>Company</li>
            <li>Changelog</li>
            <li>Subscribe</li>
            <li>Compliance</li>
            <li>Carrers</li>
            <li>Media KIt</li>
            <li>Privacy & Terms</li>
            <li>Cookies Setting</li>
        </ul>

</div>

        <nav className='sect3'>
        <ul className='sidem'>
            <li className='sideSty'>Lagos</li>
            <p>126 Joel Ogunnaike Street,<br/>
           Ikeja GRA, Ikeja,<br/>
          Lagos, Nigeria</p>
        </ul>

        <ul className='sidem'>
            <li className='sideSty'>San Franscico</li>
            <p>354 Oyster Point Blvd.,<br/>
          South San Francisco,
          CA 94080<br/>
             United States</p>
        </ul>


        <ul className='sidem'>
            <li className='sideSty'>Capetown</li>
            <p>Unit 6, 22fifty Building 1,
32 Jamieson Street,<br/>
Cape Town 8000<br/>
South Afric</p>
        </ul>

        
       </nav>
      
    </>
  )
}

export default Footer