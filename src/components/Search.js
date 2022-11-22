import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = ({handleSearch}) => {

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(name)
    setName("")
  }

  return (

      <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
      </Form>

  )
}

export default Search
