import type { AppProps } from "next/app";
import "../styles/global.css";
import { StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://localhost:5000/api/v1/login/google`;

    window.open(googleLoginUrl, "_blank", "width=500,height=600");
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} handleGoogleLogin={handleGoogleLogin} />;
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
