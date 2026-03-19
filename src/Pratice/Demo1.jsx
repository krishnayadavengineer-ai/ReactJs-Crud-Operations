import { useReducer } from "react";
const instate = { count: 0 };

const reducre = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }; 

        case "decrement":
            return { count: state.count - 1 };


        default:
            return state;
    }

}

function Demo1() {

    const [state, dispatch] = useReducer(reducre, instate);

    return (
        <>
            <p>{state.count}</p>

            <button onClick={() => dispatch({ type: "increment" })}>Increment </button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </>
    )
}
export default Demo1;