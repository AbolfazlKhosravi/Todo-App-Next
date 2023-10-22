import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return ( 
        <main className=" min-h-screen flex flex-col items-center justify-start">
            <Header/>
            <div className="w-full flex-1 2xl:container mx-auto">
            {children}
            </div>
            <Footer/>
        </main>
     );
}
 
export default Layout;