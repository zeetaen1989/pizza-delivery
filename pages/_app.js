import { Provider } from "react-redux";
import { Layout } from "@components/layouts";
import store from "../redux/store";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
