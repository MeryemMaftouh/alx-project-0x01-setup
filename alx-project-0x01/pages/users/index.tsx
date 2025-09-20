import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

type UsersPageProps = { users: UserProps[] };

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addedUser, setAddedUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setAddedUser({ ...newUser, id: users.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        {/* Newly added user preview */}
        {addedUser && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <UserCard key={"new"} {...(addedUser as UserProps)} id={addedUser.id ?? 0} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {users?.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await response.json();

  return {
    props: { users },
  };
}

export default Users;
