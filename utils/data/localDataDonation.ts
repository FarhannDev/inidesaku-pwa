import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const donation: Donation[] = [
  {
    id: nanoid(16),
    slug: generateCreateSlug(
      'Membantu pendidikan anak-anak korban gempa di Semarang'
    ),
    title: 'Membantu pendidikan anak-anak korban gempa di Semarang',
    cover: '/images/donation/sample_donation_full2.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Bencana Alam', 'Pendidikan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Bantu kami mewujudkan pendidikan berkualitas'),
    title: 'Bantu kami mewujudkan pendidikan berkualitas',
    cover: '/images/donation/sample_donation_full.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Pendidikan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Dukung program kesehatan untuk masyarakat'),
    title: 'Dukung program kesehatan untuk masyarakat',
    cover: '/images/donation/sample_donation_full3.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
  {
    id: nanoid(16),
    slug: generateCreateSlug('Peduli lingkungan: tanam pohon, selamatkan bumi'),
    title: 'Peduli lingkungan: tanam pohon, selamatkan bumi',
    cover: '/images/donation/sample_donation_full4.png',
    createdAt: new Date().toISOString(),
    user: 'Admin Desa',
    categories: ['Nasional', 'Kesehatan'],
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the \
  Lorem ipsum is placeholder text commonly used in the `,
  },
];

export { donation };
