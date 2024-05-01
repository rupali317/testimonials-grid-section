import { TestimonialCard } from "./component/TestimonialCard/TestimonialCard";
import * as GlobalStyles from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <TestimonialCard />
    </>
  );
}

export default App;
