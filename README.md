# Custom AI Chatbot

This project aims to build a chatbot that responds to custom data. The Chatbot works with a specific domain related to the IT Industry. The interface is built with React and styled using Tailwind CSS. The backend is powered by Django, and it integrates with Google Generative AI for processing PDF documents to provide responses.
 
## Features

- Handles user input and displays bot responses
- Shows a loading indicator while waiting for a response
- Integrates with a Django backend
- Utilizes Google Generative AI for processing and responding based on PDF document content
- Faiss-cpu as the Vector DB.

## Technologies

### Frontend

- React
- Tailwind CSS

### Backend

- Django
- Google Generative AI(Gemini)
- PyPDF2
- LangChain
- FAISS
- LangChain-Google-GenAI

## Setup

### Prerequisites

- Node.js (v14 or later)
- Python (v3.8 or later)
- pip
- Django (v3.2 or later)
- A Google API Key for Google Generative AI

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/chandima2000/custom-chatbot-with-langchain-gemini.git
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the project
   ```bash
   npm run dev
   ```
4. Run the development server:
   
    Open your browser and go to ``` http://localhost:5173/  ```

### Backend Setup

1. Navigate to the backend folder
   ```bash
   cd backend
   ```
2. Create a virtual environment: (windows)
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment: (windows)
   ```bash
   venv\Scripts\activate
   ```
4. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Set up environment variables:
   
- Create a .env file in the backend directory with the following content:
   ```bash
   GOOGLE_API_KEY=your_google_api_key
   ```
6. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

## Usage
1. Open your browser and go to http://localhost:5173/ for the frontend.
2. Type a message in the chat input and press Send.
3. The chatbot will respond after fetching the answer from the backend.

## Backend Implementation
The backend is implemented using Django and integrates Google Generative AI for processing. Here's an overview of the core functionality:

- PDF Processing: The backend reads a PDF document and splits it into chunks.
- Vector Store: It creates a vector store using FAISS to perform similarity searches.
- Google Generative AI: It utilizes Google Generative AI for embeddings and conversational chains.
- LangChain: Simplify the process of building applications that utilize language models
- API Endpoint: The backend exposes an endpoint to handle chat requests and provide responses based on the PDF content.

## Contributions
All contributions are welcome. Feel free to open issues or submit pull requests.
