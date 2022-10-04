import useLocoscroll from "./useLocoscroll";
import CloseIcon from "../public/close.svg";
import Letter from "../public/letter.svg";
import PhoneIcon from "../public/phone.svg";
import ReactDOM from "react-dom";
import { useRef } from "react";
import { useEffect, useState } from "react";
function ContactMe({ onClose }) {
  const contactRef = useRef(null);
  const overlayRef = useRef();
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  if (isBrowser) {
    // useEffect(() => {}, []);
    return ReactDOM.createPortal(
      <div className="contactMe" ref={contactRef}>
        <button
          onClick={() => {
            onClose();
            console.log("TRIGGEREEED");
          }}
        >
          <CloseIcon />
        </button>
        <div className="contactList">
          <div className="email">
            <Letter />
            <span>islamyehia1999@gmail.com</span>
          </div>
          <div className="phone">
            <PhoneIcon />
            <span>+201063358765</span>
          </div>
        </div>
      </div>,
      document.querySelector(".overlay")
    );
  }
}
export default ContactMe;
