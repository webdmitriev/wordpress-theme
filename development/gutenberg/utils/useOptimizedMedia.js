import { useCallback } from '@wordpress/element';

/**
 * Хук для выбора изображения и сохранения всех атрибутов
 * для оптимизированного вывода.
 */
export const useOptimizedMedia = (setAttributes) => {
  const onSelectImage = useCallback((media) => {
    if (!media || !media.url) return;

    const srcSet = media.sizes
      ? Object.values(media.sizes)
        .map((s) => `${s.url} ${s.width}w`)
        .join(', ')
      : '';

    // sizes можно кастомизировать под свою сетку
    const sizes = '(max-width: 768px) 100vw, 50vw';

    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
      imageAlt: media.alt || '',
      imageSrcSet: srcSet,
      imageSizes: sizes,
      imageWebp: media.webp || '', // если используешь плагин конвертации в WebP
    });
  }, [setAttributes]);

  return { onSelectImage };
};
