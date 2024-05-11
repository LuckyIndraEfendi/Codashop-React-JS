import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<>Loading Data...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default RootLayout;
