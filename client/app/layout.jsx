import "./globals.css";

export const metadata = {
  title: "Dialogue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111111]">
        {children}
      </body>
    </html>
  );
}
