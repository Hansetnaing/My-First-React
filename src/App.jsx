function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

export default function myApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {AboutPage()}
    </div>
  );
}