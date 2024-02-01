'use client';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TvccItemResult from './TvccItemResult';

type TvccItemResultListProps = { items: Tvcc[] };

const TvccItemResultList = ({ items }: TvccItemResultListProps) => {
  return (
    <Row className="justify-content-start g-3 py-4">
      {items.map((item) => (
        <Col key={item.id} xl={4} lg={6} md={6}>
          <TvccItemResult {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default TvccItemResultList;
