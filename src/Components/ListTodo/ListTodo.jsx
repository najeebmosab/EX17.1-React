import "./ListTodo.css";
// import '@fortawesome/fontawesome-free/css/all.css';

function ListTodo(props) {
    function deleteItem(id) {
        const localStoregeList = localStorage.getItem("todoList");
        console.log(localStoregeList);
        const data = JSON.parse(localStoregeList);
        const newItems = data.filter((item) => item.id !== id);
        console.log(newItems);
        localStorage.setItem("todoList", JSON.stringify(newItems));
        props.getItem();
    }

    function updateItem(id) {
        const localStoregeList = localStorage.getItem("todoList");
        console.log(localStoregeList);
        const data = JSON.parse(localStoregeList);
        const update = data.IndexOf((item) => item.id === id);
        console.log(update);
        data[update].data = props.updateItem;
        console.log(update);

        // const newItems = data.filter((item) => item.id !== id);
        // console.log(newItems);
        // newItems.push(update)
        // console.log(newItems);

        localStorage.setItem("todoList", JSON.stringify(data));
        props.getItem();

    }
    function showData() {
        return (<>
            <ul>
                {
                    props.data.map(
                        (el) => {
                            return (<>
                                <li key={el.id}>
                                    <div className="listItem">
                                        <button onClick={() => {
                                            updateItem(el.id);
                                        }}>update</button>
                                        <h2>
                                            {el.data}
                                        </h2>
                                        <button onClick={() => {
                                            deleteItem(el.id)
                                        }}>delete</button>

                                    </div>
                                </li>
                            </>)
                        }
                    )
                }
            </ul></>
        )
    }
    return (<>
        {showData()}
    </>)
}
export { ListTodo };
