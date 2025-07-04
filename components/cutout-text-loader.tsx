export const LoaderPage = () => {
  return (
    <div className="h-dvh grid place-content-center w-full overflow-hidden">
      <CutoutTextLoader
        height="650px"
        background="white"
        imgUrl="/images/pakmuk-store.jpeg"
      />
    </div>
  );
};

export const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}: {
  height: string;
  background: string;
  imgUrl: string;
}) => {
  return (
    <div className="relative w-screen overflow-hidden" style={{ height }}>
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};
