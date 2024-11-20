import React from "react";
import FormBuyModule from "./FormBuy.module.css";
//componentes
import Input from "./Input";


const Form = () => {
    return (
    <>
        <h1>Pago eléctronico</h1>
    <Input
    type={"text"}
    id={"nombre"}
    name={"nombre"}
    place={"Nombre Completo:"}
    />
    <Input
    type={"number"}
    id={"telefono"}
    name={"telefono"}
    place={"Numero de telefono:"}
    />
    <Input
    type={"email"}
    id={"email"}
    name={"email"}
    place={"Corre eléctronico:"}
    />
    <Input
    type={"number"}
    id={"tarjet"}
    name={"tarjet"}
    place={"Numero de tarjeta:"}
    />
    <Input
    type={"text"}
    id={"fecha"}
    name={"fecha"}
    place={"Fecha:"}
    />
    <button>Enviar</button>
    </>
      
    )
    
}


export default Form;