
import "./globals.css";
import SiteNavbar from "@/components/SiteNavBar";
import SiteFooter from "@/components/SiteFooter";
import NextTopLoader from 'nextjs-toploader';

export async function  generateMetadata(){
  //SEO Data Fetch
  return{
    title:"Home"
  }
} 
export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <NextTopLoader color="2669669" height={3} speed={200}/> 
        <SiteNavbar/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
