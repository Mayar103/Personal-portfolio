import MainPage from "./components/MainPage";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <div className="flex">
        <div>
          <SideMenu />
        </div>
        <div>
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
