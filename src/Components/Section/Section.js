import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import './section.css'

const Section = (props) => {

    return (
        <section className="cardsContainer">
        {/* <Card text='apt1' image={img1}/>
            <Card text='apt2' image={img2}/> */}
          <div className="card">
              <i className="fa-light fa fa-heart"></i>
              <img src={img1}/>
              <div>Texte</div>
          </div>
          <div className="card">
                <i className="fa-light fa fa-heart"></i>
              <img src={img2}/>
              <div>Texte</div>
          </div>
          <div className="card">
            <i className="fa-light fa fa-heart"></i>
              <img src={img1}/>
              <div>Texte</div>
          </div>
      </section>
    )
}

export default Section