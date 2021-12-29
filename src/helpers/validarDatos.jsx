import Swal from "sweetalert2"

export const validarDatos = (values) => {

    if (values.nombre.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es invalido',
          })
          return false
    }
        
    if (values.apellido.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El apellido es invalido',
          })
          return false
    }

    if (values.email.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El E-mail es invalido',
          })
          return false
    }

    if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los E-mails no coinciden',
          })
          return false
    }
    return true
}
