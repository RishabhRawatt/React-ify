import ButtonComp from "../ButtonComp/ButtonComp";
import styles from "./ContactForm.module.css";
import { useState } from "react";

// icons
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  //onclick for button
  const onViaCallSubmit = () => {
    console.log("Redirected your request");
  };

  const onSubmit = (event) => {
    //to prevent form reload
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <ButtonComp
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="25px" />}
          />
          <ButtonComp
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="25px" />}
          />
        </div>
        <ButtonComp
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="25px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea style={{ padding: "10px" }} rows={7} />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <ButtonComp text="SUBMIT" />
          </div>

          {/* use of state to get form values */}
          <div>{name}<br/>{email}<br/>{text}</div>

        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="images/serviceimg.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
