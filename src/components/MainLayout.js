import useSwR from "swr";
import SortList from "./SortList";
import BoardTasks from "./BoardTasks";
import MainFilter from "./MainFilter";
import LoadMore from "./LoadMore";
import MainControl from "./MainControl";
import SvgSprite from "./SvgSprite";

function MainLayout() {
  const { data, error } = useSwR("/tasks");

  if (error) {
    return <div>ошибка доступа или сети</div>;
  }

  if (!data) {
    return <div>загрузка...</div>;
  }

  return (
    <>
      <SvgSprite />

      <main class="main">
        <MainControl />

        <MainFilter />

        <section class="board container">
          <SortList />

          <BoardTasks tasks={data} />

          <LoadMore />
        </section>
      </main>
    </>
  );
}

export default MainLayout;
