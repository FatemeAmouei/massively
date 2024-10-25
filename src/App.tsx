import "./App.css";
import CopyRight from "./Component/copyright/CopyRight";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Tabs from "./Component/tabs/Tabs";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Tabs />
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
