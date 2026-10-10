import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaLock } from 'react-icons/fa';

const featured = [
  {
    title: 'RPITST E-Learning Platform',
    subtitle: 'Regional Polytechnic Institute Techo Sen Takeo',
    desc: 'Full-stack e-learning system with course management, student enrollment, certification tracking, and secure authentication. Built to serve 10,000+ learners.',
    stack: ['Frontend + Backend', 'Full System'],
    tech: ['React JS', 'FastAPI', 'PHP', 'MySQL'],
    url: 'https://e-learning-rpitst.vercel.app/',
    screenshot: '/images/project/image.jpg',
    stats: [
      { label: 'Students', value: '10K+' },
      { label: 'Courses', value: '100+' },
      { label: 'Certificates', value: '50+' },
    ],
    color: 'var(--accent)',
  },
  {
    title: 'YTC Office — Youth Pastoral',
    subtitle: 'Phnom Penh Vicariate',
    desc: 'Bilingual (Khmer/English) community platform for Youth, Teenager & Children Pastoral Office. Includes event calendar, activity showcase, and program sections.',
    stack: ['Frontend'],
    tech: ['React JS', 'Tailwind CSS', 'i18n'],
    url: 'https://ytc-office.vercel.app/',
    screenshot: '/images/project/image.png',
    stats: [
      { label: 'Language', value: 'Khmer' },
      { label: 'Events', value: 'Monthly' },
      { label: 'Type', value: 'Community' },
    ],
    color: 'var(--accent-2)',
  },
];

const privateWork = [
  {
    title: 'Business Profile Websites',
    desc: 'Custom company profile sites for small businesses with contact forms and responsive layouts.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Personal Blog Platforms',
    desc: 'Dynamic blogs with PHP backend, clean article layouts, and admin panels.',
    tech: ['PHP', 'MySQL'],
  },
  {
    title: 'Mini E-Commerce Stores',
    desc: 'Small online stores with product listings, cart, and checkout flow.',
    tech: ['React JS', 'FastAPI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-alt)' }}>
      <h2 className="section-title reveal">Featured Projects</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '80px' }}>
        {featured.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            style={{
              display: 'block',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              overflow: 'hidden',
              position: 'relative',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = p.color;
              e.currentTarget.style.boxShadow = `0 0 40px -10px ${p.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ height: '3px', background: p.color }} />

            <div
              style={{
                padding: '40px',
                display: 'grid',
                gap: '32px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.7rem',
                    color: p.color,
                    border: `1px solid ${p.color}`,
                    padding: '4px 10px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  ● Live {p.stack.join(' · ')}
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: '8px' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                  {p.subtitle}
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '24px' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.7rem',
                        padding: '4px 10px',
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                <div
                  style={{
                    border: '1px solid var(--border)',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    background: 'var(--bg-alt)',
                  }}
                >
                  <img
                    src={p.screenshot}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML =
                        '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#7d8590;font-size:0.75rem;">screenshot</div>';
                    }}
                  />
                </div>
                <div style={{ display: 'grid', gap: '14px' }}>
                  {p.stats.map((s) => (
                    <div
                      key={s.label}
                      style={{ borderLeft: `2px solid ${p.color}`, paddingLeft: '14px' }}
                    >
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: p.color }}>
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: p.color,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  Visit Live Site <FaExternalLinkAlt size={12} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <h3
        className="reveal"
        style={{
          fontSize: '1.1rem',
          color: 'var(--muted)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <FaLock size={14} /> Private Client Work
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {privateWork.map((p, i) => (
          <motion.div
            key={p.title}
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              border: '1px dashed var(--border)',
              padding: '24px',
              background: 'var(--bg)',
              opacity: 0.9,
            }}
          >
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '10px' }}>
              NDA · private_client
            </div>
            <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>{p.title}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.65rem',
                    padding: '3px 8px',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}