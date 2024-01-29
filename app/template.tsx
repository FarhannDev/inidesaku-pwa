import HeaderTopNavigation from '@/components/navigation/HeaderTopNavigation';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="__next">
      <HeaderTopNavigation />
      <main>{children}</main>
    </div>
  );
}
