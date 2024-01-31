'use client';

import React from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import '@/styles/search-bar.css';

type SearchBarProps = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  placeholder: string;
};

export default function SearchBar({
  keyword,
  setKeyword,
  placeholder,
}: SearchBarProps) {
  return (
    <Row className="justify-content-start g-3">
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            type="search"
            className="searchbar-input"
            autoComplete="true"
            placeholder={placeholder}
            aria-label={placeholder}
            aria-describedby="basic-addon1"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1" className="searchbar-input-icon">
            <HiMagnifyingGlass size={20} />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
}
