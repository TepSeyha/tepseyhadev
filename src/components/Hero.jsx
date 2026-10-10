import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Web Developer',
  'React Enthusiast',
  'Problem Solver',
  'AI-Assisted Coder',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === '') {
          setDeleting(false);
          setRoleIdx((p) => (p + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
        gap: '60px',
        alignItems: 'center',
        paddingTop: '120px',
        minHeight: '100vh',
      }}
      className="hero-grid"
    >
      {/* LEFT — text */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--accent)', marginBottom: '20px', fontSize: '0.9rem' }}
        >
          $ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05 }}
        >
          <span className="glitch" data-text="TEP SEYHA">TEP SEYHA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '20px',
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: 'var(--muted)',
          }}
        >
          <span style={{ color: 'var(--accent-2)' }}>&gt;</span> {text}
          <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            marginTop: '30px',
            maxWidth: '600px',
            color: 'var(--muted)',
            lineHeight: 1.8,
          }}
        >
          Passionate developer from Cambodia 🇰🇭 with 1+ year of hands-on experience
          building responsive websites. I use AI as an assistant to boost productivity
          by ~30% while keeping every line intentional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn">View Projects →</a>
          <a
            href="mailto:tepseyhadev@gmail.com"
            className="btn"
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent-2)' }}
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      {/* RIGHT — photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: 'clamp(280px, 36vw, 420px)',
            height: 'clamp(280px, 36vw, 420px)',
            borderRadius: '50%',
            border: '2px dashed var(--accent)',
            opacity: 0.35,
          }}
        />

        {/* Corner brackets */}
        <div style={{
          position: 'relative',
          width: 'clamp(240px, 32vw, 380px)',
          height: 'clamp(240px, 32vw, 380px)',
        }}>
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
            <div
              key={pos}
              style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                borderTop: pos.includes('top') ? '3px solid var(--accent)' : 'none',
                borderBottom: pos.includes('bottom') ? '3px solid var(--accent)' : 'none',
                borderLeft: pos.includes('left') ? '3px solid var(--accent)' : 'none',
                borderRight: pos.includes('right') ? '3px solid var(--accent)' : 'none',
                top: pos.includes('top') ? '-8px' : 'auto',
                bottom: pos.includes('bottom') ? '-8px' : 'auto',
                left: pos.includes('left') ? '-8px' : 'auto',
                right: pos.includes('right') ? '-8px' : 'auto',
              }}
            />
          ))}

          <img
            src="/images/project/logo.png"
            alt="Tep Seyha"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid var(--border)',
              filter: 'grayscale(0.3) contrast(1.05)',
              transition: 'filter 0.4s',
            }}
            onMouseEnter={(e) => (e.target.style.filter = 'grayscale(0) contrast(1)')}
            onMouseLeave={(e) => (e.target.style.filter = 'grayscale(0.3) contrast(1.05)')}
          />
        </div>

        {/* Floating badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '0%',
            padding: '8px 14px',
            background: 'var(--bg)',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontSize: '0.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          ● available for work
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            justify-content: center;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}