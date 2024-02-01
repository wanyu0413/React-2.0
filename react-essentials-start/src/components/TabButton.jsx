export default function TabButton({ children }) {
  function handleClick() {
    console.log('Heyyyy')
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
