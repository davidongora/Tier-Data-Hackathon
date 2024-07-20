# Tier-Data-Hackathon

Develop a billing management software tailored for prepaid smart water meters. This software will manage virtual meters, generate meter readings, and automate billing processes, including automatic meter shutoff when the prepaid balance reaches zero.

## Team

1. **David Ongora**
   - **Role:** Frontend
   - **Email:** [ongoradavid5@gmail.com](mailto:ongoradavid5@gmail.com)
   - **Mobile:** 0112027035

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
    ```![Screenshot from 2024-07-19 18-30-49](https://github.com/user-attachments/assets/776e67ae-4b41-4dd7-aeec-c87698a20c9e)

14. Open the admin page at http://127.0.0.1:8000/admin
    
15. PROJECT INTERFACE
![Screenshot from 2024-07-19 18-30-44](https://github.com/user-attachments/assets/45a51a60-8446-4b78-96a5-abb4c08cc93b)
![Screenshot from 2024-07-19 18-30-44](https://github.com/user-attachments/assets/f977768b-32d0-410f-bd69-85e290e2d34e)

![Screenshot from 2024-07-19 18-31-15](https://github.com/user-attachments/assets/397cf9e8-6e44-4bf5-bc1a-1cb589900676)
![Screenshot from 2024-07-19 18-31-10](https://github.com/user-attachments/assets/9261f3c7-0419-44be-8228-a44f9195996e)
![Screenshot from 2024-07-19 18-31-06](https://github.com/user-attachments/assets/014d430b-de2e-48fe-908c-494db7929a28)
![Screenshot from 2024-07-19 18-31-00](https://github.com/user-attachments/assets/24230cb7-a9dd-45ab-b1be-85fcbd318dfe)
![Screenshot from 2024-07-19 18-30-56](https://github.com/user-attachments/assets/54e9dd4d-74fe-4101-99d5-3eb3de10b216)
![Screenshot from 2024-07-19 18-32-42](https://github.com/user-attachments/assets/0c949fe6-e26f-4484-8379-1f759153fc01)
![Screenshot from 2024-07-20 15-05-33](https://github.com/user-attachments/assets/85983750-c29d-4234-9d5a-ce5045659d58)
![Screenshot from 2024-07-20 15-04-15](https://github.com/user-attachments/assets/dd65a00f-9135-4690-adc9-a6fe9fe30f3a)
![Screenshot from 2024-07-19 18-33-31](https://github.com/user-attachments/assets/9f4540b2-4748-4fee-b254-1f8f783de795)
![Screenshot from 2024-07-19 18-33-28](https://github.com/user-attachments/assets/d60720f1-f1c5-4c88-b8a6-11b92cf497e0)
![Screenshot from 2024-07-19 18-33-22](https://github.com/user-attachments/assets/5255f560-31b8-4b34-b874-f9faf3b3954e)
![Screenshot from 2024-07-19 18-33-09](https://github.com/user-attachments/assets/c8d19276-496c-48e9-9b8c-616d86bfd744)
![Screenshot from 2024-07-19 18-33-04](https://github.com/user-attachments/assets/50732a6e-35c5-49ac-a73f-68ae8fc9cac0)
![Screenshot from 2024-07-19 18-33-00](https://github.com/user-attachments/assets/c803d345-3e12-475b-a062-1abe17b9cc09)
![Screenshot from 2024-07-19 18-32-55](https://github.com/user-attachments/assets/20e15970-e1ee-433b-bdd2-d8793254eea9)
![Screenshot from 2024-07-19 18-32-50](https://github.com/user-attachments/assets/0ed2fa43-76c9-46fc-b72e-9a7926ba74dd)
