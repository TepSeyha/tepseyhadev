import { motion } from 'framer-motion';

export default function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 14px',
        border: '1px solid var(--border)',
        background: 'rgba(10,14,20,0.9)',
        backdropFilter: 'blur(8px)',
        fontSize: '0.75rem',
        color: 'var(--muted)',
        zIndex: 90,
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#00ff9d',
          boxShadow: '0 0 10px #00ff9d',
          animation: 'pulse 2s infinite',
        }}
      />
      Currently building:{' '}
      <span style={{ color: 'var(--accent)' }}>something awesome</span>
    </motion.div>
  );
}