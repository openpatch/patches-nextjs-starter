import "typeface-rubik";
import "typeface-ubuntu-mono";

import { ThemeProvider } from "@openpatch/patches";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
