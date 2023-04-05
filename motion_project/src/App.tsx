import { useSelector } from "react-redux";
import { MainContents } from "./components/MainContents/MainContents";
import { InputModal } from "./components/Modal/InputModal";
import { Nav } from "./components/Nav/Nav";
import { RootState } from "./store";

export const App = () => {
  const modalOpen = useSelector((state: RootState) => {
    console.log(state);
    return state.modal.value;
  });
  return (
    <main className="base_layout relative">
      <Nav />
      <section className="w-full flex justify-center">
        <MainContents />
        {modalOpen && <InputModal />}
      </section>
    </main>
  );
};
