FROM python:3.8.5

# Create a new folder called app in the container
RUN mkdir /app

# Set it as the working directory
WORKDIR /app

COPY requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

CMD flask run --host=0.0.0.0




