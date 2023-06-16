import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import React, { useState, useEffect, useRaf, useRef } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { setIsModalOpen } from './TableSlice';
import Input from '../Input';
// import Modal from 'react-modal';
// import { customStyles } from '../../../Misc/modalStyle';



const Table = (props) => {
    const dispatch = useDispatch()
    const wrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    const [menuOpen, setMenuOpen] = useState(null);

    const menuTrigger = (id) => {
        if (menuOpen === id) {
            setMenuOpen(null);
        } else {
            setMenuOpen(id);
        }
    };

    const [email, setEmial] =useState()

     //A function to close profilemenu onclick outside element
     useEffect(() => {
        //Alert if clicked on outside of element
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setMenuOpen(null);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',

        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
    ></Box>

  

    return (
        <div className="absolute w-full h-full">
            <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-14">
                {/* {isLoading ?
                    <CircularProgress />
                    : */}
                    <div className="border p-4 w-full h-full shadow-lg border-[#FFFFFF] flex flex-col items-center space-y-4">
                        <div className="flex justify-between w-full p-4 mx-auto mt-5 border-b border-gray_200">
                            <span className="flex items-center justify-center font-bold">Avialable Courses</span>
                        </div>
                        <div className="w-full">
                            {/* {props.course.map((courses, key) => (
                                <div key={courses.id}> */}
                                    <div className='flex items-center justify-between w-full px-4 py-5 border-b border-gray_200'>
                                        <div className="flex items-center ml-4">
                                            <span aria-hidden="true" className="bottom-0 right-0 inline-block w-3 h-3 transform -translate-y-6 rounded-full animate-pulse translate-x-11"></span>
                                            <div className="flex flex-col gap-y-1">
                                                <div className="grid grid-flow-col gap-x-1">
                                                    <h1 className="w-full mt-5 font-normal leading-5 text-gray_700">English</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex gap-x-4 sm:gap-x-12">
                                                <div className="flex items-center cursor-pointer">
                                                <input
                                                        id='filter-color'
                                                        type='checkbox'
                                                        defaultChecked
                                                        className='bg-[green] h-4 w-4 rounded'
                                                        onChange={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-col'>
                                        <Button name="Proceed" onClick={() => setIsOpen(true)}/>
                                        </div>
                                        <Modal
                                    disablePortal
                                    disableEnforceFocus
                                    disableAutoFocus
                                    open = {isOpen}
                                    onClick={() => setIsOpen(false)}
                                    aria-labelledby="server-modal-title"
                                    aria-describedby="server-modal-description"
                                    sx={{
                                    display: 'flex',
                                    p: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    }}
                                >
                                    <Box
                                    sx={{
                                        position: 'relative',
                                        width: 400,
                                        bgcolor: 'background.paper',
                                        // border: '2px solid #000',
                                        boxShadow: (theme) => theme.shadows[5],
                                        p: 4,
                                    }}
                                    >
                                    <Typography id="server-modal-title" variant="h6" component="h2">
                                       <Input
                                       label="Email"
                                       type="email"
                                       value={email}
                                        placeholder="Please enter your Email"
                                       />
                                    </Typography>
                                    <Typography id="server-modal-description" sx={{ pt: 2 }}>
                                       <Button name="Submit"/>
                                    </Typography>
                                    </Box>
                                </Modal>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
    )
}

export default Table
