$(".js-select").each(function () {
  const $select = $(this);

  $select.select2({
    width: "100%",
    minimumResultsForSearch: -1,
    placeholder: "Vyberte akci",
  });

  if ($select.closest(".submitForm").length) {
    $select.on("change", () => {
      $select.closest("form").submit();
    });
  }
});
