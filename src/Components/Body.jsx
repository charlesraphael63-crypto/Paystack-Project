import React from 'react'
import EmptyCompo from './EmptyCompo'

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
        <section>

        </section>
    } />
    </main>
  )
}

export default Body
