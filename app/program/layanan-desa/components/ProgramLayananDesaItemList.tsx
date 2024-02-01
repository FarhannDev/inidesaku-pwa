import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgramLayananDesaItem from './ProgramLayananDesaItem';

type ProgramLayananDesaItemListProps = {
  programs: LayananDesa[];
};

export default function ProgramLayananDesaItemList({
  programs,
}: ProgramLayananDesaItemListProps) {
  return (
    <Row className="justify-content-start g-4 pt-3">
      {programs.map((program, idx) => (
        <Col xl={4} lg={6} md={6} key={idx++}>
          <ProgramLayananDesaItem {...program} />
        </Col>
      ))}
    </Row>
  );
}
