import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
const AddUserForm = ({ closeAddUserForm, addUser }) => {
  console.log('USERFORM');

  return (
    <div style={{ position: 'absolute', top: '0', right: '-27%', background: '#dfe4ea' }}>
      <h3>
        Введите данные <br /> нового пользователя
      </h3>
      <Formik
        initialValues={{ id: '', firstName: '', lastName: '', email: '', phone: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addUser(values);
          closeAddUserForm();
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="id">ID-номер</FormLabel>
              <FormControl
                type="text"
                id="id"
                name="id"
                onChange={handleChange}
                value={values.name}
                placeholder="Введите id..."
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="firstName">Имя</FormLabel>
              <FormControl
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={values.name}
                placeholder="Введите имя..."
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="lastName">Фамилия</FormLabel>
              <FormControl
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={values.name}
                placeholder="Введите фамилию..."
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Электронная почта</FormLabel>
              <FormControl
                type="email "
                id="email"
                name="email"
                onChange={handleChange}
                value={values.name}
                placeholder="Введите адрес эл.почты..."
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="phone">Телефон</FormLabel>
              <FormControl
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={values.name}
                placeholder="Введите номер телефона..."
              />
            </FormGroup>

            <div style={{ display: 'flex' }}>
              <Button variant="primary" type="submit">
                Добавить пользователя
              </Button>
              <Button variant="secondary" onClick={closeAddUserForm}>
                Закрыть
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddUserForm;
