import UserCard from "../molecules/UserCard";

type User = {
  username: string;
  id: string;
};

type Props = {
  selectUser: (user: User) => void;
  users: User[];
};

const UserList = ({ users, selectUser }: Props) => {
  return (
    <div className="flex flex-col overflow-y-auto w-auto">
      {users.length !== 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            userName={user.username}
            selectUser={selectUser}
            id={user.id}
          />
        ))
      ) : (
        <p className="text-lg">No chats available</p>
      )}
    </div>
  );
};

export default UserList;
