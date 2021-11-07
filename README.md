# JavaScript Password Generator

For this project, I have created a [password generator](https://mattglwilliams.github.io/password-generator/) using JavaScript. Below, you can see a series of screenshots showcasing the functionality of the website.

When a user lands on the website, below is what is displayed. There is a page title and a box that includes a title, another box where the generated password will go and a button to start the generation process.
![Image of the website on load](/Assets/Images/page_on_load.png)

When a user clicks the generate password button, they are served a prompt asking them to select the length they want the password to be between 8 - 128.
![Image of the length prompt](/Assets/Images/password_length.png)

If a user selects a number outside of the range, they are given an alert telling them to select a number between 8 - 128. When they click OK, they are given the length prompt again.
![Image of the numbers range alert](/Assets/Images/number_range.png)

Once they have selected a valid number, they are asked if they want to include special characters.
![Image of the special characters prompt](/Assets/Images/special_characters.png)

Then numbers.
![Image of the numbers prompt](/Assets/Images/numbers.png)

Then uppercase letters.
![Image of the uppercase prompt](/Assets/Images/uppercase.png)

Then lowercase letters.
![Image of the lowercase prompt](/Assets/Images/lowercase.png)

If the user doesn’t select any criteria, they are given an alert telling them they must choose at least one and to start again.
![Image of the select criteria alert](/Assets/Images/minimum_criteria.png)

Once they have selected their length and criteria, the password is generated.
![Image of the generaged password](/Assets/Images/generated_password.png)