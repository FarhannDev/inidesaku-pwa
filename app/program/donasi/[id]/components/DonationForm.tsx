import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from '../styles/donate.module.css';
import DonationFormTransaction from './DonationFormTransaction';

type Props = {};

export default function DonationForm({}: Props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className={styles.donateInputLabel}>
          Nama donatur
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukan nama anda"
          autoComplete="name"
          className={styles.donateFormInput}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Donasi sebagai anonim"
          className={styles.donateInputLabel}
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className={styles.donateInputLabel}>
          Masukkan nominal donasi
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Rp."
          className={styles.donateFormInput}
        />
        <Form.Text className={styles.donateInputLabel}>
          Minimal donasi Rp. 5000,00
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className={styles.donateInputLabel}>
          Atau pilih jumlah donasi
        </Form.Label>

        <div className="row row-cols-2 g-3 py-3">
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 5.000,00
            </Button>
          </div>
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 10.000,00
            </Button>
          </div>
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 15.000,00
            </Button>
          </div>
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 20.000,00
            </Button>
          </div>
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 25.000,00
            </Button>
          </div>
          <div className="col">
            <Button type="button" className={styles.donateInputButton}>
              Rp. 50.000,00
            </Button>
          </div>
        </div>
      </Form.Group>

      <DonationFormTransaction />

      <Button type="submit" className={styles.donateButtonSubmit}>
        Donasikan
      </Button>
    </Form>
  );
}
