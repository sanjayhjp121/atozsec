import React, { useRef, useState } from "react";
import ContactImg from "../assets/contact.jpg";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [sendingState, setSendingState] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSendingState(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setEmail("");
        setSubject("");
        setMessage("");
        setNumber("");
        setSendingState(false);

        setOpenSnackbar(true);
        setError(false);
        setTimeout(() => {
          setOpenSnackbar(false);
        }, 2000);
      })
      .catch((err) => {
        setSendingState(false);
        setOpenSnackbar(true);
        setError(false);
        setTimeout(() => {
          setOpenSnackbar(false);
        }, 2000);
      });
  };

  return (
    <>
      <Layout className="contact flex-1 flex mt-32 md:mt-14 mb-32 md:mb-auto items-center justify-center">
        <div className="flex w-full justify-center items-center px-4">
          <img
            className="w-1/2 hidden md:block"
            src={ContactImg}
            alt="contact"
          />
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
              action="#"
            >
              <h5 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h5>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="test"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="number"
                  minLength={10}
                  maxLength={10}
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contact No."
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {sendingState ? "Sending..." : "Send Email"}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300"></div>
            </form>
          </div>
        </div>
      </Layout>
      <Footer />

      {
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={error ? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {error ? "Email could not be Sent" : "Email Send Successfully"}
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default Contact;
