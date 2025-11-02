/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./development/gutenberg/blocks/mgu-main/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/attributes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: {
    type: 'string',
    default: ''
  },
  subTitleOne: {
    type: 'string',
    default: ''
  },
  divider: {
    type: 'bool',
    default: true
  },
  subTitleTwo: {
    type: 'string',
    default: ''
  },
  descr: {
    type: 'string',
    default: ''
  },
  imageUrl: {
    type: 'string',
    default: ''
  },
  imageId: {
    type: 'number',
    default: 0
  }
});

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js":
/*!************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/useTypograf */ "./development/gutenberg/utils/useTypograf.js");




const ContentPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    subTitleOne,
    subTitleTwo,
    descr
  } = attributes;

  // Подключаем общий хук
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title', 'subTitleOne', 'subTitleTwo', 'descr']);
  const hasTextToTypograph = title || subTitleOne || subTitleTwo || descr;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типограф', 'theme'),
    initialOpen: false
  }, hasTextToTypograph && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '20px',
      padding: '10px',
      background: '#f6f7f7',
      borderRadius: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    gap: "10px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: typographAllFields,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типографировать все поля', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: '12px',
      color: '#757575',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Расставит кавычки, тире и неразрывные пробелы', 'theme')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const VideoHelpPanel = () => {
  const [isVideoOpen, setIsVideoOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const videoPath = `${themeData.uploadUrl}/main.mov`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Инструкции', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => setIsVideoOpen(true),
    icon: "video-alt3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Смотреть видео', 'theme'))), isVideoOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Видео инструкция к блоку', 'theme'),
    onRequestClose: () => setIsVideoOpen(false),
    className: "help-video-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: videoPath,
    controls: true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px'
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoHelpPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/useAutoLinking */ "./development/gutenberg/utils/useAutoLinking.js");
/* harmony import */ var _utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/AutoLinkingPanel */ "./development/gutenberg/utils/AutoLinkingPanel.js");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js");









const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    subTitleOne,
    divider,
    subTitleTwo,
    descr,
    imageUrl,
    imageId
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development'
  });

  // Используем хук авто-линкинга
  const {
    autoLinkContent,
    postsCount
  } = (0,_utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_5__.useAutoLinking)();

  // Обработчик авто-линкинга
  const handleAutoLink = () => {
    autoLinkContent(attributes, setAttributes, ['title', 'subTitleOne', 'subTitleTwo', 'descr']);
  };

  // Handlers
  const onSelectImage = media => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id
    });
  };
  const onRemoveImage = () => {
    setAttributes({
      imageUrl: '',
      imageId: 0
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAutoLink: handleAutoLink,
    postsCount: postsCount,
    disabled: postsCount === 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info"
  }, "\uD83C\uDFA8 \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u043B\u043E\u043A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: ['core/bold']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: subTitleOne,
    onChange: value => setAttributes({
      subTitleOne: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок...', 'theme'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: subTitleTwo,
    onChange: value => setAttributes({
      subTitleTwo: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок...', 'theme'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link']
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/editor.scss":
/*!***********************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/editor.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/mgu-main/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/mgu-main/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/mgu-main/attributes.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./development/gutenberg/blocks/mgu-main/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./development/gutenberg/blocks/mgu-main/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/main-block', {
  title: 'Main block',
  category: 'webdmitriev',
  icon: 'admin-customizer',
  description: ' ',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
console.log('✅ Main block');

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/save.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const {
    title,
    subTitleOne,
    divider,
    subTitleTwo,
    descr,
    imageUrl,
    items
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `mgu-main`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, "www"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/style.scss":
/*!**********************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/style.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./development/gutenberg/formats/li-format.js":
/*!****************************************************!*\
  !*** ./development/gutenberg/formats/li-format.js ***!
  \****************************************************/
/***/ (() => {

const {
  registerFormatType,
  toggleFormat
} = wp.richText;
const {
  RichTextToolbarButton
} = wp.blockEditor;
const {
  createElement
} = wp.element;
registerFormatType('theme/li-format', {
  title: 'Custom List Item',
  tagName: 'span',
  className: 'custom-list',
  edit({
    isActive,
    value,
    onChange
  }) {
    return createElement(RichTextToolbarButton, {
      icon: 'editor-ul',
      // или свой svg
      title: 'Псевдо-элемент списка',
      onClick: () => {
        onChange(toggleFormat(value, {
          type: 'theme/li-format'
        }));
      },
      isActive
    });
  }
});

/***/ }),

/***/ "./development/gutenberg/index.js":
/*!****************************************!*\
  !*** ./development/gutenberg/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seo_panel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo-panel.js */ "./development/gutenberg/seo-panel.js");
/* harmony import */ var _formats_li_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/li-format.js */ "./development/gutenberg/formats/li-format.js");
/* harmony import */ var _formats_li_format_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_formats_li_format_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_mgu_main_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/mgu-main/index.js */ "./development/gutenberg/blocks/mgu-main/index.js");



// Добавляем новую категорию "WebDmitriev Blocks"
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerCategory', 'theme/register-custom-category', (categories, _) => {
  if (!categories.some(cat => cat.slug === 'webdmitriev')) {
    return [...categories, {
      slug: 'webdmitriev',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('NZ OVERSEAS Blocks', 'theme'),
      icon: 'star-filled'
    }];
  }
  return categories;
});

// CEO


// import blocks
// import './formats/list-format.js';


// import './blocks/main/index.js';
// import './blocks/form/index.js';

/***/ }),

/***/ "./development/gutenberg/seo-panel.js":
/*!********************************************!*\
  !*** ./development/gutenberg/seo-panel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);







const SeoTab = () => {
  const meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor').getEditedPostAttribute('meta'), []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const updateMeta = (field, value) => {
    editPost({
      meta: {
        ...meta,
        [field]: value
      }
    });
  };
  const onSelectImage = field => image => {
    updateMeta(field, image.url);
  };
  const onRemoveImage = field => () => {
    updateMeta(field, '');
  };
  const ImageControl = ({
    label,
    value,
    help,
    field
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: label,
    help: help
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '8px'
    }
  }, value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: value,
    alt: "Preview",
    style: {
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '150px',
      display: 'block'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
    onSelect: onSelectImage(field),
    allowedTypes: ['image'],
    value: value,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      onClick: open,
      style: {
        marginRight: '8px'
      }
    }, value ? 'Заменить изображение' : 'Выбрать изображение'), value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "tertiary",
      isDestructive: true,
      onClick: onRemoveImage(field)
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    target: "seo-sidebar"
  }, "\u0421\u0415\u041E"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "seo-sidebar",
    title: "SEO \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    icon: "admin-site"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "SEO Description",
    value: meta._seo_description || '',
    onChange: value => updateMeta('_seo_description', value),
    help: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SEO Keywords",
    value: meta._seo_keywords || '',
    onChange: value => updateMeta('_seo_keywords', value),
    help: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "OG Title",
    value: meta._og_title || '',
    onChange: value => updateMeta('_og_title', value),
    help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F Facebook \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "OG Description",
    value: meta._og_description || '',
    onChange: value => updateMeta('_og_description', value),
    help: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageControl, {
    label: "OG Image",
    value: meta._og_image || '',
    help: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439",
    field: "_og_image"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Twitter Title",
    value: meta._twitter_title || '',
    onChange: value => updateMeta('_twitter_title', value),
    help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F Twitter"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "Twitter Description",
    value: meta._twitter_description || '',
    onChange: value => updateMeta('_twitter_description', value),
    help: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F Twitter"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageControl, {
    label: "Twitter Image",
    value: meta._twitter_image || '',
    help: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F Twitter",
    field: "_twitter_image"
  }))));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('seo-tab', {
  render: SeoTab,
  icon: 'admin-site'
});

/***/ }),

/***/ "./development/gutenberg/utils/AutoLinkingPanel.js":
/*!*********************************************************!*\
  !*** ./development/gutenberg/utils/AutoLinkingPanel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Компонент панели авто-линкинга для InspectorControls
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onAutoLink - Функция вызываемая при клике
 * @param {number} props.postsCount - Количество доступных постов
 * @param {boolean} props.disabled - Отключена ли кнопка
 */
const AutoLinkingPanel = ({
  onAutoLink,
  postsCount,
  disabled = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Linking', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '12px',
      marginBottom: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Automatically link post titles found in content to their respective posts.', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: onAutoLink,
    disabled: disabled,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('🔗 Auto Link Posts', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '11px',
      marginTop: '8px',
      color: '#757575'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Available posts:', 'theme'), " ", postsCount))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoLinkingPanel);

/***/ }),

/***/ "./development/gutenberg/utils/useAutoLinking.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/utils/useAutoLinking.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAutoLinking: () => (/* binding */ useAutoLinking)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Хук для автоматического связывания текста с постами
 * @returns {Object} Объект с функциями и данными для авто-линкинга
 */
const useAutoLinking = () => {
  // Получаем все посты
  const allPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'post', {
      per_page: -1,
      status: 'publish'
    });
  }, []);

  /**
   * Функция для замены текста на ссылки
   * @param {string} text - Исходный текст
   * @returns {string} - Текст с ссылками
   */
  const replaceTextWithLinks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;

    // Сортируем посты по длине заголовка (сначала длинные)
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return; // Пропускаем короткие заголовки

      // Экранируем специальные символы для regex
      const escapedTitle = postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Улучшенное регулярное выражение для кириллицы и любых символов
      // Ищем границы слов для любых символов (включая кириллицу)
      const regex = new RegExp(`(^|[^\\p{L}\\d])${escapedTitle}(?![\\p{L}\\d])`, 'gui' // g - global, u - unicode, i - case insensitive
      );

      // Альтернативный вариант если не поддерживается unicode
      // const regex = new RegExp(
      //   `(^|[^a-zA-Zа-яА-ЯёЁ0-9])${escapedTitle}(?![a-zA-Zа-яА-ЯёЁ0-9])`, 
      //   'gi'
      // );

      // Проверяем, не находится ли уже в ссылке
      const linkRegex = new RegExp(`<a[^>]*>${escapedTitle}<\\/a>`, 'gi');
      if (!linkRegex.test(updatedText)) {
        const link = `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${postTitle}</a>`;
        updatedText = updatedText.replace(regex, `$1${link}`);
      }
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Альтернативная функция для сложных случаев с кириллицей
   */
  const replaceTextWithLinksAdvanced = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return;

      // Простая замена без сложных границ - работает для кириллицы
      const regex = new RegExp(`\\b${postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');

      // Более надежная проверка на существующие ссылки
      const existingLinkPattern = `<a[^>]*>.*?${postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?<\\/a>`;
      const linkRegex = new RegExp(existingLinkPattern, 'gi');
      if (!linkRegex.test(updatedText)) {
        const link = `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${postTitle}</a>`;
        updatedText = updatedText.replace(regex, link);
      }
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Улучшенная функция с ручной проверкой границ для кириллицы
   */
  const replaceTextWithLinksUnicode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);

    // Функция для проверки границ слова
    const isWordBoundary = char => {
      if (!char) return true; // Начало или конец строки
      const code = char.charCodeAt(0);
      // Проверяем на буквы (латиница, кириллица), цифры
      return !(code >= 65 && code <= 90 ||
      // A-Z
      code >= 97 && code <= 122 ||
      // a-z
      code >= 1040 && code <= 1103 ||
      // Кириллица
      code === 1105 || code === 1025 ||
      // ёЁ
      code >= 48 && code <= 57 // 0-9
      );
    };
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return;

      // Экранируем для regex
      const escapedTitle = postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedTitle, 'gi');

      // Проверяем существующие ссылки
      const linkRegex = new RegExp(`<a[^>]*>${escapedTitle}<\\/a>`, 'gi');
      if (linkRegex.test(updatedText)) return;

      // Заменяем с ручной проверкой границ
      updatedText = updatedText.replace(regex, (match, offset, original) => {
        // Проверяем границы перед и после совпадения
        const before = original[offset - 1];
        const after = original[offset + match.length];
        if (isWordBoundary(before) && isWordBoundary(after)) {
          return `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${match}</a>`;
        }
        return match; // Оставляем без изменений если не границы слова
      });
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Основная функция авто-линкинга
   * @param {Object} attributes - Атрибуты блока
   * @param {Function} setAttributes - Функция установки атрибутов
   * @param {Array} fields - Массив полей для обработки
   */
  const autoLinkContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((attributes, setAttributes, fields = ['title', 'subTitle', 'items']) => {
    if (!allPosts || allPosts.length === 0) return;
    const updates = {};

    // Обрабатываем простые текстовые поля
    const textFields = fields.filter(field => field !== 'items');
    textFields.forEach(field => {
      if (attributes[field]) {
        // Используем улучшенную функцию для кириллицы
        const updatedText = replaceTextWithLinksUnicode(attributes[field]);
        if (updatedText !== attributes[field]) {
          updates[field] = updatedText;
        }
      }
    });

    // Обрабатываем элементы (items)
    if (fields.includes('items') && attributes.items && attributes.items.length > 0) {
      const updatedItems = attributes.items.map(item => {
        if (item.content) {
          const updatedContent = replaceTextWithLinksUnicode(item.content);
          return {
            ...item,
            content: updatedContent !== item.content ? updatedContent : item.content
          };
        }
        return item;
      });

      // Проверяем, есть ли изменения
      const hasChanges = updatedItems.some((item, index) => item.content !== attributes.items[index].content);
      if (hasChanges) {
        updates.items = updatedItems;
      }
    }

    // Применяем обновления, если они есть
    if (Object.keys(updates).length > 0) {
      setAttributes(updates);
    }
  }, [allPosts, replaceTextWithLinksUnicode]);
  return {
    allPosts,
    autoLinkContent,
    replaceTextWithLinks: replaceTextWithLinksUnicode,
    // Экспортируем улучшенную версию
    postsCount: allPosts ? allPosts.length : 0
  };
};

/***/ }),

/***/ "./development/gutenberg/utils/useTypograf.js":
/*!****************************************************!*\
  !*** ./development/gutenberg/utils/useTypograf.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typographText: () => (/* binding */ typographText),
/* harmony export */   useTypograf: () => (/* binding */ useTypograf)
/* harmony export */ });
// src/utils/useTypograf.js
const typographText = text => {
  if (!text || typeof text !== 'string') return text;
  let result = text.replace(/\u00A0/g, ' ');

  // Кавычки (не стоит использовать тк ломает ссылки и атрибуты)
  // result = result.replace(/"([^"]+)"/g, '«$1»');

  // Тире между словами
  result = result.replace(/(\s)-(\s)/g, '$1—$2');

  // Короткое тире между числами
  result = result.replace(/(\d)\s*-\s*(\d)/g, '$1–$2');

  // Неразрывные пробелы после коротких слов
  const shortWords = ['в', 'и', 'к', 'с', 'у', 'о', 'а', 'я', 'он', 'но', 'за', 'из', 'от', 'до', 'по', 'не', 'на', 'из', 'без'];
  shortWords.forEach(word => {
    const regex = new RegExp(`(^|\\s)${word}(\\s|$|[.,!?])`, 'gi');
    result = result.replace(regex, `$1${word}\u00A0`);
  });

  // Неразрывные пробелы перед единицами измерения
  result = result.replace(/(\d+)\s*(руб|р|USD|\$|EUR|€|кг|г|см|м|км|ч|мин|сек)/gi, '$1\u00A0$2');
  return result;
};

// Универсальный хук для подключения к любому блоку
const useTypograf = (attributes, setAttributes, fields) => {
  const typographField = fieldName => {
    const value = attributes[fieldName];
    if (value) {
      setAttributes({
        [fieldName]: typographText(value)
      });
    }
  };
  const typographAllFields = () => {
    const newAttributes = {};
    fields.forEach(field => {
      if (attributes[field]) {
        newAttributes[field] = typographText(attributes[field]);
      }
    });
    setAttributes(newAttributes);
  };
  return {
    typographField,
    typographAllFields
  };
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunktheme_blocks"] = globalThis["webpackChunktheme_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./development/gutenberg/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map