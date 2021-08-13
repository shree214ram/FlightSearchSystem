import React, { useState, Fragment, useEffect } from "react"
import { toast } from 'react-toastify';


const ToastComponenet = ({
    statusType,
    statusMessage,
    toastClosedFn
}) => {
    const toastClosed = () => {
        toastClosedFn();
    }
    const handleMessageType = type => {
        switch (type) {
            case "success":
                toast.success(statusMessage, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    onClose: toastClosed
                })
                return true;
            case "warning":
                toast.warn(statusMessage, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    onClose: toastClosed
                })
                return true;
            case "info":
                toast.info(statusMessage, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    onClose: toastClosed
                })
                return true;
            case "error":
                toast.error(statusMessage, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    onClose: toastClosed
                })
                return true;
            default:
                break
        }
    }

    // Handle components
    return (
        <Fragment>
            {handleMessageType(statusType)}
        </Fragment>

    )
}

export default ToastComponenet
