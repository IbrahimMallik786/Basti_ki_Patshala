import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for volunteering!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="volunteer">
      <Container>
        <h2>Volunteer With Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" value={formData.phone} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
}
