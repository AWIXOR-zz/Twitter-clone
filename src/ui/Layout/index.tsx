import { useTheme } from "providers/ThemeProvider";
import { FC, Fragment } from "react";
import GlobalStyle from "ui/GlobalStyles";

const Layout: FC = ({ children }) => {
  const { theme } = useTheme();
  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      {children}
    </Fragment>
  );
};

export default Layout;
