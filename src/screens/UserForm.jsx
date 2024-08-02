import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    whatch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const formSubmit = (data) => console.log(data);

  const selectOptions = ["User", "Manager", "Admin"]

  return (
    <div className="min-h-screen content">
      <div className="w-full flex flex-col">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold uppercase tracking-wider">
            CREATE USER
          </h2>
          <p className={`mt-1 text-base dark:text-white text-black`}>
            Create a New User Profile
          </p>
        </div>
        <form
          className="flex flex-col gap-6 w-full my-8"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="flex max-lg:flex-col max-lg:gap-6 gap-2">
            <div
              className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200 rounded-tl-md rounded-tr-md`}
            >
              <label
                className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600"
                }`}
              >
                First Name
              </label>
              <input
                className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
                } pl-2 pt-5 border-b border-gray-300 ${
                  errors.firstName
                    ? "border-red-600"
                    : "hover:border-slate-200 focus:border-blue-400"
                }`}
                type="text"
                {...register("firstName", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "First name must be at least 3 characters",
                  },
                })}
              />
              <p className="mt-1 text-red-600 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div
              className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200 rounded-tl-md rounded-tr-md`}
            >
              <label
                className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600`}
              >
                Last Name
              </label>
              <input
                className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
                } pl-2 pt-5 border-b border-gray-300 ${
                  errors.lastName
                    ? "border-red-600"
                    : "hover:border-slate-200 focus:border-blue-400"
                }`}
                type="text"
                {...register("lastName", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Last name must be at least 3 characters",
                  },
                })}
              />
              <p className="mt-1 text-red-600 text-sm">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200 rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600`}
            >
              Email
            </label>
            <input
              className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
              } pl-2 pt-5 border-b border-gray-300 ${
                errors.email
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p className="mt-1 text-red-600 text-sm">{errors.email?.message}</p>
          </div>
          <div
            className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200 rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600`}
            >
              Phone Number
            </label>
            <input
              className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
              } pl-2 pt-5 border-b border-gray-300 ${
                errors.phoneNumber
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="text"
              {...register("phoneNumber", {
                required: "This field is required",
                pattern: {
                  value: /^01[0125][0-9]{8}$/gm,
                  message: "invalid Phone Number",
                },
              })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div
            className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200
            rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600`}
            >
              Address 1
            </label>
            <input
              className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
              pl-2 pt-5 border-b border-gray-300 ${
                errors.address1
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="text"
              {...register("address1", { required: "This field is required" })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.address1?.message}
            </p>
          </div>
          <div
            className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200
            rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`absolute left-2 top-2 z-10 text-sm dark:text-slate-200 text-zinc-600`}
            >
              Address 2
            </label>
            <input
              className={`size-full bg-transparent outline-none relative dark:text-white text-zinc-800
              pl-2 pt-5 border-b border-gray-300 ${
                errors.address2
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              }`}
              type="text"
              {...register("address2", { required: "This field is required" })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.address2?.message}
            </p>
          </div>
          <div
            className={`w-full h-14 relative dark:bg-zinc-800 bg-slate-200
            rounded-tl-md rounded-tr-md`}
          >
            <label
              className={`w-full h-fit absolute left-2 top-2 text-sm dark:text-blue-300 text-blue-600`}
            >
              Role
            </label>
            <select
              className={`size-full appearance-none z-10 bg-transparent border-b border-gray-300 ${
                errors.role
                  ? "border-red-600"
                  : "hover:border-slate-200 focus:border-blue-400"
              } outline-none relative pl-2 pt-5 text-sm dark:text-white text-zinc-800`}
              {...register("role", { required: "This field is required" })}
            >
              {selectOptions.map((option) => (
                <option
                  key={option}
                  className={`dark:bg-zinc-800 dark:text-white
                  bg-white text-zinc-800`}
                  value="user"
                >
                  {option}
                </option>
              ))}
            </select>
            <span
              className={`absolute dark:text-white text-zinc-800 text-xl right-3 top-1/2 translate-y-[-50%]`}
            >
              &#9662;
            </span>
          </div>
          <p className="mt-1 text-red-600 text-sm">{errors.role?.message}</p>
          <div
            className={`w-40 h-10 flex items-center justify-center ml-auto dark:bg-zinc-800 bg-slate-200`}
          >
            <input
              className={`size-full bg-blue-400 outline-none relative text-zinc-900 text-sm font-medium rounded-md hover:bg-blue-500 duration-300 cursor-pointer`}
              type="submit"
              value="Create New User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
