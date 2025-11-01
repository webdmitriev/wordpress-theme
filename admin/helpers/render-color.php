<?php
function output_site_color_scheme_from_acf() {
  // Получаем выбранную схему с ACF (страница опций)
  $preset_key = get_field('color_scheme', 'option') ?: 'default';

  // Наборы цветов
  $presets = [
    'default' => [
      '--accent-01' => '#43c8ff',
      '--accent-02' => '#9aebfe',
      '--accent-03' => '#bef2ff',
      '--accent-03-rgba-03' => 'rgba(190, 242, 255, 0.3)',
      '--dark-color' => '#0e1c3f',
      '--text-color' => '#336b9c',
      '--bg-color' => '#f5fdff',
      '--h2-color' => '#336b9c',
      '--hover-menu' => '#9aebfe',
      '--hover-btn-white' => '#43c8ff',
      '--btn-gradient' => 'linear-gradient(45deg, #4481eb 0%, #04befe 100%)',
      '--shadow-gradient' => 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0, #f5fdff 100%)',
    ],
    'orange' => [
      '--accent-01' => '#ff6f00',
      '--accent-02' => '#ffa040',
      '--accent-03' => '#ffc180',
      '--accent-03-rgba-03' => 'rgba(255, 193, 128, 0.3)',
      '--dark-color' => '#3a1f00',
      '--text-color' => '#4e342e',
      '--bg-color' => '#fff3e0',
      '--h2-color' => '#e65100',
      '--hover-menu' => '#ffb74d',
      '--hover-btn-white' => '#ff6f00',
      '--btn-gradient' => 'linear-gradient(45deg, #ff6f00 0%, #ffa040 100%)',
      '--shadow-gradient' => 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0, #fff3e0 100%)',
    ],
    'gray' => [
      '--accent-01' => '#495057',
      '--accent-02' => '#6c757d',
      '--accent-03' => '#adb5bd',
      '--accent-03-rgba-03' => 'rgba(173, 181, 189, 0.3)',
      '--dark-color' => '#343a40',
      '--text-color' => '#f8f9fa',
      '--bg-color' => '#212529',
      '--h2-color' => '#adb5bd',
      '--hover-menu' => '#6c757d',
      '--hover-btn-white' => '#495057',
      '--btn-gradient' => 'linear-gradient(45deg, #343a40 0%, #adb5bd 100%)',
      '--shadow-gradient' => 'linear-gradient(180deg, rgba(33, 37, 41, 0) 0, #212529 100%)',
    ],
  ];

  $scheme = $presets[$preset_key] ?? $presets['default'];

  // Дополнительно: можно дать возможность переопределять отдельные цвета вручную через ACF
  // Например, создаёшь отдельные поля accent_01, bg_color и т.д.
  foreach ($scheme as $var => $val) {
    $field_name = str_replace(['--', '-'], ['', '_'], $var); // accent_01
    $acf_override = get_field($field_name, 'option');
    if ($acf_override) {
      $scheme[$var] = $acf_override;
    }
  }

  // Выводим в head
  echo "<style id='acf-color-scheme'>:root {";
  foreach ($scheme as $var => $val) {
    echo "{$var}: {$val};";
  }
  echo "}</style>";
}

// render icons theme
function render_theme_icon($index = 1) {
  // Получаем текущую цветовую тему
  $theme_color = get_field('color_scheme', 'option');

  // Допустимые цвета
  $allowed_colors = ['default', 'orange', 'green', 'turquoise', 'gray'];

  // Проверяем, существует ли тема — иначе "default"
  if (!in_array($theme_color, $allowed_colors)) {
    $theme_color = 'default';
  }

  // Формируем имя поля: icon_01_default / icon_02_orange и т.д.
  $field_name = sprintf('icon_%02d_%s', $index, $theme_color);

  // Получаем иконку из ACF опций
  $icon = get_field($field_name, 'option');

  if ($icon) {
    render_acf_image($icon, 'full', 'block-item__img');
  }
}
add_action('wp_head', 'output_site_color_scheme_from_acf');

function color_scheme_icons_for_inputs() {
  // Получаем выбранную схему из ACF (страница опций)
  $preset_key = get_field('color_scheme', 'option') ?: 'default';

  // Допустимые цвета
  $allowed_colors = ['default', 'orange', 'green', 'turquoise', 'gray'];

  // Если цвет не из списка — сбрасываем на default
  if (!in_array($preset_key, $allowed_colors)) {
    $preset_key = 'default';
  }

  // Массив соответствия: data-name → файл иконки (без цвета)
  $icons = [
    'your-name'    => 'icon-user',
    'your-phone'   => 'icon-phone',
    'your-address' => 'icon-map',
    'your-time'    => 'icon-time',
  ];

  // Начинаем стиль
  echo "<style>";
    foreach ($icons as $field_name => $icon_file) {
      $icon_path = get_stylesheet_directory_uri() . "/assets/img/icons/{$icon_file}-{$preset_key}.svg";
      echo ".wpcf7 .wpcf7-form [data-name={$field_name}]:after {";
      echo "background: url('{$icon_path}') center / contain no-repeat;";
      echo "}";
    }
  echo "</style>";
}
add_action('wp_head', 'color_scheme_icons_for_inputs');
