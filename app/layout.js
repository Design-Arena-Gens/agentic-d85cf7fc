export const metadata = {
  title: "Why Hydrogen Cars Struggle | EV vs H2",
  description: "Clear, evidence-based explainer on why hydrogen passenger vehicles haven't achieved mainstream success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        color: '#0f172a',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        margin: 0,
        padding: 0,
      }}>
        <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
          {children}
        </main>
        <footer style={{ textAlign: 'center', fontSize: 12, color: '#64748b', padding: '24px 0' }}>
          ? {new Date().getFullYear()} Analysis for public education
        </footer>
      </body>
    </html>
  );
}
