![Annotation 2025-12-25 132006](https://github.com/user-attachments/assets/aed7a0db-ad10-43da-8646-cfe45954c1d4)


## How  to Run the Project:
1. Clone the repository.
2. Run `npm install` to install dependencies (react-chartjs-2, chart.js).
3. Run `npm start` to view the report in the browser

## Where Scores are Stored:
The scores are currently stored in `data.json` as a mock data source. This allows the frontend to simulate fetching data from an API.

## How Feedback Logic Works:
The `getFeedback` function takes the calculated overall score and evaluates it against the ranges:
1. greater than or equal to 8 : Excellent
2. 6 to 7.9 : Good
3. Below 6 : Needs Improvement 

Overall score is dynamically averaged, and feedback updates automatically based on that value.
