// TODO: create a component that displays a single bakery item
export function BakeryItem(props,addCounter){
    const handleClick = () => {
        {props.updateCart((prevCount) => prevCount + props.price)}
        {props.items.push([props.price, props.name])}
    }

    return(
        
        //component
        <div class = "Bakery Item">
         
        <h>{props.name}</h>
        <p>{props.description}</p>
        <p>{props.price}</p>
       
         

           <img src = {props.image}/>
           <button onClick = {handleClick} class = "button"> Add to cart!</button>

        </div>
    );
}
