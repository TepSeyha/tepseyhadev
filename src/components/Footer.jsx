export default function Footer() {
  return (
    <footer style={{
      padding: '40px 8%',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      color: 'var(--muted)',
      fontSize: '0.8rem',
    }}>
      <p style={{ marginBottom: '8px' }}>
        <span style={{ color: 'var(--accent)' }}>&lt;/&gt;</span> Designed &amp; built by Tep Seyha
      </p>
      <p>© {new Date().getFullYear()} · Cambodia 🇰🇭 · All rights reserved</p>
    </footer>
  );
}