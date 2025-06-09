export default function Post() {
  return (
    <div className="w-[30vw] h-[95vh] bg-white text-black dark:bg-black dark:text-white p-4 rounded-xl shadow-xl border-4 border-dotted border-gray-400">
      <div>
        <h3 className="text-4xl underline mb-4">This is a post title</h3>
        <p className="text-base">
          This is post's content...... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor placeat aut ipsa nemo delectus id. Corporis explicabo, eaque necessitatibus a assumenda dolore saepe iure odio hic rerum ea soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam tenetur enim dolor quod sint soluta sed blanditiis laboriosam accusantium pariatur reiciendis explicabo ad minus quia iure, impedit alias nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat magni sunt aliquid velit odit voluptate molestias at, deserunt harum dolores illum, perspiciatis quibusdam! Minus, laboriosam? Voluptas excepturi vel consequuntur expedita!
        </p>
        <button className="mt-8 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded dark:bg-green-500 dark:hover:bg-green-600">
          Read More!
        </button>
      </div>
    </div>
  );
}
