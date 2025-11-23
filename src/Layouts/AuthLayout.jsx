import MyContainer from "../Components/MyContainer";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div>
      <MyContainer>
        <header className="py-4">
          <Logo />
        </header>
        <main>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
            <div className="md:flex-1">
              <Outlet />
            </div>

            <div className="md:flex-1">
              <img src={AuthImage} alt="" />
            </div>
          </div>
        </main>
      </MyContainer>
    </div>
  );
};

export default AuthLayout;
