// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import NavbarBM from '../components/navbar';

const ContactUs = () => {
 
// let pubkey = "VcIAqcxCb5BlhsJKw";
// let serviceID = "service_ukzjjro";
// let templateID = "template_7uvidc6";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(serviceID, templateID, form.current, pubkey)
//       .then((result) => {
//           console.log(result.text);
//           alert("Email sent successfully");
//       }, (error) => {
//           console.log(error.text);
//           alert("Email not sent");
//       });
    
      // const resetForm = () => {
      //   if (form.current) {
      //     form.current.reset();
      //   }
      // };

  //     clearForm();
  // };

  // const [serviceSelected, setServiceSelected] = useState("");
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userMessage, setUserMessage] = useState("");

  // const clearForm = () => {
  //   setServiceSelected("");
  //   setUserName("");
  //   setUserEmail("");
  //   setUserMessage("");
  // }

  return (
    <div>
      <h1>CONTACTUS PAGE</h1>
      {/* <NavbarBM /> */}
      {/* <h2>ContactUs</h2> */}
      {/* <section className="formSection">
        <div className="h1Div">
          <h1 className="pt-5 display-4" id="h1contactUs">Contact Us</h1>
        </div>

        <div className="formContactDiv d-flex flex-xl-row flex-column justify-content-xl-evenly align-items-center px-5">
          <div className="contactFormDiv w-xl-50 w-75 p-xl-5 d-flex flex-column justify-content-between">
            <div>
              <p className="m-0">
                Thank you for your interest in our services. We would be more than happy to answer any questions you may have. Please feel free to send us a message with your inquiry and we will get back to you as soon as possible. We look forward to hearing from you and discussing how we can help you achieve your marketing goals.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column" id="contactForm" name="contactForm" action="#" method="#">
              <label htmlFor="serviceSelected">Service needed</label>
              <select id="serviceSelected" name="serviceSelected" value={serviceSelected} onChange={(e) => setServiceSelected(e.target.value)}>
                <option value="No selected service">...</option>
                <option value="Creative Content Storytelling">Creative Content Storytelling</option>
                <option value="Web Development & Design">Web Development & Design</option>
                <option value="Multi-channel Marketing">Multi-channel Marketing</option>
                <option value="Celebrity & Influencer Management">Celebrity & Influencer Management</option>
                <option value="Integrated 360° Marketing and Digital Communication">Integrated 360° Marketing and Digital Communication</option>
                <option value="Social and Digital Media Marketing">Social and Digital Media Marketing</option>
              </select>

              <label htmlFor="userName">Full Name</label>
              <input type="text" id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
              <label htmlFor="userEmail">Email</label>
              <input type="email" id="userEmail" name="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>

              <label htmlFor="userMessage">Message</label>
              <textarea id="userMessage" name="userMessage" value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>

              <div className="text-end">
                <input id="contactSendBtn" name="contactSendBtn" type="submit" value="Send" />
              </div>
            </form>
          </div>

          <div className="contactInfoDiv w-xl-50 w-75 p-xl-5 d-flex flex-column justify-content-between my-xl-0 mt-5">
            <div>
              <h4 className="pb-4">Contact Information</h4>
              <p>Name: Bright Minds Digital Marketing</p>
              <p>E-mail: brightmiiinds@gmail.com</p>
              <p>Contacts: +63 (912) 345-6789</p>
              <p>Address: Brain Train Centre, Laguna Business Park, Santa Rosa City, Laguna 4026</p>
            </div>

            <div className="mapDiv">
              <iframe title='map' className="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.0780420667793!2d121.06673197456702!3d14.248669685597118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7d487b0b9f73%3A0x771c2808c0982a17!2sBrain%20Train%20Centre!5e0!3m2!1sen!2sph!4v1681883983636!5m2!1sen!2sph" />
            </div>

          </div>

        </div>
      </section> */}


    </div>
  );
};

export default ContactUs;

