// import React, { useState } from "react";
// import Modal from "react-modal";
// import axios from "axios";

// const Problem2 = () => {
//   const [modalAIsOpen, setModalAIsOpen] = useState(false);
//   const [modalBIsOpen, setModalBIsOpen] = useState(false);
//   const [contacts, setContacts] = useState([]);
//   const [usContacts, setUsContacts] = useState([]);

//   console.log(contacts);
//   const openModalA = () => {
//     axios
//       .get("https://contact.mediusware.com/api/contacts/")
//       .then((response) => {
//         setContacts(response.data.results);
//         setModalAIsOpen(true);
//       })
//       .catch((error) => console.error(error));
//   };

//   const openModalB = () => {
//     axios
//       .get(
//         "https://contact.mediusware.com/api/country-contacts/united%20states/"
//       )
//       .then((response) => {
//         setUsContacts(response.data.results);
//         setModalBIsOpen(true);
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

//         <div className="d-flex justify-content-center gap-3">
//           <button
//             className="btn btn-lg btn-outline-primary"
//             type="button"
//             onClick={openModalA}
//           >
//             All Contacts
//           </button>
//           <button
//             className="btn btn-lg btn-outline-warning"
//             type="button"
//             onClick={openModalB}
//           >
//             US Contacts
//           </button>
//         </div>

//         <Modal
//           isOpen={modalAIsOpen}
//           onRequestClose={() => setModalAIsOpen(false)}
//         >
//           <h2>Modal A</h2>

//           <ul>
//             {contacts.map((contact) => (
//               <li key={contact.id}>{contact.phone}</li>
//             ))}
//           </ul>
//         </Modal>

//         <Modal
//           isOpen={modalBIsOpen}
//           onRequestClose={() => setModalBIsOpen(false)}
//         >
//           <h2>Modal B</h2>
//           <ul>
//             {usContacts.map((contact) => (
//               <li key={contact.id}>{contact.phone}</li>
//             ))}
//           </ul>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Problem2;

import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const Problem2 = () => {
  const [modalAIsOpen, setModalAIsOpen] = useState(false);
  const [modalBIsOpen, setModalBIsOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [usContacts, setUsContacts] = useState([]);

  const openModalA = () => {
    axios
      .get("https://contact.mediusware.com/api/contacts/")
      .then((response) => {
        setContacts(response.data.results);
        setModalAIsOpen(true);
      })
      .catch((error) => console.error(error));
  };

  const openModalB = () => {
    axios
      .get(
        "https://contact.mediusware.com/api/country-contacts/united%20states/"
      )
      .then((response) => {
        setUsContacts(response.data.results);
        setModalBIsOpen(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
            style={{ borderColor: "#46139f", color: "#46139f" }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
            style={{ borderColor: "#ff7f50", color: "#ff7f50" }}
          >
            US Contacts
          </button>
        </div>

        <Modal
          isOpen={modalAIsOpen}
          onRequestClose={() => setModalAIsOpen(false)}
        >
          <h2>Modal A</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>{contact.phone}</li>
            ))}
          </ul>
          <button
            className="btn"
            onClick={() => setModalAIsOpen(false)}
            style={{
              borderColor: "#46139f",
              color: "#46139f",
              backgroundColor: "white",
            }}
          >
            Close
          </button>
        </Modal>

        <Modal
          isOpen={modalBIsOpen}
          onRequestClose={() => setModalBIsOpen(false)}
        >
          <h2>Modal B</h2>
          <ul>
            {usContacts.map((contact) => (
              <li key={contact.id}>{contact.phone}</li>
            ))}
          </ul>
          <button
            className="btn"
            onClick={() => setModalBIsOpen(false)}
            style={{
              borderColor: "#46139f",
              color: "#46139f",
              backgroundColor: "white",
            }}
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
