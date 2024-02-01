import React from 'react';
import styles from '../../[id]/styles/donate.module.css';
import { Button } from 'react-bootstrap';

type DonateTransactionSuccess = {};

const DonateTransactionSuccess = (props: DonateTransactionSuccess) => {
  return (
    <>
      <div>
        <div className={styles.donateInputLabel}>Rincian Donasi</div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>Tanggal pembayaran</div>
          <div className={styles.donateInputLabel}>23 Oktober 2023</div>
        </div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>Metode pembayaran</div>
          <div className={styles.donateInputLabel}>Gudang voucher</div>
        </div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>ID donasi</div>
          <div className={styles.donateInputLabel}>326849908</div>
        </div>
        <div className="d-flex justify-content-between g-3 pt-3">
          <div className={styles.donateInputLabel}>Status</div>
          <div className={styles.donateInputLabel}>Berhasil</div>
        </div>
      </div>
      <hr className="text-secondary" />

      <div>
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
      </div>

      <Button type="submit" className={styles.donateButtonSubmit}>
        Kembali
      </Button>
    </>
  );
};

export default DonateTransactionSuccess;
