import React from 'react';
import DonationItem from './DonationItem';
import { Col, Row } from 'react-bootstrap';

type Props = { donations: Donation[] };

export default function DonationItemList({ donations }: Props) {
  return (
    <Row className="justify-content-start g-3 py-3">
      {donations?.map((donation) => (
        <Col key={donation.id} xl={4} lg={6} md={6}>
          <DonationItem {...donation} />
        </Col>
      ))}
    </Row>
  );
}
