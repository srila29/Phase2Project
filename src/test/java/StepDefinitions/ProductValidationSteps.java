package StepDefinitions;

import java.util.List;

import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductValidationSteps {
	WebDriver driver=BaseClass.driver;
/*	@When("I land in the product page")
	public void i_land_in_the_product_page() {
		WebDriverWait wait=new WebDriverWait(driver, 500);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[@class='title']")));
		WebElement DispMsg = driver.findElement(By.xpath("//span[@class='title']"));
		
		String ActualMsg=DispMsg.getText(); 
		String ExpMsg="PRODUCTS";
		Assert.assertEquals(ActualMsg,ExpMsg);
	}*/

	@Then("Validate {string} and {string}")
	public void validate_and(String product, String priceExp) {
		String strXpath="//div[starts-with(text(),'"+product+"')]/parent::a/parent::div/following-sibling::div/div";
		WebElement priceAtcual=driver.findElement(By.xpath(strXpath));
		System.out.println(priceAtcual.getText());
		Assert.assertEquals(priceExp, priceAtcual.getText());
		
	
	}



}
