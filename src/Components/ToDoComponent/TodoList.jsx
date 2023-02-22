import { useState, useEffect } from "react";
import "./TodoList.css";
import { FormComponent } from "../FormComponent/Form";
import { ListTodo } from "../ListTodo/ListTodo";

function TodoList() {
    const [dataList, setData] = useState([]);
    useEffect(() => {
        // debugger
        getItem();
    }, [])

    function getItem() {
        const localStoregeList = localStorage.getItem("todoList");
        if (localStoregeList != null) {
            console.log(localStoregeList);
            const data = JSON.parse(localStorage.getItem("todoList"));
            setData([...data]);
        }
    }

    function AddTodoListHandler(data) {
        localStorage.setItem("todoList", JSON.stringify([...dataList, { id: dataList.length + 1, data: data }]));
        getItem();
    }

    console.log(dataList);
    return (

        <div className="containerForm">
            <FormComponent addTodoList={AddTodoListHandler}></FormComponent>
            <ListTodo data={dataList}></ListTodo>
        </div>

    );
}
export { TodoList };