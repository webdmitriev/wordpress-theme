<?php

defined('ABSPATH') || exit;


/*
 * wpcf7
 */
add_filter('wpcf7_autop_or_not', '__return_false');


function custom_cf7_tag() {
  wpcf7_add_form_tag('current_url', 'custom_cf7_text_handler');
}
add_action('wpcf7_init', 'custom_cf7_tag');

function custom_cf7_text_handler($tag) {
  return get_home_url(null, '/');
}