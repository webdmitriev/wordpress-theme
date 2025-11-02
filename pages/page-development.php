<?php
/*
 * Template Name: Development
*/


get_header();

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

<main class="mgu-main">
  <img class="mgu-main__bg" src="<?= $url; ?>/assets/img/mgu-main/mgu-main-1920.jpg" alt="alto" />
  <div class="container df-sp-ce">
    <div class="mgu-main__content">
      <h1 class="h1">Бакалавриат ВШБ МГУ</h1>
      <p class="sub_title">Управление бизнесом и предпринимательство</p>
      <p class="sub_title">4-х годичная программа управленческого образования</p>
      <p class="descr">Направлена на получение студентами общих знаний по бизнесу, управлению, экономике, другим социально-экономическим дисциплинам, освоение навыков управленческой деятельности, выработке у студентов передового взгляда на управленческий процесс и формирование основ поведения, позволяющего добиться успеха в деловых организациях</p>
    </div>
    <div class="wpcf7">
      <h3 class="form-title">Запросить презентацию</h3>
      <div class="form-group form-group-input">
        <span class="form-group_label">Имя</span>
        <input class="form-group_input" type="text" placeholder="Имя" />
        <span class="wpcf7-not-valid-tip">Важно заполнить это поле.</span>
      </div>
      <div class="form-group form-group-input">
        <span class="form-group_label">Фамилия</span>
        <input class="form-group_input" type="text" placeholder="Фамилия" />
        <span class="wpcf7-not-valid-tip">Важно заполнить это поле.</span>
      </div>
      <div class="form-group form-group-input">
        <span class="form-group_label">E-mail</span>
        <input class="form-group_input" type="email" placeholder="E-mail" />
        <span class="wpcf7-not-valid-tip">Важно заполнить это поле.</span>
      </div>
      <div class="form-group form-group-input">
        <span class="form-group_label">Контактный номер</span>
        <input class="form-group_input" type="text" placeholder="Контактный номер" />
        <span class="wpcf7-not-valid-tip">Важно заполнить это поле.</span>
      </div>
      <div class="form-group form-group-checkbox">
        <input type="checkbox" />
        <div class="checkbox"></div>
        <span>Даю разрешение <br/>на обработку данных</span>
      </div>
      <div class="form-group form-group-submit">
        <input type="submit" value="Отправить" />
      </div>
    </div>
  </div>
</main>

<?php
get_footer();