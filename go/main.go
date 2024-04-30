package main

import (
	"fmt"

	questionThreeExampleOne "github.com/icaroalbar/processo-nuvidio/questions/exampleOne"
	questionThreeExampleTwo "github.com/icaroalbar/processo-nuvidio/questions/exampleTwo"
)

func main() {

	value := "abcabcbb"

	fmt.Println(questionThreeExampleOne.LengthOfLongestSubstringOpitionOne(value))
	fmt.Println(questionThreeExampleTwo.LengthOfLongestSubstringOpitionTwo(value))
}
