import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const layananDesaData: LayananDesa[] = [
  {
    id: `${generateCreateSlug(
      'Pemerintahan dan administrasi desa'
    )}_${nanoid()}`,
    title: 'Pemerintahan dan administrasi desa',
    slug: generateCreateSlug('Pemerintahan dan administrasi desa'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '09 Agustus 2023, 08.00 WIB',
    categories: 'Administrasi Desa',
  },
  {
    id: `${generateCreateSlug(
      'Pembangunan infrastruktur dan lingkungan'
    )}_${nanoid()}`,
    title: 'Pembangunan infrastruktur dan lingkungan',
    slug: generateCreateSlug('Pembangunan infrastruktur dan lingkungan'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Balai desa',
    date: '15 Agustus 2023, 10.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
  {
    id: `${generateCreateSlug(
      'Pemberdayaan masyarakat dan sosial'
    )}_${nanoid()}`,
    title: 'Pemberdayaan masyarakat dan sosial',
    slug: generateCreateSlug('Pemberdayaan masyarakat dan sosial'),
    cover: '/images/layanan_desa/icon-berita-layanan.png',
    content: `lipsum`,
    location: 'Kantor RW 013',
    date: '19 Agustus 2023, 12.00 WIB',
    categories: 'Pelayanan Sosial',
  },
];

const contentDetail = [
  {
    title: 'Persyaratan',
    content:
      'Membawa KTP, surat pindah, akta kelahiran dan akta kematian, surat keterangan domisili, pernyataan penghasilan, surat izin mendirikan bangunan. ',
  },
  {
    title: 'Rincian pelayanan',
    content:
      'Pelayanan Pemerintahan dan Administrasi Desa mencakup sejumlah kegiatan yang menggarisbawahi kelancaran pengelolaan administrasi serta kebijakan di tingkat desa. Pertama, dilakukan penataan data penduduk dan pembuatan dokumen administratif seperti Kartu Keluarga dan Akta Kelahiran.',
  },
  {
    title: 'Manfaat pelayanan',
    content:
      'Kegiatan Pemerintahan dan Administrasi Desa memiliki peran sentral dalam menyelenggarakan pelayanan desa yang efisien dan efektif. Melalui pengelolaan administrasi yang baik, pemerintahan desa mampu menciptakan lingkungan yang kondusif untuk pengembangan berbagai inisiatif dan program. ',
  },
];

export { layananDesaData, contentDetail };
