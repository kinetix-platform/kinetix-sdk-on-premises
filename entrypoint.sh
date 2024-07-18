#!/bin/sh
set -e
set -o pipefail

echo "Generatig .env configuration file..."

output_file=".env"

# Iterate over all environment variables
printenv | while IFS='=' read -r key value; do
  # Escape double quotes and backslashes
  escaped_value=$(printf '%s\n' "$value" | sed 's/\\/\\\\/g; s/"/\\"/g')
  # Append to the .env file
  echo "$key=\"$escaped_value\"" >> $output_file
done

# Here your logic to retrieve secrets and/or configuration

exec "$@"