import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  // supports nested fields using dot-notation in input `name` (e.g., "address.city", "company.name")
  const setNestedValue = (obj: any, path: string[], value: string) => {
    const last = path.pop() as string;
    const parent = path.reduce((acc, key) => (acc[key] ??= {}), obj);
    parent[last] = value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // e.g., "address.city"
    const draft: UserData = JSON.parse(JSON.stringify(user));
    setNestedValue(draft, name.split("."), value);
    setUser(draft);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Leanne Graham"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Username</label>
              <input
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Bret"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sincere@april.biz"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1-770-736-8031 x56442"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Website</label>
              <input
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="hildegard.org"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-700 mb-1">City</label>
                <input
                  name="address.city"
                  value={user.address.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Gwenborough"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Zipcode</label>
                <input
                  name="address.zipcode"
                  value={user.address.zipcode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="92998-3874"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Street</label>
                <input
                  name="address.street"
                  value={user.address.street}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Kulas Light"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Suite</label>
                <input
                  name="address.suite"
                  value={user.address.suite}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Apt. 556"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Geo Lat</label>
                <input
                  name="address.geo.lat"
                  value={user.address.geo.lat}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="-37.3159"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Geo Lng</label>
                <input
                  name="address.geo.lng"
                  value={user.address.geo.lng}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="81.1496"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Company</label>
              <input
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Romaguera-Crona"
              />
              <input
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Multi-layered client-server neural-net"
              />
              <input
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="harness real-time e-markets"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
