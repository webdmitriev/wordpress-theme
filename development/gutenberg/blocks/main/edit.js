import {
  useBlockProps,
  RichText,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import VideoHelpPanel from './controls/VideoHelpPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title,
    subTitle,
    imageUrl,
    imageId,
    items
  } = attributes;

  const blockProps = useBlockProps({
    className: 'main'
  });

  // Handlers
  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
    });
  };

  const onRemoveImage = () => {
    setAttributes({ imageUrl: '', imageId: 0 });
  };

  // Добавить новый элемент
  const addItem = () => {
    const newItems = [...items, {
      content: ``
    }];
    setAttributes({ items: newItems });
  };

  // Удалить элемент
  const removeItem = (index) => {
    if (items.length <= 1) return;
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({ items: newItems });
  };

  // Обновить элемент
  const updateItem = (index, field, value) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setAttributes({ items: newItems });
  };

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info">🎨 Main block</div>

          <div className="advanced-block-content">
            <div className="advanced-block-text">

              <RichText
                tagName="h1"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__('Add title...', 'theme')}
                allowedFormats={['core/bold', 'core/italic', 'core/link']}
                className="block-title"
              />

              {/* <RichText
                tagName="div"
                value={subTitle}
                onChange={(value) => setAttributes({ subTitle: value })}
                placeholder={__('Введите текст. Для списка: выделите текст и нажмите кнопку списка в тулбаре...', 'theme')}
                allowedFormats={[
                  'core/bold',          // Жирный
                  'core/italic',        // Курсив
                  'core/link',          // Ссылки
                  'core/strikethrough', // Зачеркнутый
                  'core/text-color',    // Цвет текста
                ]}
                className="block-content"
              /> */}

              <RichText
                tagName="div"
                value={subTitle}
                onChange={(value) => setAttributes({ subTitle: value })}
                placeholder={__('Введите текст и создавайте списки через тулбар...', 'theme')}
                allowedFormats={[
                  'core/bold',
                  'core/italic',
                  'core/link',
                  'core/strikethrough',
                  'core/text-color',
                  'theme/li-format'
                ]}
                className="block-content"
              />

            </div>

            <div className="advanced-block-images">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage}
                  allowedTypes={['image']}
                  value={imageId}
                  render={({ open }) => (
                    <div className="advanced-block-image">
                      {imageUrl ? (
                        <>
                          <img
                            src={imageUrl}
                            className="advanced-image-preview"
                            alt=""
                            style={{ borderRadius: '8px' }}
                          />
                          <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                            <Button onClick={open} variant="secondary" size="small">
                              ✏️ {__('Change', 'theme')}
                            </Button>
                            <Button
                              onClick={onRemoveImage}
                              variant="tertiary"
                              size="small"
                              isDestructive
                            >
                              🗑 {__('Delete', 'theme')}
                            </Button>
                          </div>
                        </>
                      ) : (
                        <Button onClick={open} variant="primary">
                          📷 {__('Add image', 'theme')}
                        </Button>
                      )}
                    </div>
                  )}
                />
              </MediaUploadCheck>
            </div>

            <div className="advanced-block-items">
              {items.map((item, index) => (
                <div key={index} className="repeater-item">
                  <div className="item-header">
                    {items.length > 1 && (
                      <Button
                        onClick={() => removeItem(index)}
                        variant="tertiary"
                        icon="trash"
                        isDestructive
                        className="remove-item-btn"
                      />
                    )}
                  </div>

                  <div className="item-content">
                    <div className="item-text-section">
                      <RichText
                        tagName="div"
                        value={item.content}
                        onChange={(value) => updateItem(index, 'content', value)}
                        placeholder={__('Add text...', 'theme')}
                        allowedFormats={[
                          'core/bold',
                          'core/italic',
                          'core/link',
                          'core/strikethrough',
                          'core/text-color',
                        ]}
                        className="block-content"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Кнопка добавления в конце */}
              <div className="repeater-footer">
                <Button
                  onClick={addItem}
                  variant="primary"
                  icon="plus"
                >
                  {__('Add element', 'theme')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
