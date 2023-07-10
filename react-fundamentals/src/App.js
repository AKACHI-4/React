import logo from "./logo.svg";

/* Style */
import "./App.css";
// import styles from './appStyles.module.css'
// import './appStyles.css'

/* Components */
// import FRParentInput from "./Components/FRParentInput";
// import FocusInput from './Components/FocusInput';
import RefsDemo from "./Components/RefsDemo";
// import ParentComp from './Components/ParentComp';
// import Table from './Components/Table';
// import FragmentDemo from './Components/FragmentDemo';
// import LifecycleA from './Components/LifecycleA';
// import FormHandling from './Components/FormHandling';
// import InlineStyle from './Components/InlineStyle';
// import StyleSheet from './Components/StyleSheet';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
// import EventBind from './Components/EventBind';
// import ClassClick from './Components/ClassClick';
// import FunctionClick from './Components/FunctionClick';
// import Counter from './Components/Counter';
// import Greet  from './Components/Greet';
// import Welcome from './Components/Welcome';
// import JSX from './Components/JSX';
// import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <h1>Hello React</h1> */}

        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <JSX /> */}

        {/* Self Closing tab bcoz There are no components inside component Greet */}
        {/* <Greet name="TypeScript" Area="Frontend" >
          <p>This is a children props</p>        
        </Greet> */}
        {/* <Greet name="Solidity" Area="Unknown">
          <button>Action</button>
          <p>I am children prop of Solidity</p>
        </Greet> */}
        {/* <Greet name="Express" Area="Backend" />  */}

        {/* props with Class Componentsd  */}

        {/* Irrespective of component type the properties are mentioned as attribute during the component invocation */}

        {/* <Welcome name="TypeScript" Area="Frontend" /> */}
        {/* <Welcome name="Solidity" Area="Unknown" /> */}
        {/* <Welcome name="Express" Area="Backend" />  */}

        {/* <Message /> */}

        {/* <Counter /> */}

        {/* <FunctionClick /> */}

        {/* <ClassClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}

        {/* <StyleSheet primary={true}/> */}

        {/* <InlineStyle /> */}

        {/* <h3 className='error'>Error</h3> */}
        {/* <h3 className={styles.success}>Success</h3>  */}

        {/* 
          Advantage of using CSS modules is 
          - The classes are locally scoped by default 
          - CSS modules in other hand can not be used in children component coz referencing class-name using a variable
          - Soo you can't accidentally use a class that is defined for some other component 
        */}

        {/* <FormHandling /> */}

        {/* <LifecycleA /> */}

        {/* <FragmentDemo /> */}

        {/* <Table /> */}

        {/* <ParentComp /> */}

        <RefsDemo />

        {/* <FocusInput /> */}

        {/* <FRParentInput /> */}
      </header>
    </div>
  );
}

export default App;
