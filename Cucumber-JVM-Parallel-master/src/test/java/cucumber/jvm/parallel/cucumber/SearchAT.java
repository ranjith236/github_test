package cucumber.jvm.parallel.cucumber;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(features = "src/test/resources/cucumber/examples/", tags = {"@search"}, 
format = {"html:target/cucumber-report/search"}, glue={"cucumber.jvm.parallel.cucumber.stepdefs"})
public class SearchAT {
}
