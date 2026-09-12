Temperature Converter

A responsive and interactive web-based temperature converter developed as part of the Oasis Infobyte Web Development & Designing Internship — Level 1, Task 3.

The application allows users to enter a temperature and convert it between Celsius, Fahrenheit, and Kelvin. It also includes input validation and absolute-zero error handling to provide a reliable and user-friendly experience.

Project Overview

The Temperature Converter is a simple web application built using HTML5, CSS3, and Vanilla JavaScript.

Users can:

1.Enter a temperature value.
2.Select the input temperature unit.
3.Convert the value into Celsius, Fahrenheit, and Kelvin simultaneously.
4.Receive clearly labelled conversion results.
5.Get helpful error messages for invalid input.
6.Prevent temperatures below absolute zero.

Features

Three Temperature Units

  Celsius (°C)
  Fahrenheit (°F)
  Kelvin (K)

Numeric Input Validation

  Detects empty or invalid temperature values.
  Displays a user-friendly error message.

Absolute Zero Validation

  Prevents temperatures below:

    −273.15°C
    −459.67°F
     0K

Accurate Temperature Conversion

Converts the entered temperature into all supported units.

Responsive Design

Designed to work on desktop, tablet, and mobile screen sizes.

Clean User Interface

  Centred layout
  Clear labels
  Responsive result cards
  Simple and readable typography

Technologies Used

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| HTML5      | Structure and content           |
| CSS3       | Styling and responsive layout   |
| JavaScript | Conversion logic and validation |

Project Structure

text
TemperatureConverter/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    ├── laptop.png
    ├── tablet.png
    └── mobile.png

Conversion Formulas

Celsius to Fahrenheit
°F = (°C × 9/5) + 32

Celsius to Kelvin
K = °C + 273.15

Fahrenheit to Celsius
°C = (°F − 32) × 5/9

Fahrenheit to Kelvin
K = (°F − 32) × 5/9 + 273.15

Kelvin to Celsius
°C = K − 273.15

Kelvin to Fahrenheit
°F = (K − 273.15) × 9/5 + 32

Validation and Error Handling
 The application validates the user's input before performing any calculation.

If the input is empty or invalid, the application displays:

Please enter a valid numeric temperature

The application also checks for temperatures below absolute zero.
For example:
Celsius:    Temperature cannot be below -273.15°C.
Fahrenheit: Temperature cannot be below -459.67°F.
Kelvin:     Temperature cannot be below 0K.

How to Run the Project
1. Clone the repository
bash
git clone https://github.com/Mawuli-code/OIBSIP.git

2. Navigate to the project folder
bash
cd OIBSIP/WebDev-L1-TemperatureConverter

3. Open the project
Open `index.html` in any modern web browser.

You can also open the project using Visual Studio Code and launch it with a local development server such as Live Server.

Example Conversion
If the user enters:
25°C
The application produces:
25°C
77°F
298.15K

Screenshots

Screenshots demonstrating the application on different screen sizes will be added to the `screenshots` folder.

Desktop
[Desktop Screenshot](screenshots/laptop.png)

Tablet
[Tablet Screenshot](screenshots/tablet.png)

Mobile
[Mobile Screenshot](screenshots/mobile.png)

OIBSIP Internship Task
Organization:Oasis Infobyte
Track: Web Development & Designing
Level: Level 1
Task: Task 3 — Temperature Converter

This project was developed to demonstrate practical knowledge of:

1.HTML5 structure
2.CSS3 styling
3.Responsive web design
4.JavaScript DOM manipulation
5.Event handling
6.Mathematical calculations
7.Form/input validation
8.Error handling

Author
Avorklayi Bright
Aspiring Full Stack Developer with interests in:
1.Web Development
2.WordPress Development
3.UI/UX Design
4.Cloud Computing
5.AWS
6.Artificial Intelligence

GitHub
https://github.com/Mawuli-code

LinkedIn
[www.linked.com/in/bright-avorklayi-201988262](http://www.linked.com/in/bright-avorklayi-201988262)
