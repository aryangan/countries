# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Initial Load / Visualing All Countries

When the page is loaded, the application will fetch data from the country API, and display each country's name, flag, population, and region, along with an index starting at 1.

# Search by Name Mechanism

To search for a country, letters can be typed into the search bar referring to a country's name, and the application will narrow down the countries shown while typing. It will keep track of which countries match your search criteria after every single letter is typed. For example, if you type "anti," only Antigua and Barbuda would show up. However, if you hit backspace to make your search "ant," then Antartica would also show up. This way, the user does not have to restart their typing each time; also, if they make a typo, they can just hit backspace as the counttries will be displayed dynamically based on the query input. 

# Filter by Region Mechanism

To filter by region, the multi-select dropdown can be used. Multiple regions can be selected and then removed, and the application will update the displayed countries accordingly. Also, once a region is selected, it will be removed from the dropdown menu so that the user will not be able to select the same region over and over. 

# Clicking on a Country to see More Information

Finally, each country can be clicked on to see a modal pop up with additional information about that country. This pop up will display languages, capital city, currency, country code, and regional bloc. If a country does not have one of these, it will display "None". For example, Antartica does not have a capital city, and hence that part of the additional info will display as "None" when the country is clicked on.

# Theme Switching

In order to switch between light and dark mode, the user must click the 'Switch Theme' button in the upper left hand corner of the screen. This way, they will be able to see the change in real time. 

# Running Application

To run this application, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
