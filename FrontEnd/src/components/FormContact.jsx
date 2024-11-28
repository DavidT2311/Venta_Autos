import FormContactModule from "./FormContact.module.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Button from "./Button.jsx"
import Input from "./Input.jsx"


const  FormContact = () => {
    const handleAlert = () =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Nota enviada con exito!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return(
        
        <div className={FormContactModule.form}>
            <h2>¡Déjanos un comentario!</h2>
            <label>Nombre:</label>
            <Input
            type={"text"}
            id={"nombre"}
            name={"nombre"}
            place={"Nombre Completo:"}
            />
            <label>Correo Electrónico:</label>
            <Input
            type={"email"}
            id={"correo"}
            name={"correo"}
            place={"Correo Electrónico:"}
            />
            <label>Nota:</label>
            <Input
            type={"text"}
            id={"nota"}
            name={"nota"}
            place={"Nota:"}
            />
            <Button text="Enviar" classes="yellow" handleEvent={handleAlert} />
        </div>
        
    
    )
}



export default FormContact


