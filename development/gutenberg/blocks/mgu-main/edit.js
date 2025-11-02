import { useState } from '@wordpress/element';
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, ToggleControl, Divider } from '@wordpress/components';
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

  const blockProps = useBlockProps({
    className: 'development'
  });

  // Используем хук авто-линкинга
  const { autoLinkContent, postsCount } = useAutoLinking();

  // Обработчик авто-линкинга
  const handleAutoLink = () => {
    autoLinkContent(attributes, setAttributes, ['title', 'subTitleOne', 'subTitleTwo', 'descr']);
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
          <div className="block-info">🎨 Главный блок</div>

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

          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;