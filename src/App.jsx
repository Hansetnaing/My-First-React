import { getImageUrl } from './utils.jsx';

function Avatar({ person, size }) {

  let thumbsize ='s';
  if (size >= 90) {
    thumbsize = 'b';
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbsize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
