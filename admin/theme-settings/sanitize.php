<?php

defined('ABSPATH') || exit;

// Регистрация и санитизация
function theme_settings_init() {
  register_setting('theme_settings_group', 'theme_settings', 'theme_settings_sanitize');
}
add_action('admin_init', 'theme_settings_init');

function theme_settings_sanitize($input) {
  $sanitized_input = [];

  if (isset($input['contact_info'])) {
    $sanitized_input['contact_info'] = [
      'phone' => sanitize_text_field($input['contact_info']['phone']),
      'email' => sanitize_email($input['contact_info']['email']),
    ];
  }

  if (isset($input['partners'])) {
    $sanitized_input['partners'] = [];
    foreach ($input['partners'] as $partner) {
      if (!empty($partner['text'])) {
        $sanitized_input['partners'][] = [
          'text' => sanitize_text_field($partner['text']),
          'link' => esc_url_raw($partner['link']),
        ];
      }
    }
  }

  return $sanitized_input;
}
