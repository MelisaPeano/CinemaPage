import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PostMovies = () => {
  const [datos, setDatos] = useState("")
  console.log("peliculas", datos)


  return (
    <div className="min-vh-100 bg-light py-4 d-flex flex-column justify-content-center">
      <div className="position-relative py-3 mx-auto">
        <div className="position-absolute w-100 h-100 bg-gradient shadow-lg transform skew-y-n6 "></div>
        <div className="position-relative p-4 py-10 bg-white shadow-lg rounded-3">
          <div className="w-100 mx-auto">
            <h1 className="fs-2 fw-semibold mb-4 text-center">Agrega una Película</h1>
            <Formik
              initialValues={{
                title: '',
                year: '',
                director: "",
                duration: "",
                genre: [],
                rate: "",
                poster: ""
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response = await axios.post("http://localhost:3001/movies", values);
                  setDatos(response.data);
                  console.log("Movie posted successfully:", response.data);
                  resetForm();
                } catch (error) {
                  console.error("Error posting the movie:", error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, values, setFieldValue}) => (
                <Form className="gap-4">
                  <div>
                    <label htmlFor="title" className="d-block text-muted fw-medium">Title</label>
                    <Field type="text" name="title" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                    <ErrorMessage name="title" component="div" className="mt-1 text-danger" />
                  </div>
                  <div>
                    <label htmlFor="title" className="d-block text-muted fw-medium">year</label>
                    <Field type="number" name="year" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                    <ErrorMessage name="year" component="div" className="mt-1 text-danger" />
                  </div>


                  <div>
                    <label htmlFor="director" className="d-block text-muted fw-medium">Director</label>
                    <Field type="text" name="director" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                    <ErrorMessage name="director" component="div" className="mt-1 text-danger" />
                  </div>

                  <div>
                    <label htmlFor="duration" className="d-block text-muted fw-medium">Duration</label>
                    <Field type="text" name="duration" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                    <ErrorMessage name="duration" component="div" className="mt-1 text-danger" />
                  </div>

                  <div>
                    <label htmlFor="genre" className="d-block text-muted fw-medium">Genre</label>
                    {values.genre.map((genre, index) => (
                      <div key={index} className="mb-2">
                        <Field
                          type="text"
                          name={`genre.${index}`}
                          className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary"
                        />
                        <ErrorMessage name={`genre.${index}`} component="div" className="mt-1 text-danger" />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mt-1"
                          onClick={() => {
                            const newGenres = values.genre.filter((_, i) => i !== index);
                            setFieldValue('genre', newGenres);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <Field
                      type="text"
                      name="newGenre"
                      className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary"
                      placeholder="Add a genre and press Enter"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const newGenre = e.target.value.trim();
                          if (newGenre) {
                            setFieldValue('genre', [...values.genre, newGenre]);
                            e.target.value = ''; // Clear the input field
                          }
                        }
                      }}
                    />
                  </div>
                    <div>
                      <label htmlFor="rate" className="d-block text-muted fw-medium">Rate</label>
                      <Field type="number" name="rate" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                      <ErrorMessage name="rate" component="div" className="mt-1 text-danger" />
                    </div>

                    <div>
                      <label htmlFor="poster" className="d-block text-muted fw-medium">Poster URL</label>
                      <Field type="text" name="poster" className="form-control mt-1 shadow-sm border-light focus:border-primary focus:ring focus:ring-primary" />
                      <ErrorMessage name="poster" component="div" className="mt-1 text-danger" />
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


export default PostMovies;



