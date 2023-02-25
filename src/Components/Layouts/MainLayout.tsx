import React from "react";

import BackgroundImage from "@/assets/images/Background.svg";
import LogoImage from "@/assets/images/Logo.png";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div
    className="flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url('${BackgroundImage}')` }}
  >
    {children}
    <img
      src={`${LogoImage}`}
      alt="Logo"
      className="fixed bottom-0 right-0 w-40 rounded-md bg-white p-4"
    />
  </div>
);

export default React.memo(MainLayout);
