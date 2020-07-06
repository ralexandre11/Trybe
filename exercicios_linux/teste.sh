#!/bin/bash
#Aqui eh um comentario

NAME="backup"
if [ -d $NAME ]
then
   echo "Isso eh um diretorio"
else
   echo "nao eh diretorio"
fi

a = 4
b = 5
if [ $a <= $b ]
then
   echo "eh menor"
else
   echo "nao eh menor"
fi