#!/bin/bash

#Exerc7
CAMINHO=$1
if [ -d $CAMINHO ]
 then
    # QTDE=`ls -l $CAMINHO | wc -l`
    # echo "O caminho $CAMINHO tem `expr $QTDE - 1` arquivo(s)"
    QTDE=`find $CAMINHO -type f | wc -l` 
    echo "O caminho $CAMINHO tem $QTDE arquivo(s)"
 else
    echo "O Caminho não é um diretório"
fi
ls -l $CAMINHO