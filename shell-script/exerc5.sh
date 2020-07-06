#!/bin/bash

#Exer5
read -p " Informe o caminho: " ARQUIVO
if [ -f $ARQUIVO ]
 then
    echo "O caminho é um arquivo: "
 else
    if [ -d $ARQUIVO ] 
     then
        echo "O Caminho é um diretório: "
     else
        echo "O Caminho é outro tipo: "
    fi
fi
ls -l $ARQUIVO

