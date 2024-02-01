import React from 'react';
import { Form, Stack } from 'react-bootstrap';
import styles from '../styles/donate.module.css';

type DonationFormTransactionProps = {};

export default function DonationFormTransaction({}: DonationFormTransactionProps) {
  const options = [
    {
      value: 'gudang_voucher',
      label: 'Gudang Voucher',
      imageUrl: '/images/icons/icon-ppob-gvmoney.png',
    },
    {
      value: 'gudang_voucher2',
      label: 'Gudang Voucher 2',
      imageUrl: '/images/icons/icon-ppob-gvmoney.png',
    },
    {
      value: 'gudang_voucher3',
      label: 'Gudang Voucher 3',
      imageUrl: '/images/icons/icon-ppob-gvmoney.png',
    },
  ];

  return (
    <div className="py-3">
      <div className={styles.donateInputLabel}>Rincian pembayaran</div>
      <div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>Nominal Donasi</div>
          <div className={styles.donateInputLabel}>Rp. 20.000,00</div>
        </div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>Biaya admin</div>
          <div className={styles.donateInputLabel}>Rp. 2.500,00</div>
        </div>
      </div>

      <hr className="text-secondary" />
      <div className="d-flex justify-content-between g-3 mb-3">
        <div className={styles.donateInputLabel}>Total biaya</div>
        <div className={styles.donateInputLabel}>Rp. 22.500,00</div>
      </div>

      <Form.Group>
        <Form.Label className={styles.donateInputLabel}>
          Metode pembayaran
        </Form.Label>
        <Form.Select
          aria-label="Default select example"
          className={styles.donateFormInput}
        >
          <option> Pilih Metode pembayaran</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
              {/* You can use inline style or include an image tag within the option */}
              <span
                style={{
                  marginLeft: '5px',
                  backgroundImage: `url(${option.imageUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: '20px',
                  height: '20px',
                  display: 'inline-block',
                }}
              ></span>
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}
