import React from "react";
import { RiArrowRightSFill } from 'react-icons/ri';
import { IoMdArrowDropleft } from 'react-icons/io';
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div className="text_div">
        {" "}
        <h2> Delivery Settings </h2>
      </div>
      <div className="main_div">
        <form>
          <div className="form_div">
            <h5> Muhammed Waseem</h5>
            <label for="fname">
           <p>Jable Ali, Street 1, Dubai - Mobile:- +917 505201234</p>
            </label>
       
            <input
              placeholder=" Special Instructions"
              className="input_div"
              type="text"
              id="fname"
              name="fname"
            />
          </div>
          <div className="radio_div">
            {" "}
            <input type="radio" id="lname" name="lname" />{" "}
            <span>
              {" "}
              <button className="buttonClass"> Express Delivery</button>
            </span>
          </div>
          <div>
           
            <h5> Select Delivery Slot</h5>{" "}
          </div>
          <div>
           <div className="date_div">
           <div >
              <p>February</p>
            </div>
            <div>
              {" "}
              <div className="dot_div">
             <IoMdArrowDropleft className="Arrow" /> 
                <span class="dot">1</span>
                <span class="dot">2</span>
                <span class="dot">3</span>
                <span class="dot">4</span>
                <span class="dot">5</span>
                <span class="dot">6</span>
                <span class="dot">7</span>
                 <RiArrowRightSFill  className="Arrow" />  
              </div>
            </div>
           </div>
            <div className="slot_div">
              <div>
                {" "}
                <p> Slot 1</p> <p> 10-2</p>{" "}
              </div>
              <div>
                {" "}
                <p> Slot 2</p> <p> 2-6</p>{" "}
              </div>
              <div>
                {" "}
                <p> Slot 3</p> <p> 6-8</p>{" "}
              </div>
              <div>
                {" "}
                <p> Slot 4</p> <p> 10-2</p>{" "}
              </div>
              <div>
                {" "}
                <p> Slot 5</p> <p> 2-6</p>{" "}
              </div>
            </div>
            <div>
              {" "}
              <input
                className="input_div1"
                type="submit"
                value="SUBMIT"
              ></input>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
