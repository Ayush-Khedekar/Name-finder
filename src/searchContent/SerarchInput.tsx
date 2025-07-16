import React from "react";

export interface names {
  id: number;
  name: string;
}

export interface namesProp {
  inputVal: names[];
}
export default function SerarchInput({ inputVal }: namesProp) {
  const [search, setSearch] = React.useState("");

  const filterData = inputVal.filter((item) =>
    item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  );
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">
        🍳 Search for a Name
      </h1>

      <input
        type="text"
        placeholder="Type a name here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />

      <div className="mt-6 w-full max-w-md bg-white rounded-md shadow p-4">
        {filterData.length > 0 ? (
          <ul className="space-y-2">
            {filterData.map((item) => (
              <li
                key={item.id}
                className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded transition-all"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No matching names found.</p>
        )}
      </div>
    </div>
  );
}
