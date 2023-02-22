import { useRef } from "react";
import "./Form.css";
function FormComponent(params) {
    const input = useRef(null);
    function AddList(event) {
        event.preventDefault();
        console.log(input.current.value);
        console.log(params);
        params.addTodoList(input.current.value);
    }
    return (<>

        <form action="" className="controlers-form">
            <div>
                <label htmlFor="">New List</label>
            </div>
            <div>
                <input type="text" ref={input} placeholder="to do" />
            </div>
            <div>
                <button type="submit" onClick={AddList}>Add</button>
            </div>
        </form>

    </>)
}

export { FormComponent }