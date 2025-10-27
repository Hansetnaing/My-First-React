function myButton() {
  return (
    <button>I'm a Button</button>
  );
}

export default function myApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {myButton()}
    </div>
  );
}