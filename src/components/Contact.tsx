export function Contact() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="sh-num" data-reveal style={{ marginBottom: 32 }}>
          § 09 — LET'S CUT SOMETHING
        </div>
        <h2 data-reveal>
          Got a <span className="ital">story</span>
          <br />
          to direct<span className="accent">?</span>
        </h2>

        <div className="cta-body">
          <p data-reveal>
            Films, campaigns, brand worlds — if it's cinematic and it needs someone who can run the
            whole pipeline, let's talk. Dubai-based, working globally, shipping in English and Arabic.
          </p>

          <div
            className="cta-contact"
            data-reveal
            style={{ ['--reveal-delay' as string]: '.1s' }}
          >
            <div>
              <span className="k">Email&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto:amer.mysara2@gmail.com">amer.mysara2@gmail.com</a>
            </div>
            <div>
              <span className="k">Phone&nbsp;&nbsp;&nbsp;</span>
              <a href="tel:+971508108457">+971 50 810 8457</a>
            </div>
            <div>
              <span className="k">LinkedIn</span>
              <a href="https://linkedin.com/in/amer-mysara" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/amer-mysara
              </a>
            </div>
            <div>
              <span className="k">TikTok&nbsp;</span>
              <a href="https://tiktok.com/@amer.mysara" target="_blank" rel="noopener noreferrer">
                @amer.mysara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
