import Image from "next/image";
import { profile } from "@/data/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { WorkGrid } from "@/components/WorkGrid";

const i = (n: number) => ({ ["--i" as string]: n });

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main>
        {/* ── Hero: text-left / photo-right, off-centre ─────────────── */}
        <section className="shell hero" id="top">
          <div className="hero__copy">
            <p className="label reveal" style={i(0)}>
              Performance marketing · AI for marketing teams · {profile.location}
            </p>
            <h1 className="hero__title reveal" style={i(1)}>
              A marketing budget should be able to{" "}
              <span className="hl">explain itself</span>.
            </h1>
            <p className="hero__lead reveal" style={i(2)}>
              I&apos;m Saumya. I plan, run and automate Google, Meta and YouTube campaigns,
              build GA4 measurement that answers real questions, and put AI agents to work
              for small marketing teams. Nine years in, most recently at Google.
            </p>
            <div className="hero__actions reveal" style={i(3)}>
              <a className="btn" href="#contact">
                Book a free 30-minute audit <span className="btn__arrow">→</span>
              </a>
              <a className="btn btn--outline" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${profile.links.resume}`} target="_blank" rel="noopener">
                Résumé (PDF)
              </a>
            </div>
            <nav className="hero__index reveal" aria-label="On this page" style={i(4)}>
              <a href="#work">01 · Work</a>
              <a href="#lab">02 · AI lab</a>
              <a href="#about">03 · About</a>
              <a href="#channel">04 · AI Ad Insider</a>
              <a href="#contact">05 · Contact</a>
            </nav>
          </div>
          <figure className="hero__figure reveal" style={i(2)}>
            <div className="hero__photo">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/saumya.jpg`}
                alt="Saumya Pant, smiling, one hand resting on a carved sandstone pillar"
                width={740}
                height={809}
                priority
                sizes="(max-width: 820px) 80vw, 420px"
              />
            </div>
            <figcaption className="label hero__cap">Bengaluru · 2026</figcaption>
          </figure>
        </section>

        {/* ── Numbers strip: honest, from the résumé ────────────────── */}
        <section className="section--band band--pear">
          <div className="shell stats">
            {profile.stats.map((s, k) => (
              <div className="stat reveal reveal--scroll" style={i(k)} key={s.label}>
                <strong className="stat__num">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </strong>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What I do: a numbered index, not a card row ───────────── */}
        <section className="shell section" id="services">
          <div className="section__head reveal reveal--scroll">
            <p className="label">What I do</p>
            <h2>Four things, each with a project that proves it.</h2>
          </div>
          <ol className="index">
            {profile.services.map((s, k) => (
              <li className="index__row reveal reveal--scroll" style={i(k)} key={s.n}>
                <span className="index__n">{s.n}</span>
                <div className="index__body">
                  <h3 className="index__title">{s.title}</h3>
                  <p className="index__text">{s.body}</p>
                </div>
                <a className="index__link" href={s.href}>
                  See the work →
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Work: the Portfolio Grid ──────────────────────────────── */}
        <section className="shell section section--tight" id="work">
          <div className="section__head reveal reveal--scroll">
            <p className="label">01 · Selected work</p>
            <h2>Six projects, all shipping this autumn. Every number published.</h2>
          </div>
          <WorkGrid />
        </section>

        {/* ── Lab: one cyan band ────────────────────────────────────── */}
        <section className="section--band band--cyan" id="lab">
          <div className="shell lab">
            <div className="lab__head reveal reveal--scroll">
              <p className="label">02 · AI lab</p>
              <h2>Marketing systems that run themselves.</h2>
              <p className="lab__text">
                Small agents built for the jobs a marketing team does every week: audit the
                account, answer the data question, write the Monday brief. Each one gets a
                write-up and a walkthrough on{" "}
                <a href={profile.links.channel} target="_blank" rel="noopener">
                  aiadinsider.com
                </a>
                .
              </p>
            </div>
            <div className="lab__aside reveal reveal--scroll" style={i(1)}>
              <p className="lab__big">
                <span className="hl hl--coral">7%</span>
              </p>
              <p className="lab__caption">
                fewer support-agent hours after an AI pipeline I piloted at Google started
                finding gaps in help-centre content and fixing them. Cases fell 2% quarter on
                quarter. That is the kind of number these agents are built to move.
              </p>
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────────── */}
        <section className="shell section about" id="about">
          <div className="about__main">
            <div className="section__head reveal reveal--scroll">
              <p className="label">03 · About</p>
              <h2>Engineering, then sales, then product. Now the AI layer over all of it.</h2>
            </div>
            <p className="about__text reveal reveal--scroll" style={i(1)}>
              {profile.about}
            </p>
            <ol className="timeline reveal reveal--scroll" style={i(2)}>
              {profile.timeline.map((t) => (
                <li className="timeline__row" key={t.when + t.role}>
                  <span className="label timeline__when">{t.when}</span>
                  <span className="timeline__role">{t.role}</span>
                  <span className="timeline__org">{t.org}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="about__side">
            <a
              className="card card--mint cred reveal reveal--scroll"
              style={i(1)}
              href={profile.links.credly}
              target="_blank"
              rel="noopener"
            >
              <span className="cred__seal card__rise" aria-hidden />
              <span className="cred__body">
                <strong>{profile.certification.title}</strong>
                <span className="cred__meta">{profile.certification.meta}</span>
              </span>
            </a>
            <div className="reveal reveal--scroll" style={i(2)}>
              <p className="label">Education</p>
              <ul className="plain">
                {profile.education.map((e) => (
                  <li key={e.what}>
                    <strong>{e.what}</strong> · {e.where} · {e.year}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal--scroll" style={i(3)}>
              <p className="label">Tools</p>
              <ul className="chips">
                {profile.tools.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="aside-note reveal reveal--scroll" style={i(4)}>
              Off the clock: public speaking and poetry. Once co-founded a Google Developer
              Group and ran the placement prep for 359 MBA students, which is the same job as
              running ads: get the message match right.
            </p>
          </aside>
        </section>

        {/* ── Channel ───────────────────────────────────────────────── */}
        <section className="shell section section--tight" id="channel">
          <div className="section__head section__head--row reveal reveal--scroll">
            <div>
              <p className="label">04 · AI Ad Insider</p>
              <h2>Weekly, on Instagram and YouTube.</h2>
              <p className="section__sub">
                Ads news, AI tools for marketers, and tips from inside Google.
              </p>
            </div>
            <a className="btn btn--ink" href={profile.links.instagram} target="_blank" rel="noopener">
              @aiadinsider <span className="btn__arrow">→</span>
            </a>
          </div>
          <ul className="posts">
            {profile.posts.map((p, k) => (
              <li key={p.title} className="reveal reveal--scroll" style={i(k)}>
                <a
                  className={`post post--${p.accent}`}
                  href={p.accent === "mint" ? profile.links.youtube : profile.links.instagram}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="label post__eyebrow">{p.eyebrow}</span>
                  <strong className="post__title">{p.title}</strong>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Contact: two cards, 1/3 – 2/3 ─────────────────────────── */}
        <section className="shell section contact" id="contact">
          <div className="card card--pear contact__card reveal reveal--scroll">
            <p className="label">Hiring?</p>
            <h2 className="contact__h">Let&apos;s talk about your team.</h2>
            <p className="contact__p">
              Senior performance, growth or marketing-AI roles. Résumé, LinkedIn and
              references on request.
            </p>
            <p className="contact__actions">
              <a className="btn btn--ink" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn btn--outline" href={profile.links.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </p>
          </div>
          <div className="card card--cyan contact__card reveal reveal--scroll" style={i(1)}>
            <p className="label">Need help with ads?</p>
            <h2 className="contact__h">Book a free 30-minute audit.</h2>
            <p className="contact__p">
              Tell me what&apos;s broken. You&apos;ll leave with three things to fix, whether or
              not we work together.
            </p>
            <form className="form" action={profile.formspree} method="POST">
              <label className="field">
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label className="field">
                Work email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="field">
                Monthly ad spend
                <select name="spend" defaultValue="₹1–5 lakh">
                  <option>Under ₹1 lakh</option>
                  <option>₹1–5 lakh</option>
                  <option>₹5–25 lakh</option>
                  <option>₹25 lakh+</option>
                </select>
              </label>
              <label className="field">
                Company
                <input name="company" autoComplete="organization" />
              </label>
              <label className="field field--full">
                What&apos;s broken?
                <textarea name="message" rows={3} />
              </label>
              <p className="field--full">
                <button className="btn" type="submit">
                  Request the audit <span className="btn__arrow">→</span>
                </button>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
