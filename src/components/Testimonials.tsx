import profileImg from '../assets/creativity3.png'

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="creativity-split" data-reveal>
        <div className="creativity-img-wrap">
          <img
            src={profileImg}
            alt="Amer Mysara"
            className="creativity-img"
          />
        </div>
        <div className="creativity-text">
          <h2>
            It's all about{' '}
            <span className="ital">Creativity</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
