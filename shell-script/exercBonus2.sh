#!/bin/bash

#Exerc Bonus 2
ARQUIVO=$1
for ARQ in $ARQUIVO
do
if [ -f $ARQ ]
 then
    echo "O caminho $ARQ é um arquivo"
 else
    if [ -d $ARQ ] 
     then
        echo "O Caminho $ARQ é um diretório"
     else
        echo "O Caminho $ARQ é outro tipo"
    fi
fi
ls -l $ARQ
echo "---------"
done

