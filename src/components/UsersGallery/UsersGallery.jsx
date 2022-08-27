import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/usersSelectors';
import { deleteUser } from '../../redux/usersOperations';

export const UsersGallery = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <ul>
      {users &&
        users.map(({ id, name, email }) => {
          return (
            <li key={id}>
              <p>User name: {name}</p>
              <p>Email: {email}</p>
              <button type="button" onClick={() => handleClick(id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
