function lengthOfLongestSubstringOpitionOne(s: string): string {
  let maxLength: number = 0;
  let start: number = 0;
  let result: string = "";
  const charSet = new Set<string>();

  for (let end: number = 0; end < s.length; end++) {
    const char = s[end];

    while (charSet.has(char)) {
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(char);
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result = s.substring(start, end + 1);
    }
  }

  return `A resposta da primeira opção é ${result}, de tamanho ${result.length}`;
}

function lengthOfLongestSubstringOpitionTwo(s: string): string {
  const lastIndex: Record<string, number> = {};
  let maxLength: number = 0;
  let start: number = 0;
  let result: string = "";

  for (let end = 0; end < s.length; end++) {
    const char: string = s[end];
    if (char in lastIndex && lastIndex[char] >= start) {
      start = lastIndex[char] + 1;
    }
    lastIndex[char] = end;
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result = s.substring(start, end + 1);
    }
  }

  return `A resposta da segunda  opção é ${result}, de tamanho ${result.length}`;
}

function lengthOfLongestSubstringOpitionThree(s: string): string {
  const charIndexMap = new Map<string, number>();
  let maxLength: number = 0;
  let start: number = 0;
  let result: string = "";

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap.has(char) && charIndexMap.get(char)! >= start) {
      start = charIndexMap.get(char)! + 1;
    }
    charIndexMap.set(char, end);
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result = s.substring(start, end + 1);
    }
  }

  return `A resposta da terceira opção é ${result}, de tamanho ${result.length}`;
}

console.log(lengthOfLongestSubstringOpitionOne("abcabcbb"));
console.log(lengthOfLongestSubstringOpitionTwo("abcabcbb"));
console.log(lengthOfLongestSubstringOpitionThree("abcabcbb"));
