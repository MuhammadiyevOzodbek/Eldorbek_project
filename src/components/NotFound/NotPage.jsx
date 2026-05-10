import { Link } from 'react-router-dom'
import './NotStyle.css'
function NotPage() {
  return (
    <div className='menu'>
      <section className='wrapper'>
        <div className='container'>
          <div className='scene'>
            <div className='circle'></div>
            <div className='one'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>
            <div className='two'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>
            <div className='three'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>
            <p className='px'>404</p>
            <p className='px'>404</p>
          </div>
          <div className='text'>
            <article>
              <p>Uh oh! Looks like you got lost. Go back to the homepage if you like.</p>
              <Link to={'/'}><button>Home</button></Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotPage