import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import styles from './styles/styles.module.css';
import DonateSuccessHeading from './components/DonateSuccessHeading';
import DonateSuccessSubheading from './components/DonateSuccessSubheading';
import DonateTransactionSuccess from './components/DonateTransactionSuccess';

export default function DonationSuccess() {
  return (
    <Container className="position-relative py-5 mt-5">
      <Row className="justify-content-center  g-3">
        <Col xl={8}>
          <div>
            <Stack direction="vertical" gap={5}>
              <DonateSuccessHeading title="Terima Kasih" />
              <Image
                src="/images/icons/rewards-iE67nG5S5h.png"
                width={250}
                height={250}
                alt=""
                className={styles.donateSuccessImages}
              />

              <DonateSuccessSubheading
                title="Donasi kamu berhasil diterima dan akan segera disalurkan ke
              penerima donasi"
              />

              <DonateTransactionSuccess />
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
