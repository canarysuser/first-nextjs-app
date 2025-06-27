
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";
import "daisyui";

export default function RootLayout({
  children, teams
}: Readonly<{
  children: React.ReactNode,
  teams: React.ReactNode
}>) {

  

  return (

    <html lang="en" data-theme="business">
      <body
        className={'antialiased mx-5'}
      >
        <SiteHeader/>
        <main className="mb-36 flex">
          
         
          <br/>
          <div className="flex-none h-100 w-40">
            {teams}
          </div>
          <div className="flex-grow">
          {children}
          </div>
           

        </main>
        <SiteFooter/>
      </body>
    </html>
  );
}
