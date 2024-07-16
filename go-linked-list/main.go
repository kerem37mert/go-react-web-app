package main

import (
	"github.com/kerem37mert/linkedlist"
)

func main() {
	var myList *linkedlist.LinkedList = linkedlist.New()

	myList.Add(5)
	myList.Add(2)
	myList.Add(3)
	myList.Add(6)
	myList.Add(4)

	myList.Traversal()

}
