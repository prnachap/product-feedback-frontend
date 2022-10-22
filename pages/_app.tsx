import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://localhost:5000/api/v1/login/google`;

    window.open(googleLoginUrl, "_blank", "width=500,height=600");
  };

  return <Component {...pageProps} handleGoogleLogin={handleGoogleLogin} />;
}

export default MyApp;
