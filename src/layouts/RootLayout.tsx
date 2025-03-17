import Footer from "@/components/footer";
import FallBackLoading from "@/components/loading/fallback-loading";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<FallBackLoading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default RootLayout;
