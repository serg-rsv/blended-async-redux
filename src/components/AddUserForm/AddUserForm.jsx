import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/usersOperations';

export const AddUserForm = ({ closeForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
    };

    dispatch(addUser(user));

    closeForm();
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <button type="submit" onSubmit={handleSubmit}>
        Add
      </button>
    </form>
  );
};
