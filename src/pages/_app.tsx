import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            onError: (e) => {
                console.log(e)
            },
        },
        mutations: {
            onError: (e) => {
                console.log(e)
            },
        },
    },
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </QueryClientProvider>
    );
}