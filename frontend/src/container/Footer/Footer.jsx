import { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    if (!name || !email) return;
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Toma un café y contáctame.</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:alanaguinaga43@gmail.com" className="p-text">
            alanaguinaga43@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="celular" />
          <a href="tel:+52(465)1185454" className="p-text">
            +52 (465)-118-5454
          </a>
        </div>
      </div>

      {!formSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              name="name"
              id="name-input"
              className="p-text"
              placeholder="Tu Nombre"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              name="email"
              id="email-input"
              className="p-text"
              placeholder="Tu correo electronico"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name='message'
              id="message-input"
              cols="30"
              rows="10"
              className="p-text"
              placeholder="Tu mensaje"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" id="submit-button" className="p-text" onClick={handleSubmit}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Gracias por ponerse en contacto</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contacto",
  "app__whitebg"
);
