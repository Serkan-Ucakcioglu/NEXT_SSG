import Link from "next/link";
function Card({ user }: { user: User }) {
  return (
    <>
      <div className="w-[300px] bg-white h-[250px] overflow-auto  hover:shadow-xl  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5 flex flex-col">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.phone}
          </p>{" "}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.company?.name}
          </p>
          <Link
            href={`/userpost/${user?.id}`}
            className="mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
