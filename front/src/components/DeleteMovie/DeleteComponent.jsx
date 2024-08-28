import { Formik , Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";

const DeleteComponent = () => {
    const [datos, setDatos] = useState("")
    console.log("peliculas", datos)
    return (
        <div className="min-vh-100 bg-light py-4 d-flex flex-column justify-content-center">
        <div className="position-relative py-3 mx-auto">
          <div className="position-relative p-4 py-10 bg-white shadow-lg rounded-3">
            <div className="w-100 mx-auto">
              <h1 className="fs-2 fw-semibold mb-4 text-center">Borrar Pelicula</h1>
              <Formik
                initialValues={{
                  title: ''
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const response = await axios.delete("http://localhost:3001/movies/delete", {
                        data: { title: values.title }
                  });
                    setDatos(response.data);
                    resetForm();
                    alert("Pelicula borrada correctamente");
                  } catch (error) {
                    console.error("Error posting the movie:", error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting}) => (
                  <Form className="gap-4">
                    <div>
                      <label htmlFor="title" className="d-block text-muted fw-medium">Title</label>
                      <Field type="text" name="title" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                      <ErrorMessage name="title" component="div" className="mt-1 text-danger" />
                    </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className=" mt-4 w-100 d-flex justify-content-center py-2 px-4 border-0 rounded shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default DeleteComponent;