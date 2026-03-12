import React from 'react'
import EmptyCompo from './EmptyCompo'
import Images from './Images'
import { images } from './dataJson'

const Body = () => {
  return (
    <main className="mainBody">
    <EmptyCompo className="mainSimple" name={
            <article className="simple">
                <h1>Simple, easy payments</h1>
                <p>Building a business is hard. Getting shouldn't be</p>
            </article>
    } />
    <EmptyCompo className="mainPart" name={
        <section className="menuPart">
            <aside className="side">
              {/* <img className="handGif" src="https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif" /> */}
              {images.map((img) =>
                img.id === 1 ? (
                  <Images
                    key={img.id}
                    src={img.src}
                    alt={`Image ${img.id}`}
                    className="handGif"
                  />
                ) : null
                )}
            </aside>
            <article className="rightsid">
                    {/* {images.map((img) => (
        <ImageCard key={img.id} src={img.src} alt={img.alt} />
      ))} */}

            </article>
        </section>
    } />
    
    </main>
  )
}

export default Body
