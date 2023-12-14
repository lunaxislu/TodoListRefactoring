import React from "react";
import * as St from "../styled-component/StTodoList";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../store/modules/todoList";
import useTodo from "../hook/useTodo";
function TodoListComponent() {
  // const todoList = useSelector((state) => state.todoList);
  // const dispatch = useDispatch();
  // const onClickIsDoneHandler = (id) => () => dispatch(isDoneTodo(id));
  // const onClickDeleteHandler = (id) => () => dispatch(deleteTodo(id));
  // const notDoneList = todoList?.filter((todo) => !todo.isDone);
  // const doneList = todoList?.filter((todo) => todo.isDone);
  const { notDoneList, doneList, onClickDeleteHandler, onClickIsDoneHandler } =
    useTodo();
  return (
    <St.Container>
      <St.Section>
        <St.Title>Working🎈</St.Title>
        <St.Div>
          {/* map을 돌리는 리스트 파트를 따로 컴포넌트로 만들고
          St.Card라는 UI도 따로 컴포넌트로 만들어보기 */}
          {notDoneList?.map((todo) => (
            <St.Card key={todo.id}>
              <St.Title>{todo.title}</St.Title>
              <St.Content>{todo.content}</St.Content>
              <St.ButtonContainer>
                <St.IsDoneButton onClick={onClickIsDoneHandler(todo.id)}>
                  {!todo.isDone && "완료"}
                </St.IsDoneButton>
                <St.DeleteButton onClick={onClickDeleteHandler(todo.id)}>
                  삭제
                </St.DeleteButton>
              </St.ButtonContainer>
            </St.Card>
          ))}
        </St.Div>
      </St.Section>
      <St.Section>
        <St.Title>Done 👍</St.Title>
        <St.Div>
          {doneList?.map((todo) => (
            <St.Card key={todo.id}>
              <St.Title>{todo.title}</St.Title>
              <St.Content>{todo.content}</St.Content>
              <St.ButtonContainer>
                <St.IsDoneButton onClick={onClickIsDoneHandler(todo.id)}>
                  {todo.isDone && "취소"}
                </St.IsDoneButton>
                <St.DeleteButton onClick={onClickDeleteHandler(todo.id)}>
                  삭제
                </St.DeleteButton>
              </St.ButtonContainer>
            </St.Card>
          ))}
        </St.Div>
      </St.Section>
    </St.Container>
  );
}

export default TodoListComponent;