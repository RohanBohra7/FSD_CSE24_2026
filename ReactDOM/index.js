const { createElement } = require("react");

const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Heading1');
const h1=React.createElement('h1', {style:{color:'brown'}},'ABES Engineering College');
const img = React.createElement('img', {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShaLQlvr-X6sJEcC8GewlKheD12x3k1fTNWwWK1Zerg&s',
  style: { height: '200px', width: '200px' }
});

//const h21=<h2>Hello World</h2> //JSX

const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);

root.render(img);