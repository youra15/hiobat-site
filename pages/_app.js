import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function App({ Component, pageProps }){
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <div className="container py-10">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}