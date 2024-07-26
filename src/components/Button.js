export default function Button({value, handleClick}){
    let buttonClass;
    if(['+', '-', '/', '*', '.'].includes(value)){
        buttonClass = 'operator';
    } else{
        buttonClass = 'number';
    }
    return (
        <>
            <button
            className={`box ${buttonClass}`} 
            onClick={() => handleClick(value)}
            >{value}</button>
        </>
    )
}