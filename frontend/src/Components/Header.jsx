const Header = () => {
  return (
    <header className="w-full bg-green-700 text-white shadow-md">
      <div className="px-5 py-4 flex flex-col gap-1 md:px-10">
        <h1 className="font-bold text-2xl tracking-wide">
          Expert Booking
        </h1>
        <p className="text-sm text-green-100">
          Book appointments with industry experts
        </p>
      </div>
    </header>
  );
};

export default Header;