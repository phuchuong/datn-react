"use strict";

$(document).ready(function () {
  $('.m-combobox button').click(btnComboboxClick);
});

function btnComboboxClick() {
  $('.combobox_data').toggle();
}

function comboboxItemOnSelect() {}