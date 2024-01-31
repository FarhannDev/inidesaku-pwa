import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PesonaBudayaItemForYou from './PesonaBudayaItemForYou';
import '../styles/styles.css';
import PesonaBudayaHeading from './PesonaBudayaHeading';

type PesonaBudayaItemListForYouProps = {
  budaya: PesonaDesaBudaya[];
  heading: string;
};

export default function PesonaBudayaItemListForYou({
  budaya,
  heading,
}: PesonaBudayaItemListForYouProps) {
  return (
    <Row className="justify-content-start g-4 py-4">
      <Col>
        <PesonaBudayaHeading title={heading} />
        <Row className="justify-content-start g-4 pt-3">
          {budaya.map((item, idx) => (
            <Col xl={4} lg={6} md={6} key={idx++}>
              <PesonaBudayaItemForYou {...item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
