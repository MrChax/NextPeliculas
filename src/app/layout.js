import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body style={{background: 'linear-gradient(to bottom, #0a0a0a, #292929)'}}>{children}</body>
    </html>
  );
}
