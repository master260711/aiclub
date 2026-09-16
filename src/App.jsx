import Aurora from './components/Aurora/Aurora';
import DepthText from './components/DepthText/DepthText';
import MembersPage from './MembersPage';

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

function HomePage() {
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

          <a className="nav__members" href="/members">
            成员
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
            <button className="button button--primary" type="button">
              提交一个创想
            </button>
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

export default function App() {
  return window.location.pathname.replace(/\/$/, '') === '/members' ? <MembersPage /> : <HomePage />;
}
