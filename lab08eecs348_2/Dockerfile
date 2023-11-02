# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY nflscorelab08.c .
# Compile the C program
RUN gcc -o nflscorelab08 nflscorelab08.c
# Set the command to run when the container starts
CMD ["./nflscorelab08"]