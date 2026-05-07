import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'
import img19 from '../assets/19.png'

const FLOAT_IMAGES = [
  { src: img1, alt: 'Creative work 1', className: 'ci ci-1' },
  { src: img2, alt: 'Creative work 2', className: 'ci ci-2' },
  { src: img3, alt: 'Creative work 3', className: 'ci ci-3' },
  { src: img4, alt: 'Creative work 4', className: 'ci ci-4' },
  { src: img5, alt: 'Creative work 5', className: 'ci ci-5' },
  { src: img6, alt: 'Creative work 6', className: 'ci ci-6' },
  { src: img7, alt: 'Creative work 7', className: 'ci ci-7' },
  { src: img8, alt: 'Creative work 8', className: 'ci ci-8' },
  { src: img9, alt: 'Creative work 9', className: 'ci ci-9' },
  { src: img10, alt: 'Creative work 10', className: 'ci ci-10' },
  { src: img11, alt: 'Creative work 11', className: 'ci ci-11' },
  { src: img12, alt: 'Creative work 12', className: 'ci ci-12' },
  { src: img13, alt: 'Creative work 13', className: 'ci ci-13' },
  { src: img14, alt: 'Creative work 14', className: 'ci ci-14' },
  { src: img15, alt: 'Creative work 15', className: 'ci ci-15' },
  { src: img16, alt: 'Creative work 16', className: 'ci ci-16' },
  { src: img17, alt: 'Creative work 17', className: 'ci ci-17' },
  { src: img18, alt: 'Creative work 18', className: 'ci ci-18' },
  { src: img19, alt: 'Creative work 19', className: 'ci ci-19' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="creativity-arena">
      {/* Floating images */}
      {FLOAT_IMAGES.map((img) => (
        <div key={img.className} className={img.className}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}

      {/* Centred text */}
      <div className="creativity-center">
        <p className="creativity-eyebrow">§ philosophy</p>
        <h2 className="creativity-headline">
          It's all about
          <br />
          <em>Creativity</em>
        </h2>
        <div className="creativity-rule" />
      </div>
    </section>
  )
}
