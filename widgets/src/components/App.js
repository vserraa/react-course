import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

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

const App = () => {
    return (
        <div>
            <Accordion items={items} />
            <Search />
        </div>
    );
};

export default App;