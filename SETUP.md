# Setup Instructions for TAPPER-OTK

## Prerequisites
Before you begin, ensure you have the following software installed:
- **Node.js** (v12 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Clone the Repository
Use the following command to clone the repository:
```bash
git clone https://github.com/elPioxler/TAPPER-OTK.git
cd TAPPER-OTK
```

## Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and set the necessary environment variables as per your requirements. (Refer to `.env.example` for guidance)
4. Start the backend server:
   ```bash
   npm start
   ```

## Setup Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```
   The application should now be running at `http://localhost:3000`.

## Running the Application
After both the backend and frontend servers are running, you can access the application through your web browser. If you encounter any issues, consult the README files in the respective directories or check for any logs in the terminal for possible error messages.

## Troubleshooting
- Ensure that your Node.js and npm versions are compatible with the project requirements.
- If you face any CORS issues, you might need to configure your backend server to handle CORS correctly.
- Consult the issue tracker if problems persist.