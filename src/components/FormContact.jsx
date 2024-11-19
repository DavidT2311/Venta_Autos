import FormContactModule from "./FormContact.module.css";
import Input from "./Input.jsx"

const  FormContact = () => {
    return(
        
        <div className={FormContactModule.form}>
            <h2>¡Déjanos un comentario!</h2>
            <Input
            type={"text"}
            id={"nombre"}
            name={"nombre"}
            place={"Nombre Completo:"}
            />
            <Input
            type={"email"}
            id={"correo"}
            name={"correo"}
            place={"Correo Electrónico:"}
            />
            <Input
            type={"text"}
            id={"nota"}
            name={"nota"}
            place={"Nota:"}
            />
            <button>Enviar</button>
        </div>
        
    
    )
}



export default FormContact

