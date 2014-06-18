$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutoCorrectSearchTerms.feature");
formatter.feature({
  "id": "automatically-correct-mistyped-search-terms",
  "tags": [
    {
      "name": "@autocorrect",
      "line": 1
    }
  ],
  "description": "",
  "name": "Automatically correct mistyped search terms",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "automatically-correct-mistyped-search-terms;enter-search-term-and-view-related-images",
  "description": "",
  "name": "Enter search term and view related images",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the website \u0027http://www.google.co.uk\u0027",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I submit the search term \u0027opencredo\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "accept the first search result",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be on the page \u0027http://www.opencredo.com/\u0027",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});