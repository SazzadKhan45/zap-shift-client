import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logoImage} alt="Main logo" />
      <h3 className="text-secondary text-3xl font-bold -ms-2">zapShift</h3>
    </div>
  );
};

export default Logo;
