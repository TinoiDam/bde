import Image from "next/image";

type SlideDeckPreviewProps = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  className?: string;
  compact?: boolean;
};

export function SlideDeckPreview({
  title,
  href,
  imageSrc,
  imageAlt,
  tags = [],
  className = "",
  compact = false,
}: SlideDeckPreviewProps) {
  return (
    <div className={`slide-preview ${className}`}>
      <a
        href={href}
        aria-label={title}
        className={`slide-preview__frame${compact ? " slide-preview__frame--compact" : ""}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 620px, 100vw"
          className="slide-preview__image"
        />
      </a>
      {tags.length > 0 ? (
        <div className="slide-preview__tags" aria-label="Deck keywords">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
