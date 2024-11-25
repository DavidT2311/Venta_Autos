import FormContactModule from "./FormContact.module.css";
import Button from "./Button.jsx"
import Input from "./Input.jsx"


const  FormContact = () => {
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
            <Button text="Enviar" classes="blue" />
        </div>
        
    
    )
}



export default FormContact


