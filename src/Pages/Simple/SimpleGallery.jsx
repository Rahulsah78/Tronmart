import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function SimpleGallery({ galleryID, images, isOpen, onClose }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    // Open the lightbox programmatically when `isOpen` is true
    if (isOpen && images.length) {
      lightbox.loadAndOpen(0);
    }

    return () => {
      lightbox.destroy();
    };
  }, [galleryID, isOpen, images]);

  return (
    <div className="pswp-gallery hidden" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}
