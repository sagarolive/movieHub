import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const queryClient = new QueryClient();
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <div className=" h-screen">
      <Toaster position="top-right" />

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
