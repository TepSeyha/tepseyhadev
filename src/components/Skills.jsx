import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    color: 'var(--accent)',
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React JS', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'var(--accent-2)',
    items: [
      { name: 'PHP', level: 75 },
      { name: 'FastAPI', level: 70 },
    ],
  },
  {
    title: 'Other',
    color: '#ff3b6b',
    items: [
      { name: 'Networking', level: 70 },
      { name: 'Microsoft Office', level: 85 },
      { name: 'Leadership', level: 80 },
      { name: 'Research', level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-alt)' }}>
      <h2 className="section-title reveal">Skills</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
        }}
      >
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.15, duration: 0.5 }}
            style={{
              border: '1px solid var(--border)',
              padding: '28px',
              background: 'var(--bg)',
            }}
          >
            <h3 style={{ color: group.color, marginBottom: '24px', fontSize: '1.1rem' }}>
              {`<${group.title} />`}
            </h3>
            {group.items.map((s, i) => (
              <div key={s.name} style={{ marginBottom: '18px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    marginBottom: '8px',
                    color: 'var(--muted)',
                  }}
                >
                  <span>{s.name}</span>
                  <span style={{ color: group.color }}>{s.level}%</span>
                </div>
                <div
                  style={{
                    height: '4px',
                    background: 'var(--border)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: gi * 0.15 + i * 0.1,
                      duration: 1,
                      ease: 'easeOut',
                    }}
                    style={{ height: '100%', background: group.color }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}