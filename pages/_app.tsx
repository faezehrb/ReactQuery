
import ReactQueryProvider from '../components/reactqueryprovider';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ReactQueryProvider>
            <Component {...pageProps} />
        </ReactQueryProvider>
    );
}

export default MyApp;