package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import StepDefinitions.BaseClass;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepsClass {
WebDriver driver=BaseClass.driver;
	
	@Given("I have opened the application in web browser")
	public void i_have_opened_the_application_in_web_browser() throws Exception {
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	}

	@When("I enter the username {string}")
	public void i_enter_the_username(String string) {
	 WebElement uname=driver.findElement(By.id("user-name"));
	 uname.sendKeys(string);
	}

	@When("I enter the password {string}")
	public void i_enter_the_password(String string) {
		 WebElement pword=driver.findElement(By.id("password"));
		 pword.sendKeys(string);
	}

	@When("I click on the LOGIN button")
	public void i_click_on_the_login_button() {
		 WebElement loginButton=driver.findElement(By.id("login-button")); 
		 loginButton.click();
	}

	@Then("I should land in the home page")
	public void i_should_land_in_the_home_page() {
		WebDriverWait wait=new WebDriverWait(driver, 500);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[@class='title']")));
		WebElement DispMsg = driver.findElement(By.xpath("//span[@class='title']"));
		
		String ActualMsg=DispMsg.getText(); 
		String ExpMsg="PRODUCTS";
		Assert.assertEquals(ActualMsg,ExpMsg);
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String string) {
		WebDriverWait wait=new WebDriverWait(driver, 500);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h3[@data-test='error']")));
		WebElement ErrorMsg=driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActualMsg=ErrorMsg.getText(); //Error message text is fetched in a string variable
		//String ExpMsg="Epic Username and password do not match any user in this service"; //Wrong msg
		String ExpMsg="Epic sadface: Username and password do not match any user in this service";
		Assert.assertEquals(ActualMsg,ExpMsg);
	}

}


