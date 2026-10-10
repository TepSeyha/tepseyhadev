import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const contacts = [
  { icon: <FaEnvelope />, label: 'Email', value: 'tepseyhadev@gmail.com', href: 'mailto:tepseyhadev@gmail.com', color: 'var(--accent)' },
  { icon: <FaPhone />, label: 'Phone', value: '+855 96 81 93 669', href: 'tel:+855968193669', color: 'var(--accent-2)' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/TepSeyha', href: 'https://github.com/TepSeyha', color: '#c77dff' },
  { icon: <FaTelegram />, label: 'Telegram', value: '@tep_seyha168', href: 'https://t.me/tep_seyha168', color: '#00b8ff' },
  { icon: <FaGlobe />, label: 'Website', value: 'tepseyhadev.vercel.app', href: 'https://tepseyhadev.vercel.app', color: '#ff3b6b' },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title reveal">Contact</h2>
      <motion.p
        className="reveal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ color: 'var(--muted)', maxWidth: '600px', marginBottom: '50px', lineHeight: 1.8 }}
      >
        Have a project in mind? Let's build something great together. I'm currently
        open for freelance work and collaboration opportunities.
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, borderColor: c.color }}
            style={{
              border: '1px solid var(--border)',
              padding: '24px',
              background: 'var(--bg-alt)',
              color: 'var(--text)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'border-color 0.3s',
            }}
          >
            <div style={{ fontSize: '1.6rem', color: c.color }}>{c.icon}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {c.label}
            </div>
            <div style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>{c.value}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}