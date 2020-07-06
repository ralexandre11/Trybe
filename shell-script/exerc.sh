#!/bin/bash

# Exerc1 e 2
# MENSAGEM="Shell Script com variáveis é demais!"
# echo $MENSAGEM 

# Exerc 3
# COMP=`hostname`
# echo "Este script está rodando no computador: $COMP"

# Exerc 4
# read -p " Informe o arquivo: " ARQUIVO
# CAMINHO=`pwd $ARQUIVO`
# if [ -e $CAMINHO ]
# then
    # echo "O caminho _ está habilitado"
    # if [ -w "$ARQUIVO" ]
    # then
    #    echo "Voce tem permissao para editar $CAMINHO/$ARQUIVO "
    # else
    #    echo "Não é de escrita $CAMINHO/$ARQUIVO"
    # fi
# else
    # echo "Não Localizado"
# fi

#Exer5
# read -p " Informe o caminho: " ARQUIVO
# if [ -f $ARQUIVO ]
#  then
    # echo "O caminho é um arquivo"
#  else
    # if [ -d $ARQUIVO ] 
    #  then
        # echo "O Caminho é um diretório"
    #  else
        # echo "O Caminho é outro tipo"
    # fi
# fi
# ls -l $ARQUIVO

#Exerc6
# ARQUIVO=$1
# if [ -f $ARQUIVO ]
#  then
    # echo "O caminho é um arquivo"
#  else
    # if [ -d $ARQUIVO ] 
    #  then
        # echo "O Caminho é um diretório"
    #  else
        # echo "O Caminho é outro tipo"
    # fi
# fi
# ls -l $ARQUIVO

#Exerc7
# ARQUIVO=$1
# if [ -d $ARQUIVO ]
#  then
    # QTDE=`ls -l $ARQUIVO | wc -l`
    # echo "O caminho $ARQUIVO tem `expr $QTDE - 1` arquivo(s)"
#  else
    # echo "O Caminho não é um diretório"
# fi
# ls -l $ARQUIVO

#Exerc Bonus 1
# PALAVRAS="shell script usando estrutura repetição for terminal"
# for TEXTO in $PALAVRAS
# do
#    echo $TEXTO
# done

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