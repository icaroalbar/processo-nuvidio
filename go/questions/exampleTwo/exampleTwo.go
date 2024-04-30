package exampleTwo

import "fmt"

func LengthOfLongestSubstringOpitionTwo(s string) string {
	lastIndex := make(map[rune]int)
	var maxLength, start int
	var result string

	for end, char := range s {
		if lastIndex[char] >= start {
			start = lastIndex[char] + 1
		}
		lastIndex[char] = end
		if end-start+1 > maxLength {
			maxLength = end - start + 1
			result = s[start : end+1]
		}
	}
	return fmt.Sprintf("A resposta da segunda  opção é %s, de tamanho %d", result, len(result))
}
