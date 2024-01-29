import { Button, Card, Stack } from 'react-bootstrap';
import '@/styles/program-featured.css';
import Image from 'next/image';

export default function ProgramFeaturedItem() {
  return (
    <Card body className="program-featured-item">
      <Image
        src="https://inidesaku.id/images/icons/geospasial.svg"
        width={60}
        height={60}
        alt=""
        className="img-fluid program-featured__images"
        priority
      />

      <Stack direction="vertical" gap={2}>
        <h3 className="program-featured__title">Berita Desa</h3>
        <div className="program-featured__description">
          Fitur Berita Desa meliputi: Berita Umum, Geospasial Desa, Layanan
          Desa, Kegiatan Desa, Wisata Desa dan Budaya Lokal
        </div>
      </Stack>

      <Button
        type="button"
        variant="dark"
        className="program-featured__actionbtn"
      >
        Selengkapnya -
      </Button>
    </Card>
  );
}
