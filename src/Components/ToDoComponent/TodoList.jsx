import { useState, useEffect, useReducer } from "react";
import "./TodoList.css";
import { FormComponent } from "../FormComponent/Form";
import { ListTodo } from "../ListTodo/ListTodo";

function TodoList() {

    function reducer(state, action) {
        console.log(action);
        switch (action.type) {
            case "add":
                localStorage.setItem("todoListRender", JSON.stringify([...state, { id: state.length + 1, data: action.val }]));
                console.log(state);
                return [...state, { id: state.length + 1, data: action.val }]
        }
    }


    const [dataList, setData] = useState([]);
    const [state, dispatch] = useReducer(reducer, []);
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
            const data = JSON.parse(localStoregeList);
            setData([...data]);
        }
        // const localStoregeListReducer = localStorage.getItem("dataListReducer");
        // if (localStoregeListReducer != null) {
        //     console.log(localStoregeListReducer);
        //     const data = JSON.parse(localStoregeListReducer);
        //     setDataReducer({type:"add",val:data})
        // }
    }

    function AddTodoListHandler(data) {

        dispatch({ type: "add", val: data })

        localStorage.setItem("todoList", JSON.stringify([...dataList, { id: dataList.length + 1, data: data }]));
        getItem();
    }

 
    return (

        <div className="containerForm">
            <FormComponent updateItem={updateItemHandler} addTodoList={AddTodoListHandler}></FormComponent>
            <ListTodo updateItem={updateItem} getItem={getItem} data={dataList}></ListTodo>
        </div>

    );
}
export { TodoList };