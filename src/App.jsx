import MainPage from "./components/MainPage";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[17vw] fixed">
          <SideMenu />
        </div>
        <div className="w-[83vw] ml-[17vw]">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
