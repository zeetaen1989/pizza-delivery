import "mapbox-gl/dist/mapbox-gl.css";
import { Provider } from "react-redux";
import { Layout } from "@components/layouts";
import { AuthProvider } from "context/AuthProvider";
import { store } from "../redux/store";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
