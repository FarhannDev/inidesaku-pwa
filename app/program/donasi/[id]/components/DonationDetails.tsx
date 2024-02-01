/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { Button, Card, Container, Stack, ProgressBar } from 'react-bootstrap';
import styles from '../styles/styles.module.css';
import DonationHeader from './DonationHeader';
import DonationModal from './DonationModal';

type DonationDetailProps = { donation: DonationDetail | undefined };

const DonationDetails = ({ donation }: DonationDetailProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <DonationHeader cover={donation?.cover} />
      <Card className={styles.donateCardDetail}>
        <Container>
          <Stack direction="vertical" gap={4}>
            <div className={styles.donateHeadingTitle}>{donation?.title}</div>

            <div className="d-flex justify-content-start flex-wrap g-3">
              <Stack direction="horizontal" gap={3}>
                <Button size="sm" type="button" variant="outline-success">
                  Bencana Alam
                </Button>
                <Button size="sm" type="button" variant="outline-success">
                  Pendidikan
                </Button>
              </Stack>
            </div>

            <div className="d-flex justify-content-start flex-wrap g-3">
              <Card className={styles.donateCardProgress}>
                <Stack direction="vertical" gap={3}>
                  <div className="d-flex justify-content-between g-3">
                    <div className={styles.donateProgressHeading}>
                      Progres donasi
                    </div>
                    <div className={styles.donateProgressHeadingColor}>
                      20/20 Hari
                    </div>
                  </div>
                  <ProgressBar now={100} label={`${100}%`} variant="success" />

                  <div>
                    <div className="d-flex justify-content-between g-3">
                      <div className={styles.donateProgressHeading}>
                        Terkumpul
                      </div>
                      <div className={styles.donateProgressHeadingColor}>
                        Target
                      </div>
                    </div>
                    <div className="d-flex justify-content-between g-3 pt-3">
                      <div className={styles.donateProgressHeading}>
                        1.000.000
                      </div>
                      <div className={styles.donateProgressHeadingColor}>
                        4.000.000
                      </div>
                    </div>
                  </div>
                </Stack>
              </Card>
            </div>

            <div className="d-flex justify-content-start flex-wrap g-3">
              <div className={styles.donateContentHeading}>Tentang program</div>
              <div className={styles.donateContentDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                earum molestiae sed dolor, voluptas, praesentium veniam ullam
                suscipit velit illo, excepturi omnis corporis asperiores at
                tempora enim illum odit ex voluptates cumque. Quam vitae
                molestiae, vero aliquid aut dignissimos soluta ab non
                voluptatibus sequi dicta omnis odit harum laudantium qui culpa
                nobis quibusdam illo rerum quo aliquam voluptatem fugit! Magni
                non molestiae consequuntur iste! Reiciendis incidunt sed debitis
                neque voluptatum repellendus vel praesentium id amet non
                molestias, quibusdam veritatis minima fugit ipsam pariatur natus
                voluptates esse vitae animi quo. Fugiat, laborum dolor! Dolorum
                ipsa culpa cupiditate quos quasi, doloremque doloribus?
              </div>
            </div>
            <div className="d-flex justify-content-between g-3">
              <Button
                onClick={() => setShow(true)}
                type="button"
                className={styles.donateButton}
              >
                Donasi Sekarang
              </Button>
              <Button type="button" className={styles.donateButtonFaq}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <g
                    clip-path="url(#clip0_1806_4105)"
                    filter="url(#filter0_i_1806_4105)"
                  >
                    <path
                      d="M0.457947 18.5935L1.74826 13.7958C0.707654 11.9268 0.377044 9.74593 0.817095 7.65327C1.25715 5.56062 2.43834 3.69657 4.14393 2.4032C5.84952 1.10982 7.96509 0.473869 10.1024 0.61204C12.2398 0.750212 14.2555 1.65324 15.7798 3.15541C17.3041 4.65759 18.2346 6.65815 18.4006 8.78998C18.5667 10.9218 17.9571 13.0419 16.6838 14.7613C15.4104 16.4807 13.5587 17.6839 11.4685 18.1503C9.3782 18.6166 7.18959 18.3148 5.30424 17.3002L0.457947 18.5935ZM5.53791 15.5049L5.83763 15.6824C7.20323 16.4905 8.79823 16.8249 10.3741 16.6335C11.9499 16.4421 13.4181 15.7356 14.5498 14.6242C15.6815 13.5128 16.4131 12.0589 16.6307 10.4891C16.8483 8.91918 16.5396 7.32154 15.7527 5.94511C14.9659 4.56867 13.745 3.49076 12.2805 2.87934C10.8159 2.26793 9.18986 2.15736 7.65578 2.56486C6.12169 2.97237 4.76572 3.87506 3.79916 5.13226C2.83261 6.38946 2.30978 7.93056 2.31214 9.51538C2.31085 10.8295 2.67488 12.1181 3.36369 13.2379L3.55165 13.5473L2.83029 16.225L5.53791 15.5049Z"
                      fill="#25D366"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8123 10.7473C12.6366 10.6058 12.4308 10.5062 12.2108 10.4561C11.9907 10.406 11.762 10.4067 11.5423 10.4582C11.2121 10.5951 10.9987 11.1124 10.7854 11.3711C10.7404 11.4331 10.6743 11.4766 10.5994 11.4934C10.5246 11.5102 10.4462 11.4992 10.379 11.4624C9.17011 10.9897 8.15682 10.1229 7.50371 9.00268C7.448 8.93277 7.42164 8.84402 7.43017 8.7551C7.43869 8.66618 7.48145 8.58403 7.54943 8.52595C7.78739 8.29076 7.96211 7.99947 8.05743 7.679C8.07859 7.32552 7.99747 6.97342 7.82375 6.66469C7.68944 6.23186 7.43384 5.84646 7.08715 5.55402C6.90834 5.47373 6.71007 5.44681 6.51627 5.47651C6.32247 5.50621 6.14142 5.59125 5.99496 5.72138C5.74069 5.9404 5.53887 6.21356 5.40436 6.52076C5.26984 6.82795 5.20607 7.16136 5.21772 7.49643C5.21851 7.68459 5.24239 7.87194 5.28884 8.0543C5.4068 8.49243 5.58821 8.91102 5.82732 9.29683C5.99983 9.59236 6.18806 9.87846 6.3912 10.1539C7.05136 11.0587 7.8812 11.8269 8.83466 12.4158C9.31311 12.7151 9.82447 12.9585 10.3587 13.1411C10.9135 13.3922 11.5262 13.4886 12.1316 13.42C12.4765 13.3679 12.8033 13.2319 13.0832 13.0241C13.3631 12.8163 13.5876 12.543 13.7368 12.2282C13.8245 12.038 13.8511 11.8254 13.813 11.6196C13.7216 11.1987 13.1577 10.9502 12.8123 10.7473Z"
                      fill="#25D366"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_1806_4105"
                      x="0.457947"
                      y="0.59346"
                      width="18"
                      height="18.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.5" />
                      <feGaussianBlur stdDeviation="1.25" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_1806_4105"
                      />
                    </filter>
                    <clipPath id="clip0_1806_4105">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.457947 0.59346)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </Stack>
        </Container>
      </Card>

      <DonationModal showModal={show} setShowModal={setShow} />
    </>
  );
};

export default DonationDetails;
