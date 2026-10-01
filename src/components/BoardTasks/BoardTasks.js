import BoardTasksItem from "./BoardTasksItem";

function BoardTasks({ tasks }) {
  return (
    <div class="board__tasks">
      {tasks.map((task) => {
        return <BoardTasksItem task={task} />;
      })}
    </div>
  );
}

export default BoardTasks;
