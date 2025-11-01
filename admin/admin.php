<?php

/**
 * Post types
 */
require get_template_directory() . '/admin/helpers/post-types.php';

/**
 * Add for head something
 */
require_once get_template_directory() . '/admin/helpers/add-to-head.php';


/**
 * Shortcode cf7
 */
require_once get_template_directory() . '/admin/helpers/cf7.php';


/**
 * Render color
 */
// require get_template_directory() . '/admin/helpers/render-color.php';


/**
 * SEO
 */
require get_template_directory() . '/admin/helpers/seo-meta.php';


/**
 * Sitemap
 */
require get_template_directory() . '/admin/helpers/sitemap.php';


/**
 * Register Gutenberg blocks and assets
 */
require_once get_template_directory() . '/admin/helpers/include-custom-gutenberg-blocks.php';