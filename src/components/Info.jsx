export default function Info({ children, curr, max }) {
  return (
    <p>
      {children}
      <strong>{curr}</strong>/{max}
    </p>
  );
}
