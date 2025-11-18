export default function ProgressBar(min, max, value) {
  return (
    <header className="progress">
      <progress min={min} max={max} value={value}></progress>
    </header>
  );
}
