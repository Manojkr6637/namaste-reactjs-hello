// const heading = React.createElement('h1', {
//     id: 'header',
//     xyz: 'abc'
// }, 'Hello React js');
// console.log(heading);

// div = "parent"
// div = "child"
// h1 = "h1"


const parent = React.createElement('div', { id: "parent" },

    React.createElement("div", { id: "child" }, [
        React.createElement('h1', {}, 'Im on h1 tag '),
        React.createElement('h2', {}, 'Im on h2 tag ') // Core react js
    ]),
    React.createElement("div", { id: "child1" }, [
        React.createElement('h1', {}, 'Im on h1 tag '),
        React.createElement('h2', {}, 'Im on h2 tag ')
    ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);