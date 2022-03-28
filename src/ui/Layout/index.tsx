import { FC, Fragment } from "react";
import GlobalStyle from "ui/GlobalStyles";

const Layout: FC = ({ children }) => {

  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
};

export default Layout;
