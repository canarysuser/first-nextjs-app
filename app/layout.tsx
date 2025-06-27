
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";
import "daisyui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (

    <html lang="en" data-theme="business">
      <body
        className={'antialiased mx-5'}
      >
        <SiteHeader/>
        <main className="mb-20">
        {children}
        </main>
        <SiteFooter/>
      </body>
    </html>
  );
}
