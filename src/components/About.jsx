import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title reveal">About Me</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'start',
        }}
      >
        <motion.div
          className="reveal"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--muted)', lineHeight: 2, marginBottom: '20px' }}>
            Hello, my name is{' '}
            <span style={{ color: 'var(--accent)' }}>Tep Seyha</span>. I've gained{' '}
            <strong>1+ year of experience</strong> through self-study using various
            online resources. I'm passionate about learning and continuously improving
            my skills.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 2 }}>
            I enjoy using{' '}
            <span style={{ color: 'var(--accent-2)' }}>AI as an assistant</span> to
            support my work and enhance productivity. Currently studying IT at{' '}
            <strong>RPITST University</strong> (2025–2026).
          </p>
        </motion.div>

        <motion.div
          className="reveal"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            border: '1px solid var(--border)',
            padding: '32px',
            background: 'var(--bg-alt)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              padding: '4px 12px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}
          >
            profile.json
          </div>

          <pre
            style={{
              fontSize: '0.85rem',
              lineHeight: 1.9,
              marginTop: '20px',
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
            }}
          >
{`{
  "name": "Tep Seyha",
  "role": "Web Developer",
  "location": "Cambodia 🇰🇭",
  "education": "RPITST University",
  "experience": "1+ year",
  "languages": ["Khmer", "English"],
  "status": "`}
            <span style={{ color: 'var(--accent)' }}>available_for_work</span>
{`"
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}