#!/bin/bash
cat $1 | while read line
do
	str=$line
	arr=($line)
  echo  ${arr[1]} ${arr[3]}>>$2
done

#sed -n 'N;s/\n/\t/p' $1>>$2
