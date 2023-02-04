import "./form.css";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import swal from 'sweetalert';




const Form = (props) => {


  const changeState = ()=>{
    props.changeState();
  }
  function send() {
    swal("Good job!", "You are Added!", "success");
    console.log("clicked")
  }




  return (
    <div className="form">
      <h1 className="formHeading">Welcome Back</h1>
      <form id="">
        <input
          type="text"
          placeholder="user name"
          className="input1"
          id="input1"
        ></input>
        <br />
        <input type="password" placeholder="password" className="input2"></input>
      </form>
      <button className="forgotPassword">forgotPassword ?</button>
      <FaLock className="lockIcon" />
      <button className="login" onClick={send}>Login</button>
      <div className="logFromOther">
        <h2 className="logFromAnother">Login  via:</h2>
        <button className="logOtherButton">
          <FaFacebook />
        </button>
        <button className="logOtherButton">
          <FaGoogle />
        </button>
      </div>
      <button className="signUp" onClick={changeState}>not ragisterd yet? SignUp</button>
    </div>
  );
};

export default Form;
