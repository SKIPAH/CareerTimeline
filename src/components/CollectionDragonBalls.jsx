
export default function CollectionDragonBalls() {
  const DRAGON_BALLS = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    src: `src/files/images/dbz/${i + 1}star.png`,
    alt: `${i + 1} star dragon ball`,
  }));

  return (
    <div className="dragon-balls-container">
      {DRAGON_BALLS.map(({ id, src, alt }) => (
        <img
          key={id}
          id={`dragon-ball-${id}`}
          src={src}
          alt={alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}


