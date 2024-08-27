import FormPeliculas from "./FormPeliculas";
const FormularioViews = () => {
    return (
        <div  className="position-relative py-3 mx-auto bg-cover" style={{ backgroundImage: 'url(../../assets/fondo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FormPeliculas/>
        </div>
    )
}

export default FormularioViews;