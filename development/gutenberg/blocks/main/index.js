import { registerBlockType } from '@wordpress/blocks';
import edit from './edit.js';
import save from './save.js';
import attributes from './attributes.js';

import './editor.scss';
import './style.scss';

registerBlockType('theme/main-block', {
  title: 'Main block',
  category: 'webdmitriev',
  icon: 'admin-customizer',
  description: ' ',
  attributes,
  edit,
  save,
});

console.log('✅ Main block');