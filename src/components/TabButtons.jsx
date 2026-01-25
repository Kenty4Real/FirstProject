export default function TabButton({children}){
    function onClick(){
        console.log(`${children} button clicked!`);
    }
    return(
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}