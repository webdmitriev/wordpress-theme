import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { title, bgc, items } = attributes;

  const blockProps = useBlockProps.save({
    style: { backgroundColor: bgc },
    className: `mgu-advantages`,
  });

  return (
    <div {...blockProps}>
      <div className="repeater-block">
        <RichText.Content
          tagName="h2"
          value={title}
          className="repeater-title"
        />

        <div className="repeater-items">
          {items.map((item, index) => (
            <div key={index} className="repeater-item">
              {item.imageURL && (
                <div className="repeater-image">
                  <img
                    src={item.imageURL}
                    alt=""
                  />
                </div>
              )}

              <RichText.Content
                tagName="div"
                value={item.content}
                className="repeater-content"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Save;
