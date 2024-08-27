import './Header.css';

export default function Header({name}) {
  return (
    <>
      <header className="header-container">
        <h1 className="header_name">{name}</h1>
      </header>
    </>
  );
}
