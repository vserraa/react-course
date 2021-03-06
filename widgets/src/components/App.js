import React, {useState} from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title: "What is react?",
        content: "React is a front end framework",
    },
    {
        title: "Why use react?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use react?",
        content: "You use react by creating componnents",
    },
];

const options = [
    {
        label: "Red",
        value: "red",
    },
    {
        label: "Green",
        value: "green",
    },
    {
        label: "Blue",
        value: "blue",
    },
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="a color"
                    options={options} 
                    selected={selected} 
                    onSelectedChange={setSelected} 
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;