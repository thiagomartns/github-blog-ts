import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UserInfoProvider } from "./contexts/UserInfoContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserInfoProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </UserInfoProvider>
    </ThemeProvider>
  );
}

export default App;
