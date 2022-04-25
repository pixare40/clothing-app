import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

//import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/sign-in/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./components/routes/home/home.component"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
