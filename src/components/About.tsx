import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader
          num="§ 02 — ABOUT"
          title={
            <>
              Engineer's hands,
              <br />
              <span className="ital">director's</span> eye.
            </>
          }
          right="A seven-year arc from print and identity into cinematography, and generative film — one continuous obsession with making images that move someone."
        />

        <div className="about-grid">
          <div className="about-body" data-reveal>
            <p>
              I make films the way a <span className="accent">composer</span> scores a room — frame by
              frame, breath by breath. My path started in software engineering, detoured through
              identity design, and settled into cinematography before generative models rewired what a
              filmmaker can do alone in a single week.
            </p>
            <p className="dim">
              Today I direct AI-native shorts and branded cinematic work from a Dubai desk — concept to
              score — blending Runway, Sora, Kling and Luma with real cameras, real color, real sound.
              The engineering keeps the pipeline honest; seven years of craft keep the story honest;
              the AI keeps the ambition unreasonable.
            </p>
          </div>

          <aside
            className="about-meta"
            data-reveal
            style={{ ['--reveal-delay' as string]: '.15s' }}
          >
            <dl>
              <dt>Based</dt>
              <dd>Dubai, United Arab Emirates</dd>
              <dt>Focus</dt>
              <dd>AI filmmaking · cinematic shorts · branded film · creative direction</dd>
              <dt>Experience</dt>
              <dd>7+ years, senior</dd>
              <dt>Audience</dt>
              <dd>20K+ on TikTok (@amer.mysara)</dd>
              <dt>Education</dt>
              <dd>
                BSc Software Engineering, 2019
                <br />
                Adobe Content Creator Spec., 2025
                <br />
                Art Director Diploma, Graphitopia, 2022
              </dd>
              <dt>Languages</dt>
              <dd>Arabic (native) · English (proficient)</dd>
              <dt>Currently</dt>
              <dd>Content Creator &amp; AI Filmmaker</dd>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
