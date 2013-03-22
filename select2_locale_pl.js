/**
 * Select2 Polish translation
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Nie znaleziono dopasowań"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Proszę podać conajmniej " + n + " znak" + (min === 1 ? "" : (min < 5 ? "i" : "ów")); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Proszę podać maksymalnie" + n + " znak" + (min === 1 ? "" : (min < 5 ? "i" : "ów")); },
        formatSelectionTooBig: function (limit) { return "Możesz wybrać maksymalnie " + limit + " pozycj" + (limit === 1 ? "ę" : (limit < 5 ? "e" : "i")); },
        formatLoadMore: function (pageNumber) { return "Ładowanie kolejnych wyników..."; },
        formatSearching: function () { return "Wyszukiwanie..."; }
    });
})(jQuery);
