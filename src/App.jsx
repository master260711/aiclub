import Aurora from './components/Aurora/Aurora';
import DepthText from './components/DepthText/DepthText';

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.1 1.2a10.6 10.6 0 0 1 5.7 0c2.2-1.5 3.1-1.2 3.1-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.3-2.8 5.3-5.4 5.6.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
    />
  </svg>
);

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M5.5 14.5 14.5 5.5M7 5.5h7.5V13" />
  </svg>
);

const ArrowDown = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M10 3v13M5.5 11.5 10 16l4.5-4.5" />
  </svg>
);

const principles = [
  { number: '01', title: '真实问题', text: '从业务场景中寻找切口' },
  { number: '02', title: '快速实验', text: '用最小原型验证价值' },
  { number: '03', title: '开放共创', text: '让好想法找到同行者' },
];

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__aurora" aria-hidden="true">
          <Aurora
            colorStops={['#5227ff', '#10b981', '#eab308']}
            blend={0.58}
            amplitude={1.12}
            speed={0.46}
          />
        </div>
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />

        <header className="nav page-width">
          <a className="brand" href="#top" aria-label="AI 创想俱乐部首页">
            <span className="brand__logo" aria-hidden="true">
              <img src="/ai-club-logo.jpg" alt="" />
            </span>
            <span className="brand__name">AI 创想俱乐部</span>
          </a>

          <a
            className="nav__github"
            href="https://github.com/master260711/aiclub"
            target="_blank"
            rel="noreferrer"
            aria-label="在 GitHub 查看 AI 创想俱乐部"
          >
            <GithubIcon />
          </a>
        </header>

        <div className="hero__content page-width" id="top">
          <div className="eyebrow reveal reveal--one">
            <span className="eyebrow__pulse" aria-hidden="true" />
            深圳市尚依库科技有限公司 · AI CREATIVE CLUB
          </div>

          <div className="hero__title-wrap reveal reveal--two">
            <h1 className="hero__depth-title" id="hero-title">
              <DepthText
              text="AI创想俱乐部"
                faceColor="#f8fafc"
                depthColor="#eab308"
                fontSize="clamp(3rem, 12vw, 7rem)"
                fontWeight={900}
                layers={34}
                depth={2.4}
                tilt={7.5}
                smoothing={0.14}
                perspective={900}
                orbitSpeed={0.35}
                pointerTracking
                autoOrbit
                shadow
              />
            </h1>
          </div>

          <p className="hero__statement reveal reveal--two">
            让每一个 AI 创想，走出脑海，成为真实作品。
          </p>

          <p className="hero__intro reveal reveal--three">
            我们聚集愿意动手的人，从真实问题出发，用分享、实验与项目共创，
            <br className="desktop-break" />
            把 AI 创想做成可验证、可复用的作品。
          </p>

          <div className="hero__actions reveal reveal--four">
            <a
              className="button button--primary"
              href="https://github.com/master260711/aiclub/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              提交一个创想
              <ArrowUpRight />
            </a>
            <a className="button button--secondary" href="#club-method">
              看看我们怎么做
              <ArrowDown />
            </a>
          </div>
        </div>

        <div className="principles page-width reveal reveal--five" id="club-method">
          <p className="principles__label">OUR METHOD / 共创方法</p>
          <div className="principles__list">
            {principles.map((item) => (
              <article className="principle" key={item.number}>
                <span className="principle__number">{item.number}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
