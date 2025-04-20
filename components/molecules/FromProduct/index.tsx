import { FC, memo, useState } from "react";
import { Formik, Form } from "formik";
import { FormProductType } from "./types";
import { Button, Form as FormBt, Spinner } from "react-bootstrap";

export const FromProducts: FC<FormProductType> = ({
  product,
  onClose,
  validationSchema,
  onSubmit,
  form,
  categories,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h4 className="mb-3">{form}</h4>
      <Formik
        initialValues={product}
        onSubmit={async (values) => {
          await setLoading((prev) => !prev);
          await onSubmit(values);
          await setLoading((prev) => !prev);

        }}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FormBt.Group className="mb-3">
              <FormBt.Label htmlFor="title">Title</FormBt.Label>
              <FormBt.Control
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.title && !!errors.title}
              />
              <FormBt.Control.Feedback type="invalid">
                {errors.title}
              </FormBt.Control.Feedback>
            </FormBt.Group>

            <FormBt.Group className="mb-3">
              <FormBt.Label htmlFor="price">Price</FormBt.Label>
              <FormBt.Control
                id="price"
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.price && !!errors.price}
              />
              <FormBt.Control.Feedback type="invalid">
                {errors.price}
              </FormBt.Control.Feedback>
            </FormBt.Group>

            <FormBt.Group className="mb-3">
              <FormBt.Label htmlFor="description">Description</FormBt.Label>
              <FormBt.Control
                id="description"
                as="textarea"
                name="description"
                rows={3}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.description && !!errors.description}
              />
              <FormBt.Control.Feedback type="invalid">
                {errors.description}
              </FormBt.Control.Feedback>
            </FormBt.Group>

            <FormBt.Group className="mb-3">
              <FormBt.Label htmlFor="category">Category</FormBt.Label>
              <FormBt.Select
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.category && !!errors.category}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </FormBt.Select>
              <FormBt.Control.Feedback type="invalid">
                {errors.category}
              </FormBt.Control.Feedback>
            </FormBt.Group>

            <FormBt.Group className="mb-3">
              <FormBt.Label htmlFor="image">Image (URL)</FormBt.Label>
              <FormBt.Control
                id="image"
                name="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.image && !!errors.image}
              />
              <FormBt.Control.Feedback type="invalid">
                {errors.image}
              </FormBt.Control.Feedback>
            </FormBt.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button disabled={loading} variant="secondary" onClick={onClose}>
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Cancel"
                )}
              </Button>
              <Button
                disabled={loading}
                type="submit"
                className="btn btn-custom btn btn-primary"
              >
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default memo(FromProducts);
