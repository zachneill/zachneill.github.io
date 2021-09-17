#!binbash
# Runs env in Bash and start server

bash -i <<< 'source "env/Scripts/activate" &> /dev/null
clear
node server.js &> /dev/null
exec </dev/tty
'
