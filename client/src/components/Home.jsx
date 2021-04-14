import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import home1 from '../assets/homephoto1.png'
import home2 from '../assets/homephoto2.png'
import home3 from '../assets/homephoto3.png'
import home4 from '../assets/homephoto4.png'

function Home () {
  return (
    <div className='container'>
      <section className='xop-section'>
        <div className='xop-wrapper'>
          <div className='xop-container'>

            <a className='project' href='/user'>
              <figure>
                <img src={home1} alt='work out ' />
                <figcaption>
                  <div>
                    <h3>You a personal? Help track your clients work out plans</h3>
                    <p className='cta'>Add Client</p>
                  </div>
                </figcaption>
              </figure>
            </a>

            <a className='project' href='/exerciselist'>
              <figure>
                <img src={home2} alt='work out' />
                <figcaption>
                  <div>
                    <h3>Manage your clients exercises</h3>
                    <p className='cta'>Exercise List</p>
                  </div>
                </figcaption>
              </figure>
            </a>

            <a className='project' href='/exerciselist'>
              <figure>
                <img src={home3} alt='work out' />
                <figcaption>
                  <div>
                    <h3>Exercise too difficult, change and update it.</h3>
                    <p className='cta'>Edit the Exercise</p>
                  </div>
                </figcaption>
              </figure>
            </a>

            <a className='project' href='/user'>
              <figure>
                <img src={home4} alt='work out' />
                <figcaption>
                  <div>
                    <h3>Help your clients meet their goals</h3>
                    <p className='cta'>The Goal</p>
                  </div>
                </figcaption>
              </figure>
            </a>


          </div>

        </div>

      </section>
    </div>
  )
}

export default Home
