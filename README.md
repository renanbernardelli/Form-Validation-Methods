# Form-Validation-Methods
:tada: Form validation built with the most recent patterns and UX concepts. :white_check_mark:

## What is it?
This repository is a set of validations developed in JavaScript and HTML5, with good UX practices.

## How does it work?

Among the validation rules, I can point out that **only those over 18 years old are allowed to send the registration**. The postal code is standardized, then an **AJAX request is sent using fetch and promises**. If validated, the address is filled in automatically.
The rule for filling in the Brazilian tax identification number (CPF) is created mathematically so that there is no fraud in the registration.
I also used a tool already developed by a major Brazilian developer, [Marcos Junior](https://github.com/codermarcos/simple-mask-money), to facilitate the creation of the currency mask.
Through two attributes, **validity and dataset**, and with the help of **Javascript**, I was able to customize the messages for each field. Checking the error using the validity attribute and accessing the dataset to find out which field the error occurred in.

## Product Validation
![## **product_validation.gif**](https://raw.githubusercontent.com/renanbernardelli/Form-Validation-Methods/master/gifs/product_validation.gif)
## User Validation
![## **user_validation.gif**](https://raw.githubusercontent.com/renanbernardelli/Form-Validation-Methods/master/gifs/user_validation.gif)
