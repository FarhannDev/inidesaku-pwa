interface Tvcc {
  id: string | number;
  slug: string;
  title: string;
  description: string | null;
  category: string[];
  status: string;
  thumbnail: string;
  date: string;
}

interface TvccDetail {
  tvcc: Tvcc;
  vidioSource: string;
  vidioSchedule: Array[{
    title: string;
    time: string;
  }];
}
