import RootLayout from "./components/layout/RootLayout";
import Brand from "./components/Brand/Brand";
import AboutUs from "./components/About-us/About-us";
import Feature from "./components/Feature/Feature";
import Trustworthy from "./components/Trusthworthy/Trustworthy";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import GetTheApp from "./components/GetTheApp/GetTheApp";
import Footer from "./components/Footer/Footer";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <div>
            <RootLayout />
            <Brand />
            <AboutUs />
            <Feature />
            <Trustworthy />
            <Service />
            <Testimonial />
            <GetTheApp />
            <Footer />  
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
