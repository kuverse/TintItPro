"use client";
import React from "react";

interface MovieViewingComponentProps {
  videoId: string;
  title?: string;
  description?: string;
  uploadDate?: string; // Format: "2024-03-25"
  thumbnailUrl?: string;
}

const MovieViewingComponent: React.FC<MovieViewingComponentProps> = ({
  videoId,
  title = "Tint It Pro Marble Protection Video",
  description = "Watch how Tint It Pro protects marble surfaces using TuffSkin film.",
  uploadDate = "2024-03-10",
  thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate,
    contentUrl: videoUrl,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    publisher: {
      "@type": "Organization",
      name: "Tint It Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://tintitpro.netlify.app/images/logo.png", // replace with your real logo URL
      },
    },
  };

  return (
    <section
      aria-labelledby="video-title"
      style={{
        width: "100%",
        backgroundColor: "var(--primary)",
        padding: "50px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "80px",
      }}
    >
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <figure
        style={{
          width: "90%",
          maxWidth: "1200px",
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          border: "5px solid #fff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
        <figcaption
          id="video-title"
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {title}
        </figcaption>
      </figure>
    </section>
  );
};

export default MovieViewingComponent;
