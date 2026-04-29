import stopimg from'../../component/login/assets/welcome.jpg';
import'./welcome.css';
function Wel({onStart}){
    const Gonext=()=>{
        alert("Welcome to Signup page ");
        onStart();
        
    }
    return(
        <div className="wel-text">
            <div className="wel-image">
            <h1>Welcome To Aura Wear</h1>
            <img src={stopimg} alt="welcome"/>
            <h2>let's begin shopping</h2>
            <button onClick={Gonext}>continue</button>
</div>
</div>

        
    );
}export default Wel;