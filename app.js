const heading1 = React.createElement("h1",{
    id:"head1",
    className:"ch1"
    },"heading 1 from React");

const heading2 = React.createElement("h2",{
        id:"head2",
        className:"clh2"
    },"heading 2 from React");
       
const divContainer = React.createElement("div",{
        id:"contdiv"
        },[heading1,heading2]);

        
console.log(heading1);
console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(divContainer);