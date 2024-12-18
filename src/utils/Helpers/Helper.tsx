import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
export const ShowSuccess =(message:string)=>{
    toast.success(message, {
        position: "top-right", 
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        theme: "light",
    });
}

export const ShowError=(message:string)=>{
    toast.success(message, {
        position: "top-right", 
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        theme: "light",
    });
}
export const ShowErrors = (messages: string[]) => {
    messages.forEach((message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    });
};
export const ToastWrapper = () => {
    return <ToastContainer />;
};