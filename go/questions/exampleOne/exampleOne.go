package exampleOne

import "fmt"

func LengthOfLongestSubstringOpitionOne(s string) string {
	maxLength := 0
	start := 0
	var result string
	charSet := make(map[rune]bool)

	for end, char := range s {
		for charSet[char] {
			delete(charSet, rune(s[start]))
			start++
		}

		charSet[char] = true
		if end-start+1 > maxLength {
			maxLength = end - start + 1
			result = s[start : end+1]
		}
	}

	return fmt.Sprintf("A resposta da primeira opção é %s, de tamanho %d", result, len(result))
}
