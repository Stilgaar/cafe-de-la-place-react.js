import './stock.css';

function Stock(props) {

return (
<div>        
    <h2>Ce qui reste en Stock</h2>
    <div> {props.stock} </div>
</div>
);   

}

export default Stock;