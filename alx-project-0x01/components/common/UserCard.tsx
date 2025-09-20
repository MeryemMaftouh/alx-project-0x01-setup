import { UserProps } from "@/interfaces";
import Link from "next/link";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          ID: {id}
        </span>
      </div>

      <p className="text-gray-600 mb-1">@{username}</p>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
        <a className="hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="hover:underline" href={`tel:${phone}`}>
          {phone}
        </a>
        <a
          className="hover:underline"
          href={`https://${website}`}
          target="_blank"
          rel="noreferrer"
        >
          {website}
        </a>
        <span>
          {address.city}, {address.street} {address.suite}
        </span>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Company:</span>{" "}
          {company.name}
        </p>
        <p className="text-sm text-gray-500 italic">“{company.catchPhrase}”</p>
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href={`/users`}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-sm"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
