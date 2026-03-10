import React from 'react'
import EmptyCompo from './EmptyCompo'
import Button from './Button'

const Hero = () => {
  return (
    <EmptyCompo className="mainHero" name={
        <div className="menuHero" >
            <section className="txtHero">
                <h1>Modern online and offline <br /> payments for Africa</h1>
                <p>Paystack help businesses in Africa get paid by anyone, <br /> anywhere in the world</p>
                <div className="btnHero">
                    <Button className="btn2" name="Create a free account"/>
                    <Button className="btn3" name="or Contact Sales"/>
                </div>
                <div className="image">
                    <p>Trusted by over 200,000 businesses</p>
                    <section className="partnerImg">
                        <img className="partner" src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg" alt="" />
                        <img className="partner1" src="https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/mtn-group-grayscale.svg" alt="" />
                        <img className="partner1" src="https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Bolt-Stack-Blue_200304_153027.svg" alt="" />
                        <img className="partner" src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg" alt="" />
                    </section>
                </div>
            </section>
            <section className="txtSide">
                <p>Watch MTN Chief Transformation Officer, Olubayo <br /> 
                Adekanmbi, discuss working with Paystack</p>
                <div className="bg">
                    <img className="play" src="data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2213%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.438%2012.389l5.943-4.417s.653-.54.653-1.133c0-.624-.653-1.134-.653-1.134L2.438%201.288C1.633.563.15.605.15%202.231v9.215c0%201.625%201.483%201.668%202.288.943z%22%20fill%3D%22%230BA4DB%22%20fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
                </div>
            </section>
        </div>
        
  } />
      
    
  )
}

export default Hero
