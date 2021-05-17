import Header from './Header';
import Meta from './Meta';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title = "El Mayo's HOME" }: Props) {
  return (
    <>
      <Meta title={title} />
      <div className="max-w-6xl mx-auto">
        <Header />
        <main className="mx-auto pt-4 pb-12">{children}</main>
      </div>
    </>
  );
}
