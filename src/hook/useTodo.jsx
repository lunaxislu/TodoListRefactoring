import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../store/modules/todoList";

function useTodo() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const onClickIsDoneHandler = (id) => () => dispatch(isDoneTodo(id));
  const onClickDeleteHandler = (id) => () => dispatch(deleteTodo(id));
  // jotai 디라이브드 같아보임 괜춘함
  const notDoneList = todoList?.filter((todo) => !todo.isDone);
  const doneList = todoList?.filter((todo) => todo.isDone);

  return { notDoneList, doneList, onClickDeleteHandler, onClickIsDoneHandler };
}

export default useTodo;