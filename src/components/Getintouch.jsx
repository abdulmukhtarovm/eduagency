import React from 'react'
// import { getText } from "../locales";
import InputMask from "react-input-mask";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const Getintouch = () => {

    // const [form1] = useState(false);
    // const [form2] = useState(false);
    // const [form3] = useState(false);
    // const [form4] = useState(false);
    // const TOKEN = "6595677829:AAGkeV8LwYLNGNjsu8xus7o6gkFkOhvp1sQ"
    // const USERID = "-1002173244569"
    // // import { CHAT_ID } from "../constants";
    
  
  
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("+998");
    // const [email, setEmail] = useState("");
    // const [desription, setDescription] = useState("");
  
    // const [isLoading, setIsLoading] = useState(false);
  
    // let text = `Name: ${name}.%0AMessage: ${desription}.%0APhone number: ${phone}%0AEmail: ${
    //   email.length == 0 ? "Email is empty" : email
    // }.`;
  
    // const sendFeedback = (e) => {
    //   setIsLoading(true);
    //   e.preventDefault();
  
    //     axios.post(
    //       `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${text}`
    //     );
  
    //     // https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}
  
    //     // da togri daaa
    //     toast.success(getText("success"));
    //     setIsLoading(false);
    //     setName("");
    //     setPhone("");
    //     setDescription("");
    //     setEmail("");
      
    // };

    
  return (
    <div className="Getintouch mt-5">
    <div className="container">
      <div className="row">
         <form >
         <h3>Bize haber gonder</h3>
          <div className="row">
            <div className="inputWrap col-sm-6">
              <h6 className={``}>Ism*</h6>
              <InputMask
             
                className="form-control"
                name="name"
                required
                type="text"
              />
            </div>
            <div className="inputWrap col-sm-6">
              <h6 className={``}>Telefon numara</h6>
              <InputMask
            //    onChange={e => setPhone(e.target.value)}
            //    value={phone}
                className="form-control"
                name="phone"
                required
                type="text"
              />
            </div>
            <div className="inputWrap">
              <h6 className={``}>Email</h6>
              <InputMask
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                className="form-control"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div className="inputWrap">
            <h6 className={``}>Mesaj*</h6>
            <textarea 
             
            //   value={desription}
            className="form-control" name="message" required />
          </div>
          <div className="row justify-content-end">
            <div className="col-6">
              <button className="btn">                               Gonder
               </button>
              {/* <ToastContainer /> */}
            </div>
          </div>
         </form>
        </div>
    
      </div>
  </div>
  )
}

export default Getintouch
