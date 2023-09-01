import Button from '@app/components/atoms/Button/Button';
import Header from '@app/components/organisms/Header/Header';
import ThemePicker from '@app/components/organisms/ThemePicker/ThemePicker';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="grid-container pt-[200px]">
        <h1 className="text-6xl lg:col-start-2 col-span-full mb-5 two-color">
          Page <strong>Not Found</strong>!
        </h1>
        <Button
          className="lg:col-start-2 col-span-full w-fit"
          color="primary"
          hasBorderEffect
          href="/"
          size="lg"
        >
          Go to Home Page
        </Button>
        <ThemePicker />
      </div>
    </>
  );
}
