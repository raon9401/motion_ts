export const Header = () => {
  return (
    <nav className="w-full h-12 px-5 flex justify-between items-center shadow-lg absolute bg-white">
      <section className="w-fit">
        <span className="font-dancing text-xl font-semibold flex items-center">
          Motion Project
        </span>
      </section>
      <section className="w-fit ">
        {/* 아이콘으로 대체 */}
        <span className="flex items-center font-semibold">깃헙</span>
      </section>
    </nav>
  );
};
