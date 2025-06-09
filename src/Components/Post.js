export default function Post() {
  return (
    <div className="w-[30vw] h-[95vh] bg-white text-black dark:bg-black dark:text-white p-4 rounded-xl shadow-xl border-4 border-dotted border-gray-400">
      <div>
        <h3 className="text-4xl underline mb-4">This is a post title</h3>
        <p className="text-base">
          Text Text Text Text
        </p>
        <button className="cursor-pointer mt-8 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded dark:bg-green-500 dark:hover:bg-green-600">
          Read More!
        </button>
      </div>
    </div>
  );
}
