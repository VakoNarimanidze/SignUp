import retriangle from '../Components/images/Rectangle 8.png'
import retriangle2 from '../Components/images/Rectangle 8.png'
import "./style.scss"


export default function SignUp(props) {
     const { email, setEmail, password, setPassword, setClick } = props;

    return (
        <div className="container">
            <div className="background">
                <img className='firstImg' src={retriangle} alt="" />
                <img className='secondImg' src={retriangle2} alt="" />
            </div>
            <div className="innerContainer">
                <div className="textArea">
                    <h1>Create An Account</h1>
                    <h5>Create an account to enjoy all the services without any ads for free!</h5>
                </div>
                <div className="formContainer">
                    <input
                         type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                    
                    <input
                        type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button onClick={setClick}>Create Account</button>
                 <div className="signintext">
              <p>Already have a account? <a href="#">Sign In</a></p>  
            </div>
            </div>
    
        </div>
    )
}