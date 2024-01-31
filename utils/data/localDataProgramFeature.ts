const programFeature: ProgramFeature[] = [
  {
    id: 1,
    name: 'Pesona Desa',
    description: `Fitur Berita Desa meliputi:
    Berita Umum, Geospasial Desa, Layanan Desa, Kegiatan Desa, Wisata Desa dan Budaya Lokal`,
    tag: 'Berita Desa & Edukasi Desa',
    icons:
      'https://s3-alpha-sig.figma.com/img/d81f/7a71/ccfb910832c6bda1802663e9f44f9ca7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfQZHtg-x2XBqvEWK2lyOxGMj8IF~gzthpPAFCp~CD4kouU1G5TapO~vyl1T2VEgpGty4h8wrivlShT4H2rMRPkFw3cYRFJwJOuAhZlT8r0J4t5VtkMCVCKpyFZdhFKtP-7pt97WWaoyV~CNem6ejrAreK4LvVJ6UjdPehSQnc~qfpR73P5GwJkYolvQ9SDYKXXXMrNLqzMxJNqDJ6hv2yVTmnMWpxMA1ylWQJldmHdQ7UXPBkv5ykrLPYJgfRHhquom9ZOSRGmZGVtxqh2~zeme872PQAEziL3aoDvB11QWvUDIYzzaEiWRN1i2kfQ8mO2iIkWvjdm4yJC7l1rzQw__',
    links: '/program/pesona-desa',
  },
  {
    id: 2,
    name: 'Pemberdayaan Desa',
    description: `Program pemberdayaan masyarakat yang dibangun oleh DesaKu dalam penyediaan akses pendidikan, pelatihan dan penyuluhan untuk membantu masyarakat disetiap desa dimana tersedia ebook digital untuk setiap jenis pendidikan UKM dan pendidikan ber koperasi.    `,
    tag: 'Berita Desa & Edukasi Desa',
    icons:
      'https://s3-alpha-sig.figma.com/img/d3e5/760f/be41ac47725765d70b7c95c11f5832e9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ~IKKP1gCU2Uwha7T67fJya4CwNTi5RT2S76E8zC0-uxtDLjKQ2H7czjuouKbtG~1o-3WTSTNeGLDIPST5GQaU3pP-5nH0nTP2WopLtPDvKYuppu7-TeAv5AGR3z5o-xXgMpHOXYx7SErHKsXWz3N8GLLqDXx6Dqz5GJpCyjF8~1NUa8BotyeiiA1OQ4~IwA5V2XwQP4KTYhJthhSWuF5zlyAs4cfU7PmXyIOgWxuWPlWcND6qc305sDMg9J4HXPDPVAkioXVPwo9avGyynnWHRETN3mRlbiQkS7lTgHMFmzy1vfVya-cdTTQr2axbZ56n6SgBka2ICSRiO68G4AQ__',
    links: '/program/pemberdayaan-desa',
  },
  {
    id: 3,
    name: 'Layanan Desa',
    description: `Fitur ini menampilkan informasi tentang layanan yang disediakan oleh pemerintah desa, seperti pelayanan administrasi kependudukan, pelayanan kesehatan, dan pelayanan pendidikan. Untuk mengakses fitur ini, Anda dapat mengklik tombol “Layanan Desa” di Halaman Utama. `,
    tag: 'Berita Desa & Edukasi Desa',
    icons:
      'https://s3-alpha-sig.figma.com/img/85e5/eef7/60b20ef4e6a10fcf856822392799544c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OU8aQ9UoohpbbC79TwAqvvDcleknuPpvUG8TWXltY1mv8vS8BRr~RH6o2N0KPUENxIPIGEsjddfsp0sz5Tgdq5EDRTTAXXL5pc8M93GcnrjbVs-UZAr0K93xqegAm-tw-k6O9rFaDTc9ly2Zm8PDsvmHdBpxcrI~4GZA3VsFi9y7J8J8m76rD3Hdwb2jUzt-dulJH43~io8G8muaJLrVKycyQB8I5HhdpOUaWmGlSxGVl67gF~YsRe5X9nGLvW~kdmCd2KXscvQym7kDr0k~Gf8vxN~upfunZqt0gbsKUs9sGhSzsN-4Q2fgkSuoJTaAyg2R1u8ADc2uVP39lNPMPg__',
    links: '/program/layanan-desa',
  },
  {
    id: 4,
    name: 'Produk Unggulan',
    description: `Fitur ini memungkinkan pengguna untuk menemukan produk-produk unggulan dari desa. Pengguna dapat melihat foto, video, dan deskripsi tentang produk UMKM tersebut `,
    tag: 'Berita Desa & Edukasi Desa',
    icons:
      'https://s3-alpha-sig.figma.com/img/d3ea/0646/aa1158db8f03ed766bf9ba60c9d2e178?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfR9Vot5vLrKaEGM-VHLHk3LACVA41Gfd1~E~ckj6HPUMWNziVbLWb0icuCqS40kzg2PzUl0cIGh86I04SDH4Dz6AeZ5oVvheaSo9c8oX20nb7cA4S4pM8vB3iPDCyYJYuzZLDPgxYmHo7p0UjnqDgu2XgBMeP8iT4q3MBn6ZPaiD2tNawh4GrMoKiARviS6uKLPVggGmtw9gKHB3LDpivya59JOtbGkcQv~sjVNVX~zm5y76sRlAThFi~rTtEvjHHHxpPEdPw0WbxVfp0OXmEfxNeU6V2ySIVjKXo~ZpWyuwvX7yskaqV3kbuhWOBE2OWwYrR5ecgRC-O~Y2LePqg__',
    links: '/program/produk-unggulan',
  },
  {
    id: 5,
    name: 'TVCC',
    description: `Fitur ini memungkinkan pengguna untuk menonton siaran televisi dari desa seperti siaran berita, siaran hiburan, dan siaran edukasi. Fitur ini juga memungkinkan pengguna untuk melihat jadwal siaran televisi.`,
    tag: 'Ekonomi & Transaksi',
    icons:
      'https://s3-alpha-sig.figma.com/img/1780/6a96/b7b2d15898298fc2db87a7fe498d5562?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIMytklgQgluhgXTmXIQsJi8tapMGWCNG8~I8YO8y~g78RJCD9mIm9NYEu6BZOnwC8NrJj4uVE6HWNbrAHERwsPV1Zx~8PtSb51PR9U6xftHjHNCrUXfS727SINaSjGBT--iUawOMToF2kwVJjezAhj-5uq8aNeU2Jntk7mOj2bIiuwuP88J9nPPYYgSjrJVYwL4qBt-zkN6x~jk77sQ8fSvmKRAAljDs1MVBfHUKsVGmOQhY1rM0K7x5Qb99--AHG-Jsqt1cVv2d5LLNFo9N~bjijC5CR7vRgPkF9v2hji~boeVRwaQaOs9A8sYuR3AwVi0fqB9CPJrgyVJo-VLkA__',
    links: '/program/tvcc',
  },
  {
    id: 6,
    name: 'Donasi',
    description: `Fitur ini memungkinkan pengguna untuk memberikan donasi kepada desa. Pengguna dapat memilih jenis donasi yang ingin diberikan, seperti donasi Dhuafa, Sarana Desa, Tempat Ibadah, dan lainnya. `,
    tag: 'Ekonomi & Transaksi',
    icons:
      'https://s3-alpha-sig.figma.com/img/7d36/0384/8490ecff7017b937942e2593db41cb50?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PAX637J8BdYe8e5wtqbE~PQHvhA-LmgaxXR5wgWKYhgvA7aUoGVwz-FZYL-Lb1M4lJeUmEDiM1251JbgF3OD9SiY16pAaS2gh3oGF4nzmhw4tpQCI3vEeKa~Ot0XALr857MCsQwIrsXrnRlWagEudHQWlgKD6TJ3sfp-IfVj76jRxZwASQV9WcKnUBQvBqoiDCjKD3QSqdQsW5OXnHFGaH4Wvevlywju966jUzmntn2ZpxJrL4PcN-bxN2gdhmL8K98YIA8gsqj0RcahyEttKCUxGI37yjAgIVaMvWiBq5fWgEG99JbS2SJ8iKrO55iOSGDWn6l043M~kItzSjoMBw__',
    links: '/program/donasi',
  },
  {
    id: 7,
    name: 'Pasar Desa',
    description: `Fitur yang memungkinkan pengguna untuk membeli dan menjual produk desa secara online. Pengguna dapat melihat foto, video, dan deskripsi tentang produk tersebut.`,
    tag: 'Ekonomi & Transaksi',
    icons:
      'https://s3-alpha-sig.figma.com/img/1bb1/4548/4ebdf5822a15abadd6e9144698c471ea?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QTkVMd~GO2iqNSWoQtaF9dzqxPdABAU0Fa1n7M1yDgGNCS3xuJ8iGuugHslil2RVlAbUQfJstWGm8OetPgUrn2EyfdjQitjg48ORyDXkS35sZwT2F3DQaLiGWBZjP7fDqIe~EgYfXWf-7yYvfD0APjTR9s6ee53yM4rj7ehjfwNDfeN9PON6fU3p~yb9wVB2iipfpUT0hAncAIjFdjmdPCtkFsfnL74qWv-AtQIcC1qf8WTGGTetXfw6bIYz8n11bUctoXE3tcIcAyOogiQN5xDRhzC3tvlP0gc5DTsP9y5OhuZQzz-50~CIm~8XLvWxVeomCLFvLnu8gnV8a71xmg__',
    links: '/program/pasar-desa',
  },
  {
    id: 8,
    name: 'Koperasi Desa',
    description: `Koperasi yang dibangun oleh iniDesaKu dan terintegrasi disetiap desa yang bergerak dalam penyediaan kebutuhan masyarakat khususnya dalam pembangunan dan kesejahteraan ekonomi masyarakatnya.    `,
    tag: 'Ekonomi & Transaksi',
    icons:
      'https://s3-alpha-sig.figma.com/img/5db5/3d28/62eab5f30492f88a4e455a091b79672b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeMoZwtRMBOvy5Rpi2GGURkZP~LDa-NbvfVl~GHtf1U1pIxaSZcSg3ou0Fthb-ULbzKhb6xqP4erfzah4cMFv4wvGmy~ve2Qqm4gJhZc9YEuJnLgpHyeq61AVd7VIgs2qbef7rJYreh32HCy8c3fzU2a71xwpmLpLjxnODTY5ZN-S9WoLdVglPDpfrkA4XX-x0VpZXePCLzt~gn4Z5yAY0qtFoanCB0wfa7AzZgYuzjrUsdi8eKdndWxJxwDNQCM1LHztrkzKbSR8BA~t3D2vORoiH5gStOQvz~HfIqvEV30Yl-nJnA8PsCTv4x9jZ34vD94GnWHZwxDzHDJxaAwdQ__',
    links: '/program/koperasi-desa',
  },
];

export { programFeature };
