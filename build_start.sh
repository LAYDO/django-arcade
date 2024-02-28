#!/bin/bash

# Setup the environment variables for development
# Ensure the Redis server is running
echo "Starting Redis server..."
redis-server --daemonize yes

# Run the migrations
python3 manage.py makemigrations
python3 manage.py migrate


# Compile the frontend and run the server
npm run build && python3 manage.py collectstatic --noinput && python3 manage.py runserver