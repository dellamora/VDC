import Navbar from "../../Modules/Navbar";

const BaseLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BaseLayout;
