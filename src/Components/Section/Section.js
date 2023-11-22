import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import './section.css'

const Section = () => {
    return (
        <section className="cardsContainer">
          <div className="card">
              <i className="fa-light fa fa-heart"></i>
              <img src={img1}/>
              <div>Texte</div>
          </div>
          <div className="card">
              <img src={img2}/>
              <div>Texte</div>
          </div>
          <div className="card">
              <img src={img1}/>
              <div>Texte</div>
          </div>
      </section>
    )
}

export default Section