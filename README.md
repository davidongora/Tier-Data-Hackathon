# Tier-Data-Hackathon

Develop a billing management software tailored for prepaid smart water meters. This software will manage virtual meters, generate meter readings, and automate billing processes, including automatic meter shutoff when the prepaid balance reaches zero.

## Team

1. **David Ongora**
   - **Role:** Frontend
   - **Email:** [ongoradavid5@gmail.com](mailto:ongoradavid5@gmail.com)
   - **Mobile:** (Add mobile number here)

2. **Teddy Muli**
   - **Role:** Backend
   - **Email:** [tmuli974@gmail.com](mailto:tmuli974@gmail.com)
   - **Mobile:** 0799 957 459

## Technology Stack

1. **Frontend:** ReactJS with Vite
2. **Backend:** Django and Django Rest Framework
3. **Database:** PostgreSQL
4. **Testing API:** Postman
5. **Version Control:** Git

## Requirements

1. NodeJS
2. Python 3
3. Git

## Api Endpoints

  1. meter/edit/ - Create and edit meter
  2. payment/edit/ - Create and edit payment
  3. waterusage/edit/ - Create and edit waterusage
  4. customer/list/ - List customers
  5. meter/list/ - List meters
  6. payment/list/ - List payments
  7. waterusage/list/ - List water usage reports
  8. customer/edit/ - Create and edit customer

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/davidongora/Tier-Data-Hackathon.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Tier-Data-Hackathon
    ```

### Frontend Setup

3. Install Node dependencies:
    ```bash
    npm install
    ```

4. Start the frontend server:
    ```bash
    npm run dev
    ```

### Backend Setup

5. Navigate into the backend directory:
    ```bash
    cd Backend
    ```

6. Create a Python virtual environment:
    ```bash
    python -m venv virt
    ```

7. Activate the virtual environment:
    - On Linux/MacOS:
        ```bash
        source virt/bin/activate
        ```
    - On Windows:
        ```bash
        source virt/Scripts/activate
        ```

8. Install Python packages:
    ```bash
    pip install -r requirements.txt
    ```

9. Add PostgreSQL credentials to the `.env` file.

10. Create a superuser for Django admin:
    ```bash
    python manage.py createsuperuser
    ```

11. Make database migrations:
    ```bash
    python manage.py makemigrations
    ```

12. Apply the migrations:
    ```bash
    python manage.py migrate
    ```

13. Start the backend server:
    ```bash
    python manage.py runserver
    ```
