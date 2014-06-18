package cucumber.jvm.parallel.cucumber;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(features = "src/test/resources/cucumber/examples/", tags = {"@autocorrect"},
format = {"html:target/cucumber-report/autocorrect"}, glue={"cucumber.jvm.parallel.cucumber.stepdefs"})
public class AutoCorrectAT {
}


//target/test-classes/cucumber/examples/

//changes to check in github