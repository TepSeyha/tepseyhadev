import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Freelance Web Developer',
    period: '2025 – 2026',
    color: 'var(--accent)',
    points: [
      'Developed custom websites for 4+ private clients (business profiles, blogs, small e-commerce)',
      'Built responsive sites using HTML, CSS, JavaScript, PHP, and FastAPI',
      'Integrated AI tools (ChatGPT, Copilot) to boost productivity by ~30%',
      'Communicated directly with clients to gather requirements and deliver on time',
    ],
  },
  {
    role: 'Website Designer',
    period: '2024 – 2025',
    color: 'var(--accent-2)',
    points: [
      'Worked as a Website Designer at a Design Studio',
      'Responsible for building modern, user-focused web designs',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title reveal">Experience</h2>
      <div style={{ position: 'relative', paddingLeft: '40px' }}>
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: 0,
            bottom: 0,
            width: '2px',
            background:
              'linear-gradient(180deg, var(--accent), var(--accent-2), transparent)',
          }}
        />
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            className="reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            style={{ marginBottom: '50px', position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-40px',
                top: '8px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--bg)',
                border: `3px solid ${exp.color}`,
                boxShadow: `0 0 20px ${exp.color}`,
              }}
            />
            <span style={{ color: exp.color, fontSize: '0.8rem' }}>{exp.period}</span>
            <h3 style={{ fontSize: '1.4rem', margin: '8px 0 16px' }}>{exp.role}</h3>
            <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', listStyle: 'disc' }}>
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}