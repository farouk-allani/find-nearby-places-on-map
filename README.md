# Welcome to Nearest Amenities in Helsinki

This app is built using the stack of GraphQL and Next.js. It enables the user to enter a location in Helsinki and shows the nearest amenities such as stops, bike rentals, bike parking, and car parking. The app consists of two screens:

## Enter Location Screen
This is the first screen where the user enters their location in Helsinki. The user can either enter the location manually or use the current location option.

## Results Screen
This is the second screen where the user can view the results of the nearest amenities. The results are displayed in two formats:

- List: The results are displayed in a list format, showing the name, address, and distance of each amenity.
- Map: The results are also displayed on a map using MapBox, showing the location of each amenity.

The app uses the Digitransi API (https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql) to fetch the data for the nearest amenities.

## Getting Started
To run the app, you need to first install the required dependencies by running npm install in the root directory. Then, start the development server by running npm run dev in the root directory. The app will be running on http://localhost:3000.

## Technologies used
- GraphQL
- Next.js
- Digitransi API
- MapBox

## Screenshots
![homepage](https://user-images.githubusercontent.com/81933547/212565386-e01fb215-5ff6-4bc1-a453-30b34fc62a6a.png)
![list](https://user-images.githubusercontent.com/81933547/212565392-6024deaa-0799-45a4-b830-86afb7ddf4b8.png)
![ameneties](https://user-images.githubusercontent.com/81933547/212565516-81fb2cf7-89d0-459a-95bf-776ded317b48.png)

## Contribution

If you would like to contribute to this project, please do the following:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Test your changes
5. Submit a pull request


## Author
Farouk Allani

## License
This project is licensed under the MIT License.
