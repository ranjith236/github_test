$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ViewSearchResults.feature");
formatter.feature({
  "id": "enter-a-search-term-into-google-and-view-results",
  "tags": [
    {
      "name": "@search",
      "line": 1
    }
  ],
  "description": "",
  "name": "Enter a search term into Google and view results",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "enter-a-search-term-into-google-and-view-results;submit-search-term",
  "description": "",
  "name": "Submit search term",
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