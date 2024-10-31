# Mars Application 🚀

Welcome to the **Mars Application**! This application serves as a comprehensive form system designed for users to fill out personal information, travel details, and health declarations, specifically tailored for an adventurous journey to Mars. 🌌🪐

Live Site: [marsform.netlify.app](https://marsform.netlify.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

---

## Features

- **Multi-Stage Form**: A three-stage form that guides users through personal details, travel preferences, and health information.
- **Dynamic Validation**: Ensures valid date selections, email format, and required fields as users progress.
- **Error Handling**: Custom error messages for form validation, including date checks for departure and return dates.
- **Form Reset on Submit**: Successful submissions reset the form to the initial stage, displaying a success message.

## Technologies Used

- **React** with hooks for state management.
- **React-Hook-Form** for form validation.
- **FontAwesome** icons for visual appeal.
- **CSS Modules** for styling.

---

## Setup

### Prerequisites
- **Node.js** (v12 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/nishchaypat/mars-application.git
    cd mars-application
    ```

2. **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

---

## Running the Application

1. **Start the Development Server**
    ```bash
    npm start
    # or
    yarn start
    ```

2. **Open Your Browser**
   - Visit `http://localhost:3000` to view the application in your browser.

---

## Usage

1. **Stage 1: Personal Information**
    - Enter your name, date of birth, nationality, email, and phone number.
    - All fields are validated; required fields will prompt for input if left blank.

2. **Stage 2: Travel Preferences**
    - Input your departure and return dates. Return dates must atleast 2 years after the departure date.
    - Select accommodation preference and add any special requests.

3. **Stage 3: Health and Emergency Information**
    - Declare any health decelaration, emergency contact details, medical emergency (optional).

4. **Submit the Form**
    - Upon successful form submission, the form resets to the first stage, displaying a success message.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy planning your journey to Mars! 🛸🌠
