import React from "react";
import FormBuyModule from "./FormBuy.module.css";
import {initialState} from "../redux/slices/cartSlice"
import { useNavigate } from "react-router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
//componentes
import Input from "./Input";
import Button from "./Button"


const Form = () => {
    const navigate = useNavigate();

    const handleAlert = () =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Pago exitoso!",
            showConfirmButton: false,
            timer: 1500
            
        });
        navigate("/products"); 
    }
    return (
    <>
    <div className={FormBuyModule.containerH}>

    
        <h1>Pago eléctronico{initialState.totalprice}</h1>
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
    <br /><br />
    <Button text="Enviar" classes="yellow" handleEvent={handleAlert} />
    </div>
    <br />
    </>
    
    )
    
};


export default Form;