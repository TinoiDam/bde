import Image from "next/image";

type SlideDeckPreviewProps = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
  className?: string;
};

export function SlideDeckPreview({
  title,
  href,
  imageSrc,
  imageAlt,
  tags = [],
  className = "",
}: SlideDeckPreviewProps) {
  const deckSrc = `${href}#page=1&view=Fit&toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className={`slide-preview ${className}`}>
      <div
        className="slide-preview__frame"
      >
        <object
          aria-label={title}
          data={deckSrc}
          type="application/pdf"
          className="slide-preview__deck"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="slide-preview__fallback"
          />
        </object>
        <a
          href={href}
          title={title}
          className="slide-preview__open-link"
        >
          Open deck
        </a>
      </div>
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
