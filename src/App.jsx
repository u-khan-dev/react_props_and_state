import Message from "./components/message/Message";
import CounterClass from "./components/counter/CounterClass";
import Counter from "./components/counter/Counter";

const App = () => {
    return (
        <>
            <Message message="Hello" />
            <Message message="Passing Props" />
            <CounterClass />
            <Counter />
        </>
    );
};

export default App;