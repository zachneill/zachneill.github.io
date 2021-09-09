#!binbash
# Runs env in Bash and start server

bash -i <<< '
source "env/Scripts/activate"> /dev/null
clear > /dev/null
node server.js
exec </dev/tty
'
