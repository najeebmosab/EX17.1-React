import { useState, useEffect } from "react";
import "./TodoList.css";
import { FormComponent } from "../FormComponent/Form";
import { ListTodo } from "../ListTodo/ListTodo";

function TodoList() {
    const [dataList, setData] = useState([]);
    const [updateItem, setUpdateItem] = useState("");
    useEffect(() => {
        // debugger
        getItem();
    }, [])
    function updateItemHandler(data) {
        setUpdateItem(data);
    }
    function getItem() {
        const localStoregeList = localStorage.getItem("todoList");
        if (localStoregeList != null) {
            console.log(localStoregeList);
            const data = JSON.parse(localStoregeList);
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
            <FormComponent updateItem={updateItemHandler} addTodoList={AddTodoListHandler}></FormComponent>
            <ListTodo updateItem={updateItem} getItem={getItem} data={dataList}></ListTodo>
        </div>

    );
}
export { TodoList };