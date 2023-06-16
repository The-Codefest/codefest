import React from "react";

const Dashboar = () => {
  return <div>Dashboard</div>;
};

export default Dashboar;

// import React, { useEffect, useRef, useState } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
// import { useDispatch } from "react-redux";
// // import { fetchAllMembers, fetchMember } from '../Members/MembersSlice';
// const Table = (props) => {
//   const dispatch = useDispatch();
//   const wrapperRef = useRef(null);
//   //function to display sub menu of doctors
//   const menuTrigger = (id) => {
//     if (menuOpen === id) {
//       setMenuOpen(null);
//     } else {
//       setMenuOpen(id);
//     }
//   };
//   //A function to close profilemenu onclick outside element
//   useEffect(() => {
//     //Alert if clicked on outside of element
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setMenuOpen(null);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);
//   const [menuOpen, setMenuOpen] = useState(null);
//   return (
//     <div className="flex flex-col mt-6 ml-12 mr-9 min-h-[55vh]">
//       <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//           <div className="overflow-hidden border-b rounded-md shadow-md border-gray_200">
//             <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
//               <thead className="bg-[#F9FAFB] border-b border-gray_200">
//                 <tr>
//                   {props.heads.map((head) => (
//                     <th
//                       key={head}
//                       scope="col"
//                       className="px-6 py-5 text-xs font-semibold tracking-wider text-left text-gray_500"
//                     >
//                       {head}
//                     </th>
//                   ))}
//                   <th scope="col" className="relative px-6 py-3">
//                     <span className="sr-only"></span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {/* {props.details.map((detail, index) => ( */}
//                 <tr key={""} className="border-b border-gray_200">
//                   <td
//                     onClick={" "}
//                     className="px-6 py-4 cursor-pointer whitespace-nowrap"
//                   >
//                     <div className="flex items-center">
//                       {/* <div className='flex-shrink-0 w-10 h-10'>
//                                                     <img
//                                                         className='w-10 h-10 rounded-full'
//                                                         src={detail?.profile_picture ? detail?.profile_picture : createImageFromInitialsName(600, detail.full_name, getRandomColor())}
//                                                         alt=''
//                                                     />
//                                                 </div> */}
//                       <div className="ml-4">
//                         <div className="text-sm text-gray_900">
//                           {/* {detail.full_name} */}
//                           ajsgdha
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray_500">
//                       {/* {detail.tithe} */}
//                       jhjdda
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray_500 whitespace-nowrap">
//                     {/* {detail.department} */}
//                     jhsdjhds
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray_500 whitespace-nowrap">
//                     {/* {detail.contact} */}
//                     sjdgajd
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray_500 whitespace-nowrap">
//                     {/* {detail.date_joined} */}
//                     ksdjhsjh
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {/* <span
//                                                 className={`inline-flex items-center gap-x-1 px-4 py-2 text-xs leading-5 ${
//                                                     detail.status === 'Active'
//                                                         ? 'text-[#027A48] bg-[#ECFDF3]'
//                                                         : 'text-[#B42318] bg-[#FEF3F2]'
//                                                 } rounded-full`}
//                                             >
//                                                 <span>
//                                                     <GoPrimitiveDot />
//                                                 </span>
//                                                 <span>
//                                                 {""}
//                                                 </span>
//                                             </span> */}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
//                     <div className="cursor-pointer">
//                       <BsThreeDots
//                         color="#344054"
//                         onClick={() => menuTrigger()}
//                       />
//                     </div>
//                     {/* {menuOpen === detail.id ? ( */}
//                     <ul
//                       ref={wrapperRef}
//                       className="z-[100] absolute w-40 -translate-x-40 space-y-2 text-gray_600 bg-[white] border-[#F2F4F7] rounded-lg shadow-lg"
//                       onBlur={() => setMenuOpen(null)}
//                     >
//                       <li
//                         onClick={""}
//                         className="flex ml-3 border-b cursor-pointer border-gray_200 text-gray_700"
//                       >
//                         <div className="inline-flex items-center w-full px-2 py-1 text-sm transition-colors duration-150 rounded-md border-gray2">
//                           Activate user
//                         </div>
//                       </li>
//                       <li
//                         onClick={""}
//                         className="flex ml-3 border-b cursor-pointer border-gray_200 text-gray_700"
//                       >
//                         <div className="inline-flex items-center w-full px-2 py-1 text-sm transition-colors duration-150 rounded-md border-gray2">
//                           Deactivate user
//                         </div>
//                       </li>
//                       <li
//                         onClick={""}
//                         className="flex ml-3 border-b cursor-pointer border-gray_200 text-gray_700"
//                       >
//                         <div className="inline-flex items-center w-full px-2 py-1 text-sm transition-colors duration-150 rounded-md border-gray2">
//                           Delete user
//                         </div>
//                       </li>
//                     </ul>
//                     {/* ) : ( */}
//                     <></>
//                     {/* )}  */}
//                   </td>
//                 </tr>
//                 {/* ))} */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Table;

// import { Box, CircularProgress, Modal, Typography } from "@mui/material";
// import React, { useState, useEffect, useRaf, useRef } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "../Student/Table/Button/index"
// import Input from "../Student/Input";
// // import { setIsModalOpen } from "./TableSlice";
// // import Input from "../Input";
// // import Modal from 'react-modal';
// // import { customStyles } from '../../../Misc/modalStyle';

// const Table = (props) => {
//   const dispatch = useDispatch();
//   const wrapperRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const [menuOpen, setMenuOpen] = useState(null);

//   const menuTrigger = (id) => {
//     if (menuOpen === id) {
//       setMenuOpen(null);
//     } else {
//       setMenuOpen(id);
//     }
//   };

//   const [email, setEmial] = useState();

//   //A function to close profilemenu onclick outside element
//   useEffect(() => {
//     //Alert if clicked on outside of element
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setMenuOpen(null);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   <Box
//     sx={{
//       height: 300,
//       flexGrow: 1,
//       minWidth: 300,
//       transform: "translateZ(0)",

//       // Disable this demo to preserve the others.
//       "@media all and (-ms-high-contrast: none)": {
//         display: "none",
//       },
//     }}
//   ></Box>;

//   return (
//     <div className="absolute w-full h-full">
//       <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-14">
//         {/* {isLoading ?
//                     <CircularProgress />
//                     : */}
//         <div className="border p-4 w-full h-full shadow-lg border-[#FFFFFF] flex flex-col items-center space-y-4">
//           <div className="flex justify-between w-full p-4 mx-auto mt-5 border-b border-gray_200">
//             <span className="flex items-center justify-center font-bold">
//               Avialable Courses
//             </span>
//           </div>
//           <div className="w-full">
//             {/* {props.course.map((courses, key) => (
//                                 <div key={courses.id}> */}
//             <div className="flex items-center justify-between w-full px-4 py-5 border-b border-gray_200">
//               <div className="flex items-center ml-4">
//                 <span
//                   aria-hidden="true"
//                   className="bottom-0 right-0 inline-block w-3 h-3 transform -translate-y-6 rounded-full animate-pulse translate-x-11"
//                 ></span>
//                 <div className="flex flex-col gap-y-1">
//                   <div className="grid grid-flow-col gap-x-1">
//                     <h1 className="w-full mt-5 font-normal leading-5 text-gray_700">
//                       English
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex gap-x-4 sm:gap-x-12">
//                   <div className="flex items-center cursor-pointer">
//                     <input
//                       id="filter-color"
//                       type="checkbox"
//                       defaultChecked
//                       className="bg-[green] h-4 w-4 rounded"
//                       onChange={() => {}}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-col">
//                 <Button name="Proceed" onClick={() => setIsOpen(true)} />
//               </div>
//               <Modal
//                 disablePortal
//                 disableEnforceFocus
//                 disableAutoFocus
//                 open={isOpen}
//                 // onClick={() => setIsOpen(false)}
//                 aria-labelledby="server-modal-title"
//                 aria-describedby="server-modal-description"
//                 sx={{
//                   display: "flex",
//                   p: 1,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: "relative",
//                     width: 400,
//                     bgcolor: "background.paper",
//                     // border: '2px solid #000',
//                     boxShadow: (theme) => theme.shadows[5],
//                     p: 4,
//                   }}
//                 >
//                   <Typography
//                     id="server-modal-title"
//                     variant="h6"
//                     component="h2"
//                   >
//                     <Input
//                       label="Email"
//                       type="email"
//                       value={email}
//                       placeholder="Please enter your Email"
//                     />
//                   </Typography>
//                   <Typography id="server-modal-description" sx={{ pt: 2 }}>
//                     <Button
//                       name="Submit"
//                       onClick={() => {
//                         setIsOpen(false);
//                       }}
//                     />
//                   </Typography>
//                 </Box>
//               </Modal>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
