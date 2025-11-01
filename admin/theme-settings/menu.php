<?php

defined('ABSPATH') || exit;

// Меню и подменю
function theme_settings_menu() {
  add_menu_page(
    'Theme Settings',
    'Theme Settings',
    'manage_options',
    'theme-settings',
    'theme_settings_page_content',
    'dashicons-admin-tools',
    80
  );

  add_submenu_page(
    'theme-settings',
    'Theme Settings',
    'Settings',
    'manage_options',
    'theme-settings',
    'theme_settings_page_content'
  );

  add_submenu_page(
    'theme-settings',
    'Video Instructions',
    'Video Instructions',
    'manage_options',
    'theme-instructions',
    'theme_instructions_page_content'
  );
}
add_action('admin_menu', 'theme_settings_menu');
