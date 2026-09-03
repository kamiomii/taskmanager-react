import useSwR from "swr";

function MainLayout() {
  const { data, error } = useSwR("/tasks");

  if (error) {
    return <div>ошибка доступа или сети</div>;
  }

  if (!data) {
    return <div>загрузка...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default MainLayout;
