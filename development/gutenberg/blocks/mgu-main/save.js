import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const {
    title,
    subTitleOne,
    divider,
    subTitleTwo,
    descr,
    imageUrl,
    imageSrcSet,   // массив или строка с srcSet
    imageSizes,    // атрибут sizes
    imageAlt,      // alt текст
    imageWebp,     // webp версия, если есть
    cf7
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `mgu-main`,
  });

  return (
    <main {...blockProps}>
      {imageUrl && (
        <picture>
          {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
          <img
            className="mgu-main__bg"
            src={imageUrl}
            srcSet={imageSrcSet}
            sizes={imageSizes || '100vw'}
            alt={imageAlt || title || 'background'}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </picture>
      )}
      <div className="container df-sp-ce">
        <div className="mgu-main__content">
          {title && (
            <RichText.Content
              tagName="h1"
              value={title}
              className="h1"
            />
          )}
          {subTitleOne && (
            <RichText.Content
              tagName="p"
              value={subTitleOne}
              className="sub_title"
            />
          )}
          {divider && (
            <div className="divider"></div>
          )}
          {subTitleTwo && (
            <RichText.Content
              tagName="p"
              value={subTitleTwo}
              className="sub_title"
            />
          )}
          {descr && (
            <RichText.Content
              tagName="p"
              className="descr"
              value={descr}
            />
          )}

        </div>
        {cf7 && (cf7)}
      </div>
    </main>
  );
};

export default Save;
