# Use lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into Nginx folder
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80