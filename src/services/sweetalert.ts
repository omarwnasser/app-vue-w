import swal from 'sweetalert2';

const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  
  
export default abstract class Swal{


    static success(message: String){
        Toast.fire({
            icon: 'success',
            title: message,
          })
    }

    static error(message: String){
        Toast.fire({
            icon: 'error',
            title: message,
          })
    }

    static info(message: String){
        Toast.fire({
            icon: 'info',
            title: message,
          })
    }

    static warning(message: String){
        Toast.fire({
            icon: 'warning',
            title: message,
          })
    }
}















