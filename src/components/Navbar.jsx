import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const links = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: scrolled ? '14px 8%' : '22px 8%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(10,14,20,0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s',
        zIndex: 100,
      }}
    >
      <a href="#home" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>
        &lt;TS /&gt;
      </a>
      <ul style={{ display: 'flex', gap: '32px' }}>
        {links.map((l, i) => (
          <motion.li
            key={l}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <a
              href={`#${l}`}
              style={{
                color: 'var(--text)',
                fontSize: '0.85rem',
                position: 'relative',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text)')}
            >
              <span style={{ color: 'var(--accent)' }}>0{i + 1}.</span> {l}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}