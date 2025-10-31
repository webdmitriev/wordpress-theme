import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit.js';
import Save from './save.js';
import attributes from './attributes.js';
import { __ } from '@wordpress/i18n';

import './editor.scss';

registerBlockType('theme/contact-form', {
  title: __('Contact Form 7 Block', 'theme'),
  icon: 'email',
  category: 'webdmitriev',
  description: __('Contact Form 7', 'theme'),
  attributes,
  edit: Edit,
  save: Save,
});
