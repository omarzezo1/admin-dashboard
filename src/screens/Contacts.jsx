import { mockDataContacts } from "../data/mockData";

const Contacts = () => {
  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Contacts
          </h2>
          <p
            className={`text-nowrap mt-1 text-base dark:text-white text-black`}
          >
            List of Contacts for Future Reference
          </p>
        </div>
        <table
          className={`w-full border border-gray-400 rounded-md mt-8 dark:text-white text-zinc-800`}
        >
          <thead>
            <tr className="flex justify-around border-b border-gray-400">
              <th className="w-[50px] relative p-3 text-center after:cell-border">
                ID
              </th>
              <th className="w-[100px] relative py-3 px-1 after:cell-border">
                Register ID
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Name
              </th>
              <th className="w-[100px] relative text-center p-3 after:cell-border">
                Age
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Phone Number
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Email
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Address
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                City
              </th>
              <th className="w-[100px] relative text-center p-3">ZipCode</th>
            </tr>
          </thead>
          <tbody>
            {mockDataContacts.map((contact) => (
              <tr
                key={contact.id}
                className="flex justify-around py-3  border-b last-of-type:border-none border-gray-400"
              >
                <td className="w-[50px]  text-sm text-center p-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.id}
                </td>
                <td className="w-[100px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.registrarId}
                </td>
                <td className="flex-1 text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.name}
                </td>
                <td className="w-[100px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.age}
                </td>
                <td className="flex-1 text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.phone}
                </td>
                <td className="flex-1 text-sm text-center py-3 px-2 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.email}
                </td>
                <td className="flex-1 text-sm text-center py-3 px-2 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.address}
                </td>
                <td className="flex-1 text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.city}
                </td>
                <td className="w-[100px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.zipCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
