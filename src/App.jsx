import { use } from "react";

const user = {
  name: "Roronoa Zoro",
  imageUrl: "/luhpring.jpg",
  imageSize: 90,
};

export default function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={
          {
            width: user.imageSize,
            height: user.imageSize
          }
        }
        />
    </>
  );
}