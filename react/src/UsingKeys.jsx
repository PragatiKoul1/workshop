import data from "./data.js";
function UsingKeys(){
    return (
        <ul>
            {data.map((name,index)=>{return <li key={index}>{name}</li>})}
        </ul>
    );
}
export default UsingKeys;