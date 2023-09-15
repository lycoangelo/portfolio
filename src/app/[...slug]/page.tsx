import Header from '@app/components/organisms/Header/Header';

export default async function BlogPage() {
  return (
    <>
      <Header isHomepage />
      <main className="grid-container pt-24 mt-24">
        <h1 className="lg:col-start-2 lg:col-span-full text-5xl">Blog Page</h1>
      </main>
    </>
  );
}
