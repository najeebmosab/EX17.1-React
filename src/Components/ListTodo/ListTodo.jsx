import "./ListTodo.css"
function ListTodo(props) {
    function showData() {
        return (<>
            <ul>
                {
                    props.data.map(
                        (el) => {
                            return (<>
                                <li key={el.id}>
                                    {el.data}
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
