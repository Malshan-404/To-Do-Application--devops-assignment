# Use lightweight official Nginx image (small size, secure)
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy application files to Nginx directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Health check to verify container is running
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost || exit 1
