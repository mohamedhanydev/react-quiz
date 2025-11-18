export default function Start(onClick) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>15 questions to test your React mastery</h3>
      <button class="btn btn-ui" onClick={() => onClick({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}
