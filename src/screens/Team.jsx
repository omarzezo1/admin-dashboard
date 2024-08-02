import { mockDataTeam } from "../data/mockData";
import { Shield, ShieldManager, User } from "../images/svg";

const Team = () => {
  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            Team
          </h2>
          <p
            className={`mt-1 text-base dark:text-white text-black`}
          >
            Managing the Team Members
          </p>
        </div>
        <table
          className={`w-full border border-gray-400 rounded-md mt-8 dark:text-white text-zinc-800`}
        >
          <thead>
            <tr className="flex justify-between border-b border-gray-400">
              <th className="w-fit relative text-center p-3 after:cell-border">
                ID
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Name
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Email
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Age
              </th>
              <th className="flex-1 relative text-center p-3 after:cell-border">
                Phone
              </th>
              <th className="flex-1 relative text-center p-3">Access</th>
            </tr>
          </thead>
          <tbody>
            {mockDataTeam.map((member) => (
              <tr
                key={member.id}
                className="flex justify-between p-3 border-b last-of-type:border-none border-gray-400"
              >
                <td className="w-fit  text-sm text-center p-3">{member.id}</td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-sm text-center p-3">
                  {member.name}
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-sm text-center p-3">
                  {member.email}
                </td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-sm text-center p-3">{member.age}</td>
                <td className="flex-1 overflow-hidden text-ellipsis text-nowrap  text-sm text-center p-3">
                  {member.phone}
                </td>
                <td className={`flex-1 overflow-hidden text-ellipsis text-nowrap  text-sm text-center p-3`}>
                  <div
                    className={`w-28 h-8 ml-auto flex items-center justify-center text-white rounded-sm ${
                      member.access === "admin"
                        ? "bg-blue-400"
                        : member.access === "manager"
                        ? "bg-purple-500"
                        : "bg-teal-500"
                    }`}
                  >
                    <img
                      width={20}
                      src={
                        member.access === "admin"
                          ? Shield
                          : member.access === "manager"
                          ? ShieldManager
                          : User
                      }
                      alt="admin"
                      className="mr-1"
                    />
                    <p className="capitalize text-sm font-medium">
                      {member.access}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
