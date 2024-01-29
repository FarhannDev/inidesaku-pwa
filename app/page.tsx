'use client';

import ProgramFeaturedList from '@/components/beranda/ProgramFeaturedList';
import FaqItemList from '@/components/faq/FaqItemList';
import OnboardingList from '@/components/onboarding/OnboardingList';
import { faqQuestionData } from '@/utils/data/localDataFaqQuestion';
import { onboardingSlide } from '@/utils/data/localDataOnboarding';
import { programFeature } from '@/utils/data/localDataProgramFeature';
import Image from 'next/image';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import {
  HiMiniUserGroup,
  HiOutlineChartBar,
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';

export default function Home() {
  return (
    <>
      <section className="section-hero py-5">
        <Container>
          <OnboardingList onboarding={onboardingSlide} />
        </Container>
      </section>
      <section className="section-program-feature py-5">
        <Container>
          <h1 className="heading">Program Dan Kegiatan Unggulan Inidesaku</h1>
          <ProgramFeaturedList programs={programFeature} />
        </Container>
      </section>
      <section className="section-about py-5">
        <Container>
          <h1 className="heading">Tentang Inidesaku</h1>

          <Row className="justify-content-start g-3 py-5">
            <Col>
              <Row className="justify-content-arround align-self-center align-items-center g-5 ">
                <Col lg={4}>
                  <Image
                    src="/images/img-4-removebg-preview.png"
                    width={350}
                    height={350}
                    alt=""
                    priority
                  />
                </Col>
                <Col lg={8}>
                  <div className="description">
                    Inidesaku.id merupakan aplikasi digital untuk membangun Desa
                    Cerdas yang sejalan dengan program peningkatan Indeks
                    Pembangunan Manusia (IPM). Inidesaku.id merupakan aplikasi
                    digital untuk membangun Desa Cerdas yang sejalan dengan
                    program peningkatan Indeks Pembangunan Manusia (IPM).
                    Melalui digitalisasi perdesaan inidesaku.id ini, ketahanan
                    masyarakat desa (yang berdampak pada ketahanan nasional)
                    dibangun-kembangkan melalui pemberdayaan masyarakat desa di
                    bidang ekonomi, sosial dan budaya yang bertumpu pada visi
                    yang akan meningkatkan perekonomian serta kesejahteraan
                    masyarakat. Inilah program unggulan membangun Desa Digital
                    yang akan menjadi daya dukung terwujudnya Desa Cerdas (Smart
                    Kampung) menuju Kota Cerdas (Smart City).
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-start g-3 py-5">
            <Col>
              <h1 className="heading text-center">
                Apa Saja Tujuan dari Inidesaku?
              </h1>

              <Row className="justify-content-arround g-3 pt-5">
                <Col lg={3}>
                  <Stack direction="vertical" gap={3}>
                    <div className="text-center">
                      <HiMiniUserGroup size="40" color="#fff" />
                      <h5>Smart Society</h5>
                      <p>Sinergi Komunitas Desa</p>
                    </div>
                  </Stack>
                </Col>
                <Col lg={3}>
                  <Stack direction="vertical" gap={3}>
                    <div className="text-center">
                      <HiOutlineChartBar size="40" color="#fff" />
                      <h5>Smart Economy</h5>
                      <p>Sinergi Ketahanan Bidang Ekonomi Desa</p>
                    </div>
                  </Stack>
                </Col>
                <Col lg={3}>
                  <Stack direction="vertical" gap={3}>
                    <div className="text-center">
                      <HiOutlineBuildingOffice2 size="40" color="#fff" />
                      <h5>Smart Governance</h5>
                      <p>Pembangunan dan Pelayanan Desa Digital</p>
                    </div>
                  </Stack>
                </Col>
                <Col lg={3}>
                  <Stack direction="vertical" gap={3}>
                    <div className="text-center">
                      <HiOutlineBuildingLibrary size="40" color="#fff" />
                      <h5>Koperasi Digital</h5>
                      <p>
                        Sinergi Potensi Desa Secara Ekonomi dengan Koperasi
                        Digital
                      </p>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-faq py-5">
        <Container>
          <div className="d-flex justify-content-center mx-auto g-3">
            <h1 className="heading">Pertanyaan Umum</h1>
          </div>
          <div className="d-flex flex-column pt-4">
            <FaqItemList questions={faqQuestionData} />
          </div>
        </Container>
      </section>
    </>
  );
}
