import { useState } from "react";
import { mockDataContacts } from "../data/mockData";

const Invoices = () => {
  const [checkedArray, setCheckedArray] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const handelChecked = (contactId) => {
    checkedArray.length + 1 === mockDataContacts.length
      ? setCheckAll(true)
      : setCheckAll(false);
    if (checkedArray.includes(contactId)) {
      const nonChecked = checkedArray.filter((e) => e !== contactId);
      setCheckedArray(nonChecked);
    } else {
      setCheckedArray([...checkedArray, contactId]);
    }
  };

  const handelCheckedAll = () => {
    setCheckAll(!checkAll);
    let checkedAllArray = [];
    if (checkedArray.length < mockDataContacts.length) {
      mockDataContacts.map((contact) => {
        checkedAllArray.push(contact.id);
      });
    } else {
      checkedAllArray = [];
    }
    setCheckedArray(checkedAllArray);
  };

  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Invoices
          </h2>
          <p
            className={`mt-1 text-base dark:text-white text-black`}
          >
            List of Invoice Balances
          </p>
        </div>
        <table
          className={`w-full border border-gray-400 rounded-md mt-8 dark:text-white text-zinc-800`}
        >
          <thead>
            <tr className="flex justify-around border-b border-gray-400">
              <th className="w-[80px] flex items-center relative p-3 text-center after:cell-border">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="check"
                    checked={checkAll ? true : false}
                    className={`size-4 border mr-2 border-gray-400 rounded-sm cursor-pointer dark:accent-zinc-500 accent-blue-500 ${checkAll ? "appearance-auto" : "appearance-none"}`}
                    onChange={handelCheckedAll}
                  />
                  <label htmlFor="check">ID</label>
                </div>
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
                <td className="w-[80px]  flex items-center text-sm text-center p-3 relative overflow-hidden text-ellipsis text-nowrap">
                  <div className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      id={`check-${contact.id}`}
                      checked={checkedArray.includes(contact.id) ? true : false}
                      className={`size-4 border mr-2 border-gray-400 cursor-pointer rounded-sm dark:accent-zinc-500 accent-blue-500 ${
                        checkedArray.includes(contact.id)
                          ? "appearance-auto"
                          : "appearance-none"
                      }`}
                      onChange={() => handelChecked(contact.id)}
                    />
                    <label htmlFor={`check-${contact.id}`}>{contact.id}</label>
                  </div>
                </td>
                <td className="w-[100px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.registrarId}
                </td>
                <td className="flex-1 text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                  {contact.name}
                </td>
                <td className="w-[80px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
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
                <td className="w-[80px] text-sm text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
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

export default Invoices;
