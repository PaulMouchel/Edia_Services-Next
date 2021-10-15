import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </div>
  );
}

export default MyApp
