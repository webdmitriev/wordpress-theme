import { useState } from '@wordpress/element';
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useAutoLinking } from '../../utils/useAutoLinking';
import AutoLinkingPanel from '../../utils/AutoLinkingPanel';
import VideoHelpPanel from './controls/VideoHelpPanel';
import ContentPanel from './controls/ContentPanel';

const Edit = ({ attributes, setAttributes }) => {
  const {
    title,
    subTitleOne,
    divider,
    subTitleTwo,
    descr,
    imageUrl,
    imageId,
  } = attributes;

  const [isPreview, setIsPreview] = useState(true);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const blockProps = useBlockProps({
    className: 'development mgu-main'
  });

  // Используем хук авто-линкинга
  const { autoLinkContent, postsCount } = useAutoLinking();

  // Обработчик авто-линкинга
  const handleAutoLink = () => {
    autoLinkContent(attributes, setAttributes, ['subTitleOne', 'subTitleTwo', 'descr']);
  };

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

  return (
    <>
      <InspectorControls>
        <VideoHelpPanel />
        <ContentPanel attributes={attributes} setAttributes={setAttributes} />

        {/* Добавляем панель авто-линкинга */}
        <AutoLinkingPanel
          onAutoLink={handleAutoLink}
          postsCount={postsCount}
          disabled={postsCount === 0}
        />
      </InspectorControls>

      <div {...blockProps}>
        <div className="advanced-block">
          <div className="block-info" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <span className="block-info-title">🎨 Главный блок</span>
            <ToggleControl
              label={isPreview ? __('Редактирование ✍️', 'theme') : __('Предпросмотр ☺️', 'theme')}
              checked={isPreview}
              onChange={togglePreview}
            />
          </div>

          {isPreview && (
            <div className="advanced-block-content">
              <div className="rich-text">
                <span>{__('Заголовок', 'theme')}</span>
                <RichText
                  tagName="h1"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__('Заголовок...', 'theme')}
                  allowedFormats={['core/bold']}
                />
              </div>
              <div className="rich-text">
                <span>{__('Подзаголовок', 'theme')}</span>
                <RichText
                  tagName="p"
                  value={subTitleOne}
                  onChange={(value) => setAttributes({ subTitleOne: value })}
                  placeholder={__('Подзаголовок...', 'theme')}
                  allowedFormats={['core/bold', 'core/italic', 'core/link']}
                />
              </div>
              <div className="rich-text">
                <span>{__('Подзаголовок', 'theme')}</span>
                <RichText
                  tagName="p"
                  value={subTitleTwo}
                  onChange={(value) => setAttributes({ subTitleTwo: value })}
                  placeholder={__('Подзаголовок...', 'theme')}
                  allowedFormats={['core/bold', 'core/italic', 'core/link']}
                />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                <div className="advanced-block-images" style={{ display: 'block', width: '100%', maxWidth: '32%' }}>
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
                                  ✏️ {__('Заменить', 'theme')}
                                </Button>
                                <Button
                                  onClick={onRemoveImage}
                                  variant="tertiary"
                                  size="small"
                                  isDestructive
                                >
                                  🗑 {__('Удалить', 'theme')}
                                </Button>
                              </div>
                            </>
                          ) : (
                            <Button onClick={open} variant="primary" style={{ overflow: 'hidden' }}>
                              📷 {__('Фоновая картинка', 'theme')}
                            </Button>
                          )}
                        </div>
                      )}
                    />
                  </MediaUploadCheck>
                </div>
                <div className="rich-text" style={{ display: 'block', width: '100%', maxWidth: '66%' }}>
                  <span>{__('Подзаголовок', 'theme')}</span>
                  <RichText
                    tagName="p"
                    value={descr}
                    onChange={(value) => setAttributes({ descr: value })}
                    placeholder={__('Описание...', 'theme')}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />
                </div>
              </div>

            </div>
          )}

          {!isPreview && (
            <div className="advanced-block-preview">

              {imageUrl && (
                <>
                  <img
                    src={imageUrl}
                    className="mgu-main__bg"
                    alt=""
                    style={{ borderRadius: '8px' }}
                  />
                </>
              )}

              <div className="preview-content">
                <RichText.Content tagName="h1" value={title} className="h1" />
                <RichText.Content tagName="p" value={subTitleOne} className="sub_title" />
                <div className="divider"></div>
                <RichText.Content tagName="p" value={subTitleTwo} className="sub_title" />
                <RichText.Content tagName="p" value={descr} className="descr" />
              </div>
              <div className="wpcf7">
                Contact Form
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Edit;