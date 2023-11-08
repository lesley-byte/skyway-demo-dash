function Header({ children }) {
  return (
    <header>
      <h1 className="text-3xl font-bold underline" >Header</h1>
      {children} 
    </header>
  );
}

export default Header;