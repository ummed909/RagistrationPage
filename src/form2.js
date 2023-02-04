import "./form2.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import swal from 'sweetalert';


const Form2 = (props) => {
  const changeState = () => {
    props.changeState();
  };


  function send() {
    swal("Good job!", "You are Added!", "success");
    console.log("clicked")
  }

  function submitHandler(event){
    event.preventDefault()
  }

  return (
    <div className="form2">
      <h1 className="formHeading2">SignUp</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder=" Enter userName"
          className="input1"
          id="input2"
        ></input>
        <br />
        <input type="text" placeholder="Email" className="input2"></input>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          className="input2_2"
        ></input>
      </form>
      <button className="login2" onClick={send}>
        Submit
      </button>
      <div className="logFromOther2">
        <h2 className="logFromAnother2">SignUp via:</h2>
        <button className="logOtherButton2">
          <FaFacebook />
        </button>
        <button className="logOtherButton2">
          <FaGoogle />
        </button>
      </div>
      <button className="signUp2" onClick={changeState}>
        back to:Login
      </button>
    </div>
  );
};

export default Form2;
