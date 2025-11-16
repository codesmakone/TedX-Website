export default function FlipImage({ front, back, alt = "" }) {
  return (
    <div
      className="w-full aspect-square cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <div
        className="
          relative w-full h-full 
          transition-transform duration-1000 ease-in-out
          [transform-style:preserve-3d]
          hover:[transform:rotateY(180deg)]
        "
      >
        <img
          src={front}
          alt={alt}
          className="absolute w-full object-contain"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        <img
          src={back}
          alt={alt}
          className="absolute object-contain"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>
    </div>
  );
}
