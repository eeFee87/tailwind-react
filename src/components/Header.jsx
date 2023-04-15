export const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-4 flex flex-col items-center">
      <h1 className="flex text-4xl font-bold items-center gap-2 mb-4">
        <img className="w-16" src="/logo.svg" />
        keyboard
      </h1>

      <nav>
        <ul className="flex gap-2 text-2xl">
          <li>services</li>
          <li className="border-b-2 border-white">team</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
};
