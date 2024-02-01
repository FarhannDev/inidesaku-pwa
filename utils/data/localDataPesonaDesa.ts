import generateCreateSlug from '../common/generateCreateSlug';
import { nanoid } from 'nanoid';

const pesonaDesaBeritaData: PesonaDesaBerita[] = [
  {
    id: `${generateCreateSlug('Indramayu Keren')}_${nanoid()}`,
    slug: generateCreateSlug('Indramayu Keren'),
    title: 'Indramayu Keren',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita2.png',
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Indramayu Indah')}_${nanoid()}`,
    slug: generateCreateSlug('Indramayu Indah'),
    title: 'Indramayu Indah',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita.png',
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },

  {
    id: `${generateCreateSlug('Sample Berita Indramayu ')}_${nanoid()}`,
    slug: generateCreateSlug('Sample Berita Indramayu'),
    title: 'Sample Berita Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita3.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },

  {
    id: `${generateCreateSlug('Sample Berita Indramayu 2')}_${nanoid()}`,
    slug: generateCreateSlug('Sample Berita Indramayu 2'),
    title: 'Sample Berita Indramayu 2',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita3.png',
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Sample Berita Indramayu 3')}_${nanoid()}`,
    slug: generateCreateSlug('Sample Berita Indramayu 3'),
    title: 'Sample Berita Indramayu 3',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita3.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Indramayu Good')}_${nanoid()}`,
    slug: generateCreateSlug('Indramayu Good'),
    title: 'Indramayu Good',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita4.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Jayanya Indramayu')}_${nanoid()}`,
    slug: generateCreateSlug('Jayanya Indramayu'),
    title: 'Jayanya Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita5.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Jayanya Indramayu')}_${nanoid()}`,
    slug: generateCreateSlug('Jayanya Indramayu'),
    title: 'Jayanya Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita5.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Jayanya Indramayu')}_${nanoid()}`,
    slug: generateCreateSlug('Jayanya Indramayu'),
    title:
      'Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di Indonesia',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover: '/images/pesona_desa/sample_pesona_desa_berita5.png',

    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
];

const pesonaDesaBudayaData: PesonaDesaBudaya[] = [
  {
    id: `${generateCreateSlug('Nadran Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Nadran Indramayu'),
    title: 'Nadran Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/f9d7/0dac/6989e244b11c5a3d0533f8cfc16dac2f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFaNIMoge5UFUCP5gdkMMPsQzpbpgwIOqob7S3vuIO~SX4no~ETSdOHOQ3hF6Qe~24m~lmEAtDDfjV6Y4ITfRYzYZ2kxgnjxdpCUb9h0IKQaBTjEEeWcaf5kdYmoU2WIih3pEr7Oc4~zLo2ismhfYkk1UJuj6DK7Tuv6xLXyAsFD2ZN-gF0RTRrQicya-a~VPMYzxgdyZinnl92~ekbMkcjD68tXk7~XmosqmZRzPdgxD1No5MWpygm-sSK5y8FYONQqL~9R0CBE5SEilzvsRvkXgxSfOK28FwStCWI0nfeHD1W0V2kNYL5TuPXk~SabzqFkkysZUHIuoq8u739EXg__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Ngarot Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Ngarot Indramayu'),
    title: 'Ngarot Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/f196/b3b6/2901f788fcfa0e366f200f735ab68b33?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwZFCMabn0nFSxlEpC1RUufmsDANr2eov6P7Q-HdWdUw6bhh1qMETzMGGfG9G8LHnmfxq2lenosNnMcmiF6-hrefyuu8~RbcozSjJK9H62wBJbSflhgS3ENPDjZNdsHY54G1q5c2vfywOYFNW~6JUYfTqgB~5o5qsNp5NgsqRGCclPH1Y1bBdQXq0qBvg4qvRdBMKFvk9scYB-F3XUr3qot7HYJocXDO6132XYVm-eqe2esv4XXuuzNFFMfNd9aucm5UdlYqyivxI75IyVd0EjKgPSSCuZ2Sf-VLAdlDtqVBXnOmN35o13Tv9Pz4S0Dj8yv8PmonqOmHV7bZ5ECtGQ__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Mapag Tamba Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Mapag Tamba Indramayu'),
    title: 'Mapag Tamba Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/db72/0bf6/995a22b4eea604da09d680a5ffdf59f9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfXWBpwz5aM8kd2ra9JIuX-6eF2mJ-vk0OmDzqNzdObYOjPRlkItpldRILbkssAwxdhkjOlpwW1mRuR1q8PvKECUu3KvJVMS56hieoz-RCw9hiC6~8KHubHunI-Z6ehT0TNqFgosdaJq6DuQJSDjZF5EWlgNJ9qxbFxnTqjT0tec0ZQfLorHP5mqA3zQRuaTOmRY4LTcqXyRmFG0Rzo-6uTTeNE5XMWdn2IqoG-PojWk1mkv61c-50dlL8ra1hTnbUUoWgKtlwKvWneuDcQxiY578oUqBUBjQoSnLyz-SNEa6FISqw4I6OQq4pURxAkb2qQ8TbGhLFGfP4Zp1tl6sQ__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Mapag Tamba Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Mapag Tamba Indramayu'),
    title: 'Mapag Tamba Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/db72/0bf6/995a22b4eea604da09d680a5ffdf59f9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfXWBpwz5aM8kd2ra9JIuX-6eF2mJ-vk0OmDzqNzdObYOjPRlkItpldRILbkssAwxdhkjOlpwW1mRuR1q8PvKECUu3KvJVMS56hieoz-RCw9hiC6~8KHubHunI-Z6ehT0TNqFgosdaJq6DuQJSDjZF5EWlgNJ9qxbFxnTqjT0tec0ZQfLorHP5mqA3zQRuaTOmRY4LTcqXyRmFG0Rzo-6uTTeNE5XMWdn2IqoG-PojWk1mkv61c-50dlL8ra1hTnbUUoWgKtlwKvWneuDcQxiY578oUqBUBjQoSnLyz-SNEa6FISqw4I6OQq4pURxAkb2qQ8TbGhLFGfP4Zp1tl6sQ__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Mapag Tamba Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Mapag Tamba Indramayu'),
    title: 'Mapag Tamba Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/db72/0bf6/995a22b4eea604da09d680a5ffdf59f9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfXWBpwz5aM8kd2ra9JIuX-6eF2mJ-vk0OmDzqNzdObYOjPRlkItpldRILbkssAwxdhkjOlpwW1mRuR1q8PvKECUu3KvJVMS56hieoz-RCw9hiC6~8KHubHunI-Z6ehT0TNqFgosdaJq6DuQJSDjZF5EWlgNJ9qxbFxnTqjT0tec0ZQfLorHP5mqA3zQRuaTOmRY4LTcqXyRmFG0Rzo-6uTTeNE5XMWdn2IqoG-PojWk1mkv61c-50dlL8ra1hTnbUUoWgKtlwKvWneuDcQxiY578oUqBUBjQoSnLyz-SNEa6FISqw4I6OQq4pURxAkb2qQ8TbGhLFGfP4Zp1tl6sQ__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
  {
    id: `${generateCreateSlug('Mapag Tamba Indramayu')}-${nanoid()}`,
    slug: generateCreateSlug('Mapag Tamba Indramayu'),
    title: 'Mapag Tamba Indramayu',
    content: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
  
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    cover:
      'https://s3-alpha-sig.figma.com/img/db72/0bf6/995a22b4eea604da09d680a5ffdf59f9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FfXWBpwz5aM8kd2ra9JIuX-6eF2mJ-vk0OmDzqNzdObYOjPRlkItpldRILbkssAwxdhkjOlpwW1mRuR1q8PvKECUu3KvJVMS56hieoz-RCw9hiC6~8KHubHunI-Z6ehT0TNqFgosdaJq6DuQJSDjZF5EWlgNJ9qxbFxnTqjT0tec0ZQfLorHP5mqA3zQRuaTOmRY4LTcqXyRmFG0Rzo-6uTTeNE5XMWdn2IqoG-PojWk1mkv61c-50dlL8ra1hTnbUUoWgKtlwKvWneuDcQxiY578oUqBUBjQoSnLyz-SNEa6FISqw4I6OQq4pURxAkb2qQ8TbGhLFGfP4Zp1tl6sQ__',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/25a3/e665/44db6d73cbe162f07133d06d50c76700?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRculeV30qxodqZqnMtvl2Zj8-icg9WdhjTFEpAU8trDGyTZo-Am1kASla8Ep3Ax~6VTJsahvkvAqncPdouKnu19g40pos7e2lZxL8S-wXkxx58REz9TC3XOigTecgDc~bw4qocYWY9RYUZPzeHlVqs3V16j8uyIAN0eLGAS5mBc2ZJ6pbJhItEsuwglosjBXkUf0c0WHu5cFLTgC-XNpE0-VxQ8DbjtzmLfKDn1o83gOUzy33pM6ksiV3mhPd8J-tM6aQfhipnBheTv3jhDqkL5As~qwTaFGNAoJZF7GQ5jawKlfWzFPeqIArH817-it2UymepTdpugqHreuIibVg__',
      'https://s3-alpha-sig.figma.com/img/37e3/0778/54fa40a5fb38578b9b54e9eb49f1a2f6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T39PY3kpGeHgwOcIXAf1c5JFkIeyAmH5n3kWXJrAlaAjovAMUs-EDHPdA2ugsQR3YztVYym-iiLJn9IOhGGW3zfvF5a9BjDk2rWL7IvyRcZGSzGUIlZoXHQ9JNdcENvyxM-f~eqeTPtRlWdEetpenN-U6nuJ4Fw134fdaytVFhGg4jErH2zc0AWddnROYUSlLLD0h4U1mRgWliGCCB8J~AFd3XfXKES8~Cn99H9dG-ZfXL8tLiNoR76RG7Pu2K9auuTbeFvI6xfsXaUwJg2g8Z7av0OtAg4hLqhpAaQJgEz8fo0M4tVXXm-moRPHuBt~yGm39E0Tno2NNOxmTSjyug__',
      'https://s3-alpha-sig.figma.com/img/b05c/9ef1/b0033f8e7f7b79e414ecde6baf4278a4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJo1p4JoTiqq1OlvsLixWhfaQPBXsRxSjkU9tBykn77BMi4yE27Z1VHkTGtkGqzg3EwX6kHSLo8sE-Funw12m7IdLOBf6~tc48Trx0U0SbTXjd-aW-BWaFbhg-iOGZqoooL1ErFB1AkR-XOYopcZGl~TSTiOg-2dEeOoCUuxdT6vuWpbykudFi6AV~xKdLdHAdw1uNYmIQWF~Z~kLXQf0laJrqPCOx~T7eOY795ibEJVtqv9SuGePpl7xFzO4cwW37xP5ryWNPz7tGS7Y-~fSCFPwCh2YmQW2V-ud8NKoyVJ6~j8Xm43SNfwnLAnQkyENGzLC8y65zlBJZaqRMQxLA__',
      'https://s3-alpha-sig.figma.com/img/ca56/f796/29f9641f54048cbab78cba9e62483ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96PdsvLHM7ffmDrd3GkbMh-~-qwpxMkAQGdPvWbAjVoQ~EM-HXbPVX-mLD948GhnctX4GUK3iwtFjM6Yg-WdB4jyKrYt~1Z3Gr6rDFgcZtOSugI9vjPy5stEsCDjEbgszgRXIrsfWBInywuUw~RFkAWY3qsXDuxMtkGfoTLeuDGTUIrVtGgtB-w~VKXR29ILL5On3V70zj9hijnp4klvwPYW9PKkSYY49wZ3X0am7pnGiN7HypOX2OEMhZqcec6PBVjHXJnsfZpce1hL8ZJUPKuCKcmlkzfQAFXOnT3rXxLejkJXzM7C2TWOjie~x88V3BcBLLRRfR~cWdBKfnQuQ__',
    ],
    user: 'Admin Desa',
    createdAt: new Date().toISOString(),
    totalViews: 0,
  },
];

export { pesonaDesaBeritaData, pesonaDesaBudayaData };
