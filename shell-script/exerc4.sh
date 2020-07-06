#!/bin/bash

# Exerc 4
read -p " Informe o arquivo: " ARQUIVO
CAMINHO=`pwd $ARQUIVO`
if [ -e $CAMINHO ]
then
    echo "O caminho _ está habilitado"
    if [ -w "$ARQUIVO" ]
    then
       echo "Voce tem permissao para editar $CAMINHO/$ARQUIVO "
    else
       echo "Não é de escrita $CAMINHO/$ARQUIVO"
    fi
else
    echo "Não Localizado"
fi

