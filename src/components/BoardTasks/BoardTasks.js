import BoardTasksForm from "./BoardTasksForm";
import BoardTasksItem from "./BoardTasksItem";

function BoardTasks({ tasks }) {
  return (
    <div class="board__tasks">
      <BoardTasksForm />
      {tasks.map((task) => {
        return <BoardTasksItem task={task} />;
      })}
    </div>
  );
}

export default BoardTasks;
