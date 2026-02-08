import "./globals.css";

export const metadata = {
  title: "For Sushii ❤️",
  description: "Luxury Chocolate Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
