import Aurora from './components/Aurora/Aurora';

const ArrowLeft = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M16.5 10h-13M8 4.5 2.5 10 8 15.5" />
  </svg>
);

const members = [
  {
    number: '01',
    name: 'Jason',
    role: '异瞳猫',
    image: '/member-huang-peilin.jpg',
    focus: ['Agent 系统'],
    statement: '我叫 Jason Huang（HeteroCat），是一名人工智能工程师，致力于将大语言模型与现实世界中的产品相结合。',
    works: [
      { label: 'aiclub.shangyiku.com', href: 'https://aiclub.shangyiku.com' },
      { label: 'mooncake-game.shangyiku.com', href: 'https://mooncake-game.shangyiku.com/' },
    ],
  },
  {
    number: '02',
    name: '成员 02',
    role: 'AI 实践者',
    focus: ['智能体', '自动化', '原型开发'],
    statement: '用快速实验探索 AI 的边界，让技术真正进入工作与生活场景。',
  },
  {
    number: '03',
    name: '成员 03',
    role: '共创伙伴',
    focus: ['视觉设计', '内容表达'],
    statement: '把复杂的技术讲清楚、做漂亮，让每个创想更容易被看见。',
  },
];

export default function MembersPage() {
  return (
    <main className="site-shell members-shell">
      <div className="members-shell__aurora" aria-hidden="true">
        <Aurora
          colorStops={['#5227ff', '#10b981', '#eab308']}
          blend={0.56}
          amplitude={1.05}
          speed={0.4}
        />
      </div>
      <div className="hero__grid" aria-hidden="true" />

      <header className="nav page-width">
        <a className="brand" href="/" aria-label="返回 AI 创想俱乐部首页">
          <span className="brand__logo" aria-hidden="true">
            <img src="/ai-club-logo.jpg" alt="" />
          </span>
          <span className="brand__name">AI 创想俱乐部</span>
        </a>

        <a className="nav__back" href="/">
          <ArrowLeft />
          返回首页
        </a>
      </header>

      <section className="members-page page-width" aria-label="俱乐部成员">
        <header className="members-intro reveal reveal--one">
          <p className="members-intro__eyebrow">THE PEOPLE / 俱乐部成员</p>
        </header>

        <div className="members-list" aria-label="成员列表">
          {members.map((member, index) => (
            <article
              className={`member-card reveal reveal--${index === 0 ? 'two' : index === 1 ? 'three' : 'four'}`}
              key={member.number}
            >
              <div className={`member-card__portrait${member.image ? ' member-card__portrait--photo' : ''}`}>
                {member.image ? (
                  <img src={member.image} alt={`${member.name}的头像`} />
                ) : (
                  <span aria-hidden="true">{member.number}</span>
                )}
              </div>

              <div className="member-card__identity">
                <span className="member-card__status">
                  {member.image ? `成员 ${member.number}` : '资料待补充'}
                </span>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>

              <div className="member-card__body">
                <p className="member-card__statement">{member.statement}</p>
                {member.works && (
                  <div className="member-card__works">
                    <span>代表作</span>
                    {member.works.map((work) => (
                      <a href={work.href} key={work.href} target="_blank" rel="noreferrer">
                        {work.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <ul className="member-card__tags" aria-label={`${member.name}的关注方向`}>
                {member.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        
      </section>
    </main>
  );
}
