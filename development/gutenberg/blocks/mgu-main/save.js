import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const {
    title,
    subTitleOne,
    divider,
    subTitleTwo,
    descr,
    imageUrl,
    items
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `mgu-main`,
  });

  return (
    <main {...blockProps}>
      <div className="container">
        www
      </div>
    </main>
  );
};

export default Save;
