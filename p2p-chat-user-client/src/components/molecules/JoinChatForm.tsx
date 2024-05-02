import { useState } from "react";

type Props = {
  handleSubmit: (userName: string) => void;
};

const JoinChatForm = ({ handleSubmit }: Props) => {
  const [userName, setUsername] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <form className="max-w-sm mx-auto rounded border-slate-800">
      <p className="text-4xl">Welcome to P2P Chat!</p>
      <div className="mb-5">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => handleSubmit(userName)}
      >
        Join Chat
      </button>
    </form>
  );
};

export default JoinChatForm;
